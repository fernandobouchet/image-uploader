import { NextFunction, Request, Response } from 'express';
import upload from '../services/multerService';

const imageUpload = async (req: Request, res: Response, next: NextFunction) => {
  upload.single('image')(req, res, (error) => {
    if (error) {
      return res.status(400).send({ error: error.message });
    }
    next();
    return;
  });
};

export { imageUpload };
