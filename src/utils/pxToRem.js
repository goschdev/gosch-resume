export const pxToRem = (px) => {
  const rem = 0.0625;
  const scale = 1.34;
  return `${rem * px * scale}rem`;
};
