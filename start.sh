#!/bin/bash

# Navigate to backend and start the Node.js server
cd backend
echo "Starting backend..."
node app.js &

# Navigate to frontend and start the React app
cd ../frontend
echo "Starting frontend..."
npm start &

# Wait for both processes to finish
wait

