const pre = document.getElementById('ascii-animation');

let A = 0; // Угол вращения
const textToSpin = " i love you"; // Текст на контуре

function draw3DHeart() {
    let z = new Array(1760).fill(0);
    let b = new Array(1760).fill(" ");
    
    // Параметры для отрисовки (можно не трогать)
    const width = 80;
    const height = 22;

    for (let j = 0; j < 6.28; j += 0.08) { // Глубина вращения
        for (let i = 0; i < 6.28; i += 0.02) { // Контур
            
            let sin_i = Math.sin(i);
            let cos_j = Math.cos(j);
            let sin_A = Math.sin(A);
            let sin_j = Math.sin(j);
            let cos_A = Math.cos(A);
            
            // Формула тора, изогнутого в сердце
            // 1. Рисуем круг (сечение тора)
            let circle_x = cos_j + 2; 
            
            // 2. Применяем 3D вращение
            let D = 1 / (sin_i * circle_x * sin_A + sin_j * cos_A + 5);
            
            let cos_i = Math.cos(i);
            let cos_A_2 = Math.cos(A); // Вторая ось вращения (для объема)
            let t = sin_i * circle_x * cos_A - sin_j * sin_A;

            // 3. Рассчитываем финальные 2D координаты на экране
            // (здесь магия, превращающая тор в сердце при вращении)
            let x_coord = Math.floor(40 + 30 * D * (cos_i * circle_x * Math.cos(0) - t * Math.sin(0)));
            // Немного сдвигаем Y, чтобы форма была ближе к сердцу
            let y_coord = Math.floor(11 + 15 * D * (cos_i * circle_x * Math.sin(0) + t * Math.cos(0)));
            let o = x_coord + width * y_coord;
            
            // Проверка, что точка попадает в границы экрана
            if (y_coord >= 0 && y_coord < height && x_coord >= 0 && x_coord < width && D > z[o]) {
                z[o] = D;
                
                // Выбираем букву из фразы "i love you" в зависимости от угла контура 'i'
                let charIndex = Math.floor(i * 2.5) % textToSpin.length;
                b[o] = textToSpin[charIndex];
            }
        }
    }
    
    // Склеиваем массив символов в одну строку с переносами
    let output = "";
    for (let k = 0; k < 1760; k++) {
        output += b[k];
        if (k % width === width - 1) {
            output += "\n";
        }
    }
    
    pre.textContent = output;
    A += 0.04; // Скорость вращения
}

// Запускаем анимацию 30 раз в секунду
setInterval(draw3DHeart, 30);
