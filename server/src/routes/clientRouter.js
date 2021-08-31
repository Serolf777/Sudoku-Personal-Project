import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();

const clientRoutes = ["/", "/user-sessions/new", "/users/new", "/puzzle/:id", "/puzzles", "/randomPuzzle/:difficulty", "/createnewpuzzle"];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
