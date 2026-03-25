const pre = document.getElementById('ascii-animation');

let x = 0, y = 0;

function draw() {
    let z = [];
    let b = [];
    // Очищаем массивы для нового кадра
    for (let k = 0; k < 1760; k++) {
        b[k] = k % 80 == 79 ? "\n" : " ";
        z[k] = 0;
    }
    
    // Математика вращения тора/сердца
    for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
            let c = Math.sin(i);
            let d = Math.cos(j);
            let e = Math.sin(x);
            let f = Math.sin(j);
            let g = Math.cos(x);
            let h = d + 2;
            let D = 1 / (c * h * e + f * g + 5);
            let l = Math.cos(i);
            let m = Math.cos(y);
            let n = Math.sin(y);
            let t = c * h * g - f * e;
            
            // Рассчитываем координаты символов на экране
            let x_coord = Math.floor(40 + 30 * D * (l * h * m - t * n));
            let y_coord = Math.floor(12 + 15 * D * (l * h * n + t * m));
            let o = x_coord + 80 * y_coord;
            
            // Выбираем символ из фразы "i love you"
            let chars = "i love you ";
            let N = Math.floor(8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n));
            
            if (22 > y_coord && y_coord > 0 && x_coord > 0 && 80 > x_coord && D > z[o]) {
                z[o] = D;
                // Вместо яркости берем буквы по кругу
                b[o] = chars[Math.floor(i * 1.5) % chars.length];
            }
        }
    }
    
    pre.textContent = b.join("");
    x += 0.05; // Скорость вращения по одной оси
    y += 0.03; // Скорость вращения по другой оси
}

// Запускаем отрисовку 30 раз в секунду
setInterval(draw, 30);
