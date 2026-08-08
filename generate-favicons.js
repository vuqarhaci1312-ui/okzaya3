const sharp = require('sharp');
const path = require('path');

const src = path.join(__dirname, 'shop.vitrumgroup.org/cdn/shop/files/ozkaya-favicon-source.png');
const outDir = path.join(__dirname, 'shop.vitrumgroup.org/cdn/shop/files');

async function generate() {
  const image = sharp(src);
  const meta = await image.metadata();
  const { data, info } = await image.ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  let minX = info.width;
  let minY = info.height;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const alpha = data[(y * info.width + x) * 4 + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropWidth = maxX - minX + 1;
  const cropHeight = maxY - minY + 1;

  const cropped = sharp(src).extract({
    left: minX,
    top: minY,
    width: cropWidth,
    height: cropHeight,
  });

  await cropped.clone().resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(path.join(outDir, 'ozkaya-favicon-32.png'));

  await cropped.clone().resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png().toFile(path.join(outDir, 'ozkaya-favicon-192.png'));

  console.log('Generated favicons from crop', cropWidth, 'x', cropHeight);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
