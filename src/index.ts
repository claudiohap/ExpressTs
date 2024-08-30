import dotenv from "dotenv";
dotenv.config();
import "reflect-metadata";

import express, { Request, Response } from "express";
import userRouter from "./routes/userRoute";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hello Typescript" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
