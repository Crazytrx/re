=== Instrukcja wdrożenia gry Crypto Farmer na Firebase Hosting (PowerShell) ===

1. Pobierz Node.js:
   https://nodejs.org/

2. Zainstaluj Firebase CLI:
   Otwórz PowerShell i wpisz:
   npm install -g firebase-tools

3. Zaloguj się do Firebase:
   firebase login

4. Rozpakuj folder 'crypto-farmer.zip' np. na pulpit.

5. Wejdź do folderu w PowerShell:
   cd "C:\Users\TwojeImię\Desktop\crypto-farmer"

6. Jeśli nie masz jeszcze projektu w Firebase:
   - Wejdź na https://console.firebase.google.com/
   - Utwórz nowy projekt

7. Zainicjuj konfigurację:
   firebase init
   (Wybierz tylko "Hosting", wskaż istniejący projekt, folder: '.', nie nadpisuj index.html)

8. Wdróż grę:
   firebase deploy

Po zakończeniu zobaczysz adres strony w formacie:
✔ Hosting URL: https://twoj-projekt.web.app

Twoja gra jest teraz dostępna online! 🚀