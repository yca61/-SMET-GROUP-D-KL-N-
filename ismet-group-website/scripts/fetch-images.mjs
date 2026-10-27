// Stok görselleri (Unsplash) indirir ve public/images içine WebP olarak kaydeder.
// Yayın öncesi gerçek klinik fotoğrafları aynı dosya adlarıyla bu klasöre koymak yeterlidir.
import sharp from "sharp";
import { writeFile } from "node:fs/promises";

const images = {
  hero: ["1445527815219-ecbfec67492e", 2400],
  about: ["1629909613654-28e377c37b09", 1600],
  "svc-muayene": ["1606265752439-1f18756aa5fc", 1400],
  "svc-detartraj": ["1607613009820-a29f7bb81c04", 1400],
  "svc-dolgu": ["1588776814546-1ffcf47267a5", 1400],
  "svc-kanal": ["1631217868264-e5b90bb7e133", 1400],
  "svc-implant": ["1600170311833-c2cf5280ce49", 1400],
  "svc-zirkonyum": ["1606811841689-23dfddce3e95", 1400],
  "svc-estetik": ["1609840114035-3c981b782dfe", 1400],
  "gal-1": ["1598256989800-fe5f95da9787", 1600],
  "gal-2": ["1631248055158-edec7a3c072b", 1600],
  "gal-3": ["1505691938895-1758d7feb511", 1600],
  "gal-4": ["1519494026892-80bbd2d6fd0d", 1600],
  "gal-5": ["1497366216548-37526070297c", 1600],
  "gal-6": ["1600607687939-ce8a6c25118c", 1600],
  cinematic: ["1494790108377-be9c29b29330", 2400],
};

for (const [name, [id, w]] of Object.entries(images)) {
  const res = await fetch(`https://images.unsplash.com/photo-${id}?w=${w}&q=85&auto=format&fit=crop`);
  if (!res.ok) throw new Error(`${name}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const out = await sharp(buf).webp({ quality: 78 }).toBuffer({ resolveWithObject: true });
  await writeFile(`public/images/${name}.webp`, out.data);
  console.log(name, out.info.width + "x" + out.info.height, Math.round(out.data.length / 1024) + "KB");
}
