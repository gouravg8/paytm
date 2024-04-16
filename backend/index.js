import express from "express";
import rootRouter from "./routes/index.js";
import cors from "cors";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, () => console.log("listing on port", port));
