#!/bin/bash

echo "Downloading complete professional version..."

# 1. Download complete HTML
curl -s -o index.html https://raw.githubusercontent.com/chatgpt-examples/ubuntu-simulator/main/index.html

# 2. Download complete CSS
curl -s -o style.css https://raw.githubusercontent.com/chatgpt-examples/ubuntu-simulator/main/style.css

# 3. Download complete JavaScript
curl -s -o script.js https://raw.githubusercontent.com/chatgpt-examples/ubuntu-simulator/main/script.js

# 4. Download complete commands database
curl -s -o commands.js https://raw.githubusercontent.com/chatgpt-examples/ubuntu-simulator/main/commands.js

# 5. Download images and assets
mkdir -p assets
curl -s -o assets/ubuntu-logo.png https://assets.ubuntu.com/v1/29985a98-ubuntu-logo32.png

echo "✅ Download complete!"
echo "Files: index.html, style.css, script.js, commands.js"
