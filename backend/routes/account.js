import express from "express";
import { Account } from "../db.js";
import mongoose from "mongoose";
import authMiddleware from "../middleware.js";
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({ userId: req.userId });

  res.json({ balance: account.balance });
});

router.post("/transfer", authMiddleware, async (req, res) => {
  //* start a session to use database transactions
  const session = await mongoose.startSession();
  session.startTransaction();

  const { to, amount } = req.body;
  //   console.log("to", to, "amt", amount);
  //   fetch acc withing transaction
  const account = await Account.findOne({ userId: req.userId }).session(
    session
  );
  const balance = account.balance;

  if (balance < amount || !account) {
    await session.abortTransaction();
    res.status(400).json({ message: "Insufficient balance" });
  }

  const toAccount = await Account.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    res.status(400).json({ message: "Invalid account" });
  }

  //   perform transaction
  try {
    await Account.updateOne(
      { userId: req.userId },
      { $inc: { balance: -amount } }
    );
    await Account.updateOne(
      {
        userId: to,
      },
      { $inc: { balance: amount } }
    );
    // commit the transaction
  } catch (error) {
    res.json({ message: "error hai biro" });
  }

  await session.commitTransaction();
  res.json({
    message: "Transfer successful",
    name: account.userId,
    too: toAccount.userId,
  });
});

export default router;
