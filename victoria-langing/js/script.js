const asciiElement = document.getElementById('ascii-animation');

// Массив кадров для анимации. Каждый кадр - это строка.
const frames = [
  // Кадр 1
  `
         IIII I       OOOOOO   VVV  VVV EEEEEEE
          II  I      OO    OO   VV  VV  EE
          II  I      OO    OO    VVVV   EEEEE
          II  I      OO    OO     VV    EE
         IIII IIIIII  OOOOOO      VV    EEEEEEE

       YYYYYY OOOOOO  UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU
         YY   OOOOOO   UUUUUU    *** *** ***
  `,
  // Кадр 2 (с небольшим сдвигом)
  `
         IIII I       OOOOOO   VVV  VVV EEEEEEE
          II  I      OO    OO   VV  VV  EE
          II  I      OO    OO    VVVV   EEEEE
          II  I      OO    OO     VV    EE
         IIII IIIIII  OOOOOO      VV    EEEEEEE

       YYYYYY OOOOOO  UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU
         YY   OOOOOO   UUUUUU    *** *** ***

           I LOVE YOU  VICTORIA
  `,
    // Кадр 3 (еще сдвиг)
  `
         IIII I       OOOOOO   VVV  VVV EEEEEEE
          II  I      OO    OO   VV  VV  EE
          II  I      OO    OO    VVVV   EEEEE
          II  I      OO    OO     VV    EE
         IIII IIIIII  OOOOOO      VV    EEEEEEE

       YYYYYY OOOOOO  UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU
         YY   OOOOOO   UUUUUU    *** *** ***

                  I LOVE YOU  VICTORIA
  `,
      // Кадр 4
  `
         IIII I       OOOOOO   VVV  VVV EEEEEEE
          II  I      OO    OO   VV  VV  EE
          II  I      OO    OO    VVVV   EEEEE
          II  I      OO    OO     VV    EE
         IIII IIIIII  OOOOOO      VV    EEEEEEE

       YYYYYY OOOOOO  UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU
         YY   OOOOOO   UUUUUU    *** *** ***

                          I LOVE YOU  VICTORIA
  `,
        // Кадр 5
  `
         IIII I       OOOOOO   VVV  VVV EEEEEEE
          II  I      OO    OO   VV  VV  EE
          II  I      OO    OO    VVVV   EEEEE
          II  I      OO    OO     VV    EE
         IIII IIIIII  OOOOOO      VV    EEEEEEE

       YYYYYY OOOOOO  UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU   !!!  !!!  !!!
         YY  OO    OO UUU  UUU
         YY   OOOOOO   UUUUUU    *** *** ***

                                  I LOVE YOU  VICTORIA
  `
];

let currentFrame = 0;

function animate() {
  // Выводим текущий кадр в HTML элемент
  asciiElement.textContent = frames[currentFrame];

  // Переходим к следующему кадру
  currentFrame = (currentFrame + 1) % frames.length;
}

// Запускаем анимацию каждые 200 миллисекунд (можно менять скорость)
setInterval(animate, 200);

// Также выводим в консоль, как на видео
console.log("%cДля Виктории <3", "color: red; font-size: 20px; font-weight: bold;");