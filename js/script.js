const pre = document.getElementById('ascii-animation');

let t = 0;

function draw() {
    // b - массив символов, z - буфер глубины
    let b = [];
    let z = [];
    const width = 80;
    const height = 24;
    
    // Очистка
    for (let k = 0; k < width * height; k++) {
        b[k] = k % width == width - 1 ? "\n" : " ";
        z[k] = 0;
    }

    // Параметры вращения и пульсации
    const s = Math.sin(t);
    const c = Math.cos(t);
    const pulse = Math.sin(t * 2) * 0.1 + 0.9; // Эффект биения

    // Проходим по точкам поверхности сердца
    for (let i = 0; i < 6.28; i += 0.1) {      // угол 1
        for (let j = 0; j < 6.28; j += 0.05) { // угол 2
            
            // Математическая формула 3D сердца
            // Параметрические координаты
            let r = Math.sin(j) * (Math.sqrt(Math.abs(Math.cos(j))) / (Math.sin(j) + 1.4) - 2 * Math.sin(j) + 2);
            r *= pulse; // Применяем пульсацию

            const x = r * Math.cos(i) * Math.sin(j);
            const y = r * Math.cos(j);
            const z_axis = r * Math.sin(i) * Math.sin(j);

            // Вращение по осям
            const x_rot = x * c - z_axis * s;
            const z_rot = x * s + z_axis * c;

            // Проекция на 2D экран
            const ooz = 1 / (z_rot + 10); // Глубина
            const xp = Math.floor(width / 2 + 40 * ooz * x_rot);
            const yp = Math.floor(height / 2 - 20 * ooz * y);

            const o = xp + width * yp;
            if (yp >= 0 && yp < height && xp >= 0 && xp < width && ooz > z[o]) {
                z[o] = ooz;
                // Набор символов "i love you" для заполнения
                const chars = "victoria ";
                b[o] = chars[Math.floor(i * 1.5) % chars.length];
            }
        }
    }

    pre.textContent = b.join("");
    t += 0.05; // Скорость вращения
}

setInterval(draw, 40);
