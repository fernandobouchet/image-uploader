import express from 'express';
import { getImage, saveImage } from '../controllers/imageController';
import { imageUpload } from '../middleware/imageUploadMiddleware';
const router = express.Router();

router.get('/:id', getImage);

router.post('/', imageUpload, saveImage);

export default router;
