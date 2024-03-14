

## ❓ What is QRadar?
Albion QRadar provide a real-time map, aiding players in detecting other players, creatures, and resources nearby.

---
## ❓ If you want to use in game items

- Link: https://drive.google.com/file/d/1rBRuztS8Iw2ruM2nRGnr995bJyHgHY4L/view?usp=sharing

### Video Tutorial

## ❓ Usage (Windows)

1. Download Node.js v18.18.2:
- [Node.js v18.18.2 (64-bit)](https://nodejs.org/dist/v18.18.2/node-v18.18.2-x64.msi)
2. Download Npcap:
- [Npcap 1.72](https://npcap.com/dist/npcap-1.72.exe)
3. Download Python 3.10.2:
- [Python 3.10.2 (64-bit)](https://www.python.org/ftp/python/3.10.2/python-3.10.2-amd64.exe)
4. Install Windows Build Tools:
```
npm install --global windows-build-tools
```
5. Install Node.js packages:
```
npm install
```
6. Run the application:
```
node app.js
```
---
## ❓ Usage (Linux)

1. Switch to root user:
```
sudo su
```
2. Install Node Version Manager (NVM):
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```
3. Close the terminal.
4. Install Node.js version 18:
```
nvm install 18
nvm use 18
```
5. Install required libraries:
```
sudo apt-get install libpcap0.8 libpcap0.8-dev
```
6. Install Python 3.10:
```
sudo apt install python3.10
```
7. Install build essentials:
```
sudo apt-get install build-essential
```
8. Install Node.js dependencies:
```
npm install
```
9. Navigate to the project directory and run the application:
```
node app.js
```
10. Open http://localhost:5001 in your browser.
---
Utilized the parser from https://github.com/0xN0x/photon-packet-parser for efficient packet parsing.
---
