# Publish React components as an npm package

Created the boilerplate with `npx create-react-app`

## Procedure

- Delete everything besides `App.js` and `index.js`
- Create a folder `lib` inside `src` that stores everything I am to publish on npm.
  - Create `components` folder inside `lib` where component elements resides and `index.js` to export them

### Install Babel and build the dist folder

- To install Babel, run the following in the CLI:

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install -save @babel/polyfill
```

In the top-level folder of your project, add a file called babel.config.json and add the following presets:

```
{
 "presets": [
  [
   "@babel/env",
    {
     "targets": {
     "edge": "17",
     "firefox": "60",
     "chrome": "67",
     "safari": "11.1"
      },
   "useBuiltIns": "usage",
   "corejs": "3.6.5"
    }
],
   "@babel/preset-react"
]
}
```

@babel/env tells the browser which versions it should target, and @babel/preset-react allows Babel to compile JSX.

In package.json , under scripts, replace the build script with the following:
`"build": "rm -rf dist && NODE_ENV=production babel src/lib --out-dir dist --copy-files"`

Alter the `package.json`

```
  "name": "tushar-try",
  "description": "Basic Form React Component",
  "author": "Tushar Goyal",
  "version": "0.1.0",
  "private": false,
  "main": "dist/index.js",
  "module": "dist/index.js",
  "files": [
    "dist",
    "README.md"
  ],
  "repository": {
    "type": "git"
  },

```

Now do `npm login` and then do `npm publish`

- Now by including `tushar-try` library in any project , you can use the components that are exported in `src/lib/index.js`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
