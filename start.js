#!/usr/bin/env node

// Simple start script for Render deployment
// This ensures Render can find and run the application correctly

const { spawn } = require('child_process');

// Run npm start
const npm = spawn('npm', ['start'], {
  stdio: 'inherit',
  shell: true
});

npm.on('close', (code) => {
  process.exit(code);
});

npm.on('error', (error) => {
  console.error('Failed to start application:', error);
  process.exit(1);
});