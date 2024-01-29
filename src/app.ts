import cors from "cors";
import express from "express";
import { userRouter } from "routers";

const app = express();

app
    .use(cors())
    .use(express.json())
    .get("/health", (_req, res) => res.send("OK!"))
    .post('/users', userRouter)

export default app;