#!/usr/bin/env node
const gleech = require("./src");

async function run() {
  if (!process.argv[3]) {
    console.error("Usage:\n" + process.argv[1] + " [input] [output]");
    return;
  }
  const image = await gleech.read(process.argv[2]);
  await image.drumrollVerticalWave();
  await image.fractal(Math.floor(Math.random()));
  await image.colorShift();
  await image.writeAsync(process.argv[3]);
}

run();
