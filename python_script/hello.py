import subprocess
import time
import pyautogui
import random

# Safety: move mouse to top-left corner to stop
pyautogui.FAILSAFE = True

# Give time to prepare (open apps)
time.sleep(5)


def get_all_windows():
    """
    Returns list of all window IDs currently open
    """
    output = subprocess.check_output(["wmctrl", "-l"]).decode("utf-8")
    windows = []

    for line in output.splitlines():
        parts = line.split(None, 3)
        if len(parts) >= 1:
            windows.append(parts[0])

    return windows


while True:
    windows = get_all_windows()

    for win in windows:
        # Bring window to foreground (Alt+Tab equivalent)
        subprocess.run(["wmctrl", "-i", "-R", win])

        # Move cursor randomly on screen
        screen_width, screen_height = pyautogui.size()
        x = random.randint(0, screen_width)
        y = random.randint(0, screen_height)

        pyautogui.moveTo(
            x, y,
            duration=random.uniform(0.5, 1.5)
        )

        # Small human-like pause
        time.sleep(random.uniform(1.5, 3))
