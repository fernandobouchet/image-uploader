import { getModelForClass, prop } from '@typegoose/typegoose';

class Image {
  @prop()
  name: string;

  @prop()
  file: {
    data: Buffer;
    contentType: string;
  };
}

const ImageModel = getModelForClass(Image);
export default ImageModel;
