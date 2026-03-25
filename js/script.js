const pre = document.getElementById('ascii-animation');

// Текст для анимации
const text = "I LOVE YOU VICTORIA ";
let frame = 0;

function draw() {
    let output = "";
    // Параметры размера
    const width = 80;
    const height = 30;
    
    // Коэффициент пульсации (сердце будет "дышать")
    const pulse = Math.sin(frame * 0.1) * 0.2 + 0.9;

    for (let y = 12; y > -12; y--) {
        for (let x = -25; x < 25; x++) {
            // Математическая формула идеального сердца
            const xf = x * 0.05 / pulse;
            const yf = y * 0.1 / pulse;
            
            // Уравнение сердца
            const formula = Math.pow(xf * xf + yf * yf - 1, 3) - xf * xf * Math.pow(yf, 3);

            if (formula <= 0) {
                // Если внутри сердца - берем букву из фразы
                const charIndex = (Math.abs(x) + Math.abs(y) + frame) % text.length;
                output += text[charIndex];
            } else {
                output += " ";
            }
        }
        output += "\n";
    }
    
    pre.textContent = output;
    frame++; 
}

// Скорость кадров как на видео
setInterval(draw, 50);
