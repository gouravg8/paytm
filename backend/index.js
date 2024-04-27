import express from "express";
import rootRouter from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import { JWT_SECRET } from "./config.js";
import cookieParser from "cookie-parser";

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: JWT_SECRET }));

app.use("/api/v1", rootRouter);

app.listen(port, () => console.log("listing on port", port));
