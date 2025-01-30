#!/usr/bin/env node

const { compressImage } = require("./index");
const path = require("path");

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log(`Usage: ${inputPath}\n ${outputPath}\n ${quality}\n`);
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);
const quality = args[2] ? parseInt(args[2], 10) : 80;

compressImage(inputPath, outputPath, quality);
