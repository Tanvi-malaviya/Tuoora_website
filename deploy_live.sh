#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Configuration
APP_DIR="/var/www/html/tuoora.com/website" # Default fallback directory, script will auto-detect current directory
PM2_APP_NAME="tuoora"
BRANCH="main"

# Text Styling
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}==================================================${NC}"
echo -e "${BLUE}          TUOORA WEBSITE LIVE DEPLOYMENT          ${NC}"
echo -e "${BLUE}==================================================${NC}"

# Navigate to project directory (if specified, otherwise use current working directory)
if [ -d "$APP_DIR" ]; then
    echo -e "${YELLOW}Navigating to app directory: $APP_DIR...${NC}"
    cd "$APP_DIR"
else
    echo -e "${YELLOW}Using current directory: $(pwd)...${NC}"
fi

# 1. Fetch and Pull latest changes
echo -e "${YELLOW}Fetching latest changes from Git on branch '$BRANCH'...${NC}"
git fetch origin
git checkout $BRANCH
git pull origin $BRANCH

# 2. Install dependencies
echo -e "${YELLOW}Installing npm dependencies...${NC}"
npm install --frozen-lockfile || npm install

# 3. Build the application
echo -e "${YELLOW}Building the Next.js application...${NC}"
npm run build

# 4. Restart Application using PM2
if command -v pm2 &> /dev/null; then
    echo -e "${YELLOW}PM2 detected. Managing application process...${NC}"
    
    # Check if process is already running under PM2
    if pm2 show $PM2_APP_NAME > /dev/null 2>&1; then
        echo -e "${GREEN}Restarting existing PM2 process '$PM2_APP_NAME'...${NC}"
        pm2 reload $PM2_APP_NAME
    else
        echo -e "${GREEN}Starting new PM2 process '$PM2_APP_NAME'...${NC}"
        pm2 start npm --name "$PM2_APP_NAME" -- start
    fi
    
    # Save PM2 process list to resurrect on system reboot
    pm2 save
else
    echo -e "${RED}PM2 not found.${NC}"
    echo -e "${YELLOW}You can start the server manually using: npm run start${NC}"
    echo -e "${YELLOW}Or install PM2 globally: npm install -g pm2${NC}"
fi

echo -e "${BLUE}==================================================${NC}"
echo -e "${GREEN}   Deployment completed successfully! Website is LIVE.   ${NC}"
echo -e "${BLUE}==================================================${NC}"
