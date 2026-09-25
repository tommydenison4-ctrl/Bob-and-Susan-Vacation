#!/bin/bash
cd "$(dirname "$0")"
if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js/npm is not installed. Install Node.js 20+ from nodejs.org, then run this file again."
  read -p "Press Enter to close..."
  exit 1
fi
if [ ! -d node_modules ]; then
  echo "Installing app dependencies..."
  npm install || exit 1
fi
echo "Starting Bob & Susan Travel at http://localhost:3000"
(open http://localhost:3000 >/dev/null 2>&1 &) || true
npm run dev
