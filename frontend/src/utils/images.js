export let images = [];

export const clearImages = () => {
  images.forEach((imgObj) => {
    imgObj.element.remove();
  });
  images = [];
};