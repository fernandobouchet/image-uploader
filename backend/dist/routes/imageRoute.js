"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageController_1 = require("../controllers/imageController");
const imageUploadMiddleware_1 = require("../middleware/imageUploadMiddleware");
const router = express_1.default.Router();
router.get('/:id', imageController_1.getImage);
router.post('/', imageUploadMiddleware_1.imageUpload, imageController_1.uploadImage);
exports.default = router;
