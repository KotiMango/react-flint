//Media Resize
//because there are two formats of media urls and we can resize it within the api
//string.match and regex is used to resize all of the varying formats images

export const smallImage = (imagePath, size) => {
  if (imagePath) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("media/games", `media/resize/${size}/-/games`);
    return image;
  }
  return imagePath;
};
