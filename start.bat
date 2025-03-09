@echo off

:: Navigate to backend and start the Node.js server
cd backend
echo Starting backend...
start cmd /k "node app.js"

:: Navigate to frontend and start the React app
cd ../frontend
echo Starting frontend...
start cmd /k "npm start"

:: Wait for user input to close the script
pause
