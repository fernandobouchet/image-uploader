import { Request, Response } from 'express';
import ImageModel from '../models/imageModel';

const saveImage = async (req: Request, res: Response) => {
  if (req.file) {
    try {
      const editedImage = new ImageModel({
        name: req.file.originalname,
        data: req.file.buffer,
        contentType: req.file.mimetype,
      });
      await editedImage.save();
      return res.status(200).send({ imageId: editedImage._id });
    } catch (error) {
      return res.status(400).send({ error: (error as Error).message });
    }
  } else {
    return res.status(404).send('File not found');
  }
};

const getImage = async (req: Request, res: Response) => {
  if (req.params.id === 'favicon.ico') {
    return res.status(404);
  }

  const image = await ImageModel.findById(req.params.id);

  if (!image) {
    return res.status(400).send('Invalid not found');
  }
  return res
    .status(200)
    .set('Content-Type', `${image.contentType}`)
    .send(image.data);
};

export { saveImage, getImage };
