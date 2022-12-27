import { Request, Response } from 'express';
import ImageModel from '../models/imageModel';
import upload from '../services/uploadImageService';

const uploadImage = async (req: Request, res: Response) => {
  upload.single('image')(req, res, (err) => {
    if (err) {
      res.send(err);
    } else {
      if (req.file) {
        console.log(req.file);
        const image = new ImageModel({
          name: req.file.originalname,
        });
        image.save((err) => {
          if (err) {
            res.send(err);
          } else {
            res.send('Image uploaded successfuly');
          }
        });
      } else {
        res.send('Image file is missing');
      }
    }
  });
};

export { uploadImage };
