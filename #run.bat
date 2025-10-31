:: no mimicking echos
@echo off

:: For Local file paths (I don't really need them)
set ELECTRON_FILE_PATH="Electron\"
set REACT_FILE_PATH="central_hub_react\"

:: double checking stuff
:: echo %ELECTRON_FILE_PATH%
:: echo %REACT_FILE_PATH%

:: opens command prompt, then runs moves into the react folder and starts it
start cmd.exe /k "cd "%REACT_FILE_PATH%" & npm run dev"

:: same deal, except with electron
start cmd.exe /k "cd "%ELECTRON_FILE_PATH%" & npm run start"
