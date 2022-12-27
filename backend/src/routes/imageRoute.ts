import express from 'express';
import { getImage, uploadImage } from '../controllers/imageController';
const router = express.Router();

router.get('/:id', getImage);

router.post('/', uploadImage);

export default router;
