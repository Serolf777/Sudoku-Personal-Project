import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import puzzlesRouter from "./api/v1/puzzlesRouter.js";
import userSaveFile from "./api/v1/userSaveFileRouter.js";
import randomPuzzleRouter from "./api/v1/randomPuzzleRouter.js";
import createNewPuzzleRouter from "./api/v1/createNewPuzzleRouter.js";

const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter); //place your server-side routes here
rootRouter.use("/api/v1/puzzles", puzzlesRouter)
rootRouter.use("/api/v1/userSaveFile", userSaveFile)
rootRouter.use("/api/v1/randomPuzzle", randomPuzzleRouter)
rootRouter.use("/api/v1/createNewPuzzle", createNewPuzzleRouter)

export default rootRouter;
