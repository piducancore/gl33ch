// :D
const gleech = require("./src");

module.exports = async function (input) {
  const image = await gleech.read(input);
  await image.drumrollVerticalWave();
  await image.fractal(Math.floor(Math.random()));
  await image.colorShift();
  return image;
};
