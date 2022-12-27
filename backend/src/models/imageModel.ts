import { getModelForClass, prop } from '@typegoose/typegoose';

class Image {
  @prop()
  name: string;
}

const ImageModel = getModelForClass(Image);
export default ImageModel;
