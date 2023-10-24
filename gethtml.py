from os import listdir

for file in listdir("pictures"):
    print(f"<a href='pictures/{file}'><img src='pictures/{file}'></a>")

# 1. wsadz wszystkie zdjecia do /pictures
# 2. odpal ten plij z pythonem co najmniej 3.7
# 3. skopiuj wszystko co wyjdzie w terminalu i daj do pliku index.html *pod <main>*