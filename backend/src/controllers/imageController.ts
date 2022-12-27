import { Request, Response } from 'express';
import { mongo } from 'mongoose';
import { dbConnection } from '../database/db';
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

const getImage = async (req: Request, res: Response) => {
  const imageId = req.params.id;

  if (!mongo.ObjectId.isValid(imageId)) {
    res.status(400).send('Invalid image ID');
    return;
  }

  const objectId = new mongo.ObjectId(imageId);

  const bucket = new mongo.GridFSBucket(dbConnection.db);

  const cursor = bucket.find({ _id: objectId });

  for await (const file of cursor) {
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      const readstream = bucket.openDownloadStream(file._id);
      readstream.pipe(res);
      return;
    } else {
      res.status(404).send('Not an image');
      return;
    }
  }
  res.send('Not found');
};
export { uploadImage, getImage };
