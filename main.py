import time
import os

# Массив кадров для консоли
frames = [
    r"""
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
    """,
    r"""
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

       I LOVE YOU VICTORIA
    """,
    r"""
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

               I LOVE YOU VICTORIA
    """
]

# Чтобы работало в Windows (очистка консоли)
if os.name == 'nt':
    import ctypes

    kernel32 = ctypes.windll.kernel32
    kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), 7)


def animate():
    frame_index = 0
    try:
        while True:
            # Очищаем консоль перед каждым кадром
            os.system('cls' if os.name == 'nt' else 'clear')

            # Выводим кадр красным цветом (ANSI код)
            print("\033[91m" + frames[frame_index] + "\033[0m")

            # Переходим к следующему
            frame_index = (frame_index + 1) % len(frames)

            # Пауза
            time.sleep(0.3)
    except KeyboardInterrupt:
        # Плавный выход по Ctrl+C
        print("\033[92m\nАнимация остановлена.\033[0m")


if __name__ == "__main__":
    print("Запускаю анимацию для Виктории...")
    time.sleep(1)
    animate()