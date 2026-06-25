import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src1 = "C:\\Users\\joseantonio.navarro\\.gemini\\antigravity-ide\\brain\\c667ebcb-0663-42d4-8651-9c529916c9e2\\pack_3_box_1781704116953.png";
const src2 = "C:\\Users\\joseantonio.navarro\\.gemini\\antigravity-ide\\brain\\c667ebcb-0663-42d4-8651-9c529916c9e2\\pack_6_box_1781704129791.png";
const src3 = "C:\\Users\\joseantonio.navarro\\.gemini\\antigravity-ide\\brain\\c667ebcb-0663-42d4-8651-9c529916c9e2\\pack_12_box_1781704142465.png";

const dest1 = path.join(__dirname, 'src', 'assets', 'pack_3_box.png');
const dest2 = path.join(__dirname, 'src', 'assets', 'pack_6_box.png');
const dest3 = path.join(__dirname, 'src', 'assets', 'pack_12_box.png');

async function copy() {
  try {
    await fs.copyFile(src1, dest1);
    await fs.copyFile(src2, dest2);
    await fs.copyFile(src3, dest3);
    console.log("¡Cajas rojas copiadas correctamente! Ya puedes recargar la web.");
  } catch (e) {
    console.error("Error al copiar imágenes:", e);
  }
}

copy();
