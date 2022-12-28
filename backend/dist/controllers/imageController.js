"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImage = exports.uploadImage = void 0;
const mongoose_1 = require("mongoose");
const db_1 = require("../database/db");
const uploadImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageFile = req.file;
    res.send({ imageId: imageFile.id });
});
exports.uploadImage = uploadImage;
const getImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    const imageId = req.params.id;
    if (!mongoose_1.mongo.ObjectId.isValid(imageId)) {
        res.status(400).send('Invalid image ID');
        return;
    }
    const objectId = new mongoose_1.mongo.ObjectId(imageId);
    const bucket = new mongoose_1.mongo.GridFSBucket(db_1.dbConnection.db);
    const cursor = bucket.find({ _id: objectId });
    try {
        for (var _d = true, cursor_1 = __asyncValues(cursor), cursor_1_1; cursor_1_1 = yield cursor_1.next(), _a = cursor_1_1.done, !_a;) {
            _c = cursor_1_1.value;
            _d = false;
            try {
                const file = _c;
                if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
                    const readstream = bucket.openDownloadStream(file._id);
                    readstream.pipe(res);
                    return;
                }
                else {
                    res.status(404).send('Not an image');
                    return;
                }
            }
            finally {
                _d = true;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (!_d && !_a && (_b = cursor_1.return)) yield _b.call(cursor_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    res.status(404).send('Not found');
});
exports.getImage = getImage;
