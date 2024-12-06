Blueprint to run typescript in react

 -- cd backend --
 -- npm init -y --
 -- npm i -d typescript --
 -- npx tsc --init --
 -- In tsconfig.json change line 29 to "rootDir": "./src", and in line 61 change to "outDir": "./dist",  --
 -- npm i express --
 -- npm i -d  @types/express -- 
 -- add types according to the need --
 -- In Package.json add this below line 
 
 "scripts": {
    "build": "tsc -b",
    "start": "node dist/index.js",
    "dev": "npm run build && npm run start"
  },  --
