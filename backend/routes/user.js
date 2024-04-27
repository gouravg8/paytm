import express from "express";
import { userSignup, userLogin, userUpdate } from "../schema/authValidation.js";
import { Account, User } from "../db.js";
const router = express.Router();
import { JWT_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
import authMiddleware from "../middleware.js";

router.post("/signup", async (req, res) => {
  const { success } = userSignup.safeParse(req.body);
  const { username, password, firstName, lastName } = req.body;

  if (!success) {
    res
      .status(411)
      .json({ message: "Email isalready taken/ incorrect inputs" });
  }

  const exitingUser = await User.findOne({ username: req.body.username });

  if (exitingUser)
    res.status(411).json({
      message: "Email isalready taken/ incorrect inputs",
    });

  const user = await User.create({ username, password, firstName, lastName });
  const userId = user._id;

  req.session.user = req.body;
  console.log("user created with header", req.body);
  // -------------create a new account ----------

  const account = await Account.create({
    userId,
    balance: Math.random() * 10000 + 1,
  });

  const token = jwt.sign(
    {
      userId,
    },
    JWT_SECRET
  );

  // res.setHeader("Authorization", `Bearer ${token}`);

  res.setHeader("Authorization", `Bearer ${token}`).json({
    message: "User created successfully",
    token: token,
    head1: res.header,
    head2: req.headers,
  });
});

router.post("/signin", authMiddleware, async (req, res) => {
  console.log(req.headers);
  const { username, password } = req.body;
  const { success } = userLogin.safeParse({ username, password });

  if (!success) res.status(411).json({ message: "Error while loggin in" });

  const user = await User.findOne(
    { username: username, password: password },
    (err, user) => {
      if (err) res.status(411).json({ message: "Error while loggin in" });
      // console.log(user);
    }
  );

  const userId = user._id;

  const token = jwt.verify(userId, JWT_SECRET);

  res.json({ token: token });
});

router.put("/", authMiddleware, async (req, res) => {
  const body = req.body;

  const { success } = userUpdate.safeParse({ ...body });
  if (!success) res.status(411).json({ message: "password is too small" });

  const user = await User.findOneAndUpdate(
    { ...body },
    { ...body },
    (err, user) => {
      if (err) res.send(411).json({ message: "error while updating info" });
      // console.log(user);
    }
  );
  res.status(200).json({ message: "Updated successfully" });
});

router.get("/bulk", async (req, res) => {
  const queryFilter = req.body.filter || "";

  const users = await User.find({
    $or: [
      {
        firstName: {
          $regex: queryFilter,
        },
      },
      {
        lastName: { $regex: queryFilter },
      },
    ],
  });
  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});

export default router;
