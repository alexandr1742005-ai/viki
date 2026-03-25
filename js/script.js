const canvas = document.getElementById('ascii-animation');

// Текст, из которого будет состоять сердце
const words = "I LOVE YOU VICTORIA ";
let offset = 0;

function drawHeart() {
    let output = "";
    // Масштаб сердца (можно менять)
    const scale = 13; 
    
    // Проходим по сетке координат Y и X
    for (let y = 15; y > -15; y--) {
        for (let x = -30; x < 30; x++) {
            // Математическая формула сердца
            // (x^2 + y^2 - 1)^3 - x^2 * y^3 <= 0
            const xVal = x / scale;
            const yVal = y / scale;
            
            const formula = Math.pow(xVal * xVal + yVal * yVal - 1, 3) - xVal * xVal * Math.pow(yVal, 3);

            if (formula <= 0) {
                // Если точка внутри сердца, берем букву из фразы
                const charIndex = (Math.abs(x + y) + offset) % words.length;
                output += words[charIndex];
            } else {
                // Если снаружи — пробел
                output += " ";
            }
        }
        output += "\n";
    }
    
    canvas.textContent = output;
    offset++; // Сдвигаем текст для эффекта бегущей строки
}

// Запуск анимации (скорость 100мс)
setInterval(drawHeart, 100);
