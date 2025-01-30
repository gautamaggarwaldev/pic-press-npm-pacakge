const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

/**
 * Compress an image
 * @param {string} inputPath - Path to the input image file
 * @param {string} outputPath - Path to save the compressed image
 * @param {number} quality - Compression quality (1-100)
 * @returns {Promise<void>}
 */
async function compressImage(
  inputPath = "ip_images/input.jpg",
  outputPath = "op_images/output.jpg",
  quality = 20
) {
  try {
    const resolvedInputPath = path.resolve(inputPath);
    const resolvedOutputPath = path.resolve(outputPath);

    if (!fs.existsSync(resolvedInputPath)) {
      throw new Error(`Input file not found: ${resolvedInputPath}`);
    }

    await sharp(resolvedInputPath)
      .jpeg({ quality }) // Compress to JPEG with specified quality
      .toFile(resolvedOutputPath);

    console.log(`✅ Image compressed successfully: ${resolvedOutputPath}`);
  } catch (error) {
    console.error("❌ Error compressing image:", error.message);
  }
}

module.exports = { compressImage };

// Example usage (for testing)
if (require.main === module) {
  compressImage();
}
