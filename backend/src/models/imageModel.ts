import { getModelForClass, prop } from '@typegoose/typegoose';

class Image {
  @prop()
  name: string;

  @prop()
  data: Buffer;

  @prop()
  contentType: String;
}

const ImageModel = getModelForClass(Image);
export default ImageModel;
