// export const resizeImage = (imageUrl, width = 'original') => `https://image.tmdb.org/t/p/${width}${imageUrl}`;

const IMAGE_URL = "https://image.tmdb.org/t/p";

export const resizeImage = (imageUrl, options = {}) => {
  const width = window.innerWidth;
  let imageSize = "original";

  if (width < 400) {
    imageSize = options.mobile || "w780";
  } else if (width < 768) {
    imageSize = options.tablet || "w780";
  } else if (width < 1280) {
    imageSize = options.desktop || "w780";
  } else {
    imageSize = options.large || "w1280";
  }

  return `${IMAGE_URL}/${imageSize}${imageUrl}`;
};