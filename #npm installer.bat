:: so it doesn't mimic my echos
@echo off

echo YOU DO NOT NEED TO RUN THIS EVERY TIME, ONLY DO SO ON A NEW MACHINE OF IT THERE IS NEW PACKAGES.
echo 	YOU HAVE BEEN WARNED AND CAN STILL CLOSE THIS WINDOW...

pause

set ELECTRON_FILE_PATH="Electron\"
set REACT_FILE_PATH="central_hub_react\"

:: launches 2 cmd windows and runs install for respective npm stuff,
:: it then waits 5 seconds and forcefully closes the cmd window
start cmd.exe /k "cd "%REACT_FILE_PATH%" & npm install & timeout /t 5 /nobreak & exit"
start cmd.exe /k "cd "%ELECTRON_FILE_PATH%" & npm install & timeout /t 5 /nobreak & exit"

