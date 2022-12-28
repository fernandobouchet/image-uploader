import { Request, Response } from 'express';
import { mongo } from 'mongoose';
import { dbConnection } from '../database/db';

const uploadImage = async (req: any, res: Response) => {
  const imageFile = (req as any).file;
  res.send({ imageId: imageFile.id });
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
  res.status(404).send('Not found');
};

export { uploadImage, getImage };
