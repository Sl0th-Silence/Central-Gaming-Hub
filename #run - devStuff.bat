:: launches vscode. Also makes it so the cmd window won't close but I can't fix that
start cmd /k code .

:: For Local file paths (I don't really need them)
set ELECTRON_FILE_PATH="Electron\"
set REACT_FILE_PATH="central_hub_react\"

:: double checking stuff
:: echo %ELECTRON_FILE_PATH%
:: echo %REACT_FILE_PATH%

:: launches cmd, moves and starts react
start cmd.exe /k "cd "%REACT_FILE_PATH%" & npm run dev"

:: launches cmd, moves and starts electron
start cmd.exe /k "cd "%ELECTRON_FILE_PATH%" & npm run start"
