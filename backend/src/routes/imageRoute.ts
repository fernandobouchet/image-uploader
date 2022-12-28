import express from 'express';
import { getImage, uploadImage } from '../controllers/imageController';
import { imageUpload } from '../middleware/imageUploadMiddleware';
const router = express.Router();

router.get('/:id', getImage);

router.post('/', imageUpload, uploadImage);

export default router;
