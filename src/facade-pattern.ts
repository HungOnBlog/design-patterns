class FromJpgImageConverter {
  convert(image: string, codec: string, toExt: string): string {
    return `Convert ${image} to ${codec} to ${toExt}`;
  }
}

class FromPngImageConverter {
  convert(
    image: string,
    codec: string,
    size: [width: number, height: number],
    destinationExtension: string,
  ): string {
    return `Convert ${image} to ${codec} with size ${size} to ${destinationExtension}`;
  }
}

class ImageConverter {
  convertImage(
    image: string,
    codec: string,
    toExt: string,
    size?: [width: number, height: number],
  ): string {
    if (image.includes('.jpg')) {
      const fromJpgImageConverter = new FromJpgImageConverter();
      return fromJpgImageConverter.convert(image, codec, toExt);
    } else if (image.includes('.png')) {
      const fromPngImageConverter = new FromPngImageConverter();
      return fromPngImageConverter.convert(
        image,
        codec,
        size as [number, number],
        toExt,
      );
    } else {
      throw new Error('Not supported image format');
    }
  }
}

function client() {
  const image: string = 'some_image.jpg';
  const codec = 'some codec';
  const destinationExt = 'webp';
  const imageConverter = new ImageConverter();
  const result = imageConverter.convertImage(image, codec, destinationExt);
  console.log(result);
}
