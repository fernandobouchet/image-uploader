import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI!,
  file: (_req, file) => {
    return {
      filename: file.originalname,
    };
  },
});

const upload = multer({ storage: storage });

export default upload;
