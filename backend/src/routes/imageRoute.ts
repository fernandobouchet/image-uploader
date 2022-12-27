import express from 'express';
import { uploadImage } from '../controllers/imageController';
const router = express.Router();

router.post('/', uploadImage);

export default router;
