import { searchService } from "../services/search-service";
import { RequestWithUser } from "../types/like";
import { Request, Response } from "express";

export const searchController = async (req: RequestWithUser, res: Response) => {
  const { query } = req.query;
  const userId = req.user?.id;
  const user = await searchService(query as string, userId);
  res.json(user);
};
