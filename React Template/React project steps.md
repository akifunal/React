# 1 - Create react app

//to create react app
npx create-react-app your-app-name

    //go to the app directory
      cd your-app-name

    //to start the react app in browser
      npm start

# 2 - **sass**

    npm i -D sass

# 3 - **craco** (pathler için cra config override için)

    [craco-installation](https://www.npmjs.com/package/@craco/craco#installation)

    npm i @craco/craco

## 3.1 - **create craco.config.js**

    /* package.json */ update

    "scripts": {
    	"start": "craco start",
    	"build": "craco build",
    	"test": "craco test",
    	"eject": "react-scripts eject"
    }

# 4 - **create jsconfig.json** (vs code ayarları için)

# 5 - **cra css reset**

    <https://create-react-app.dev/docs/adding-css-reset/>

    @import-normalize;

# 6 - **tailwindcss**

    [tailwindcss-cra](https://tailwindcss.com/docs/guides/create-react-app)

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    // Create React App doesn’t support PostCSS 8 (kontrol et)
    npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

    // Cra desteklediği zaman böyle olacak
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

# 7 - **Stylelint**

    <https://actionauta.com/notes/integrating-tailwind-css-modules-sass-stylelint-nextjs>

    npm i -D stylelint stylelint-config-recommended-scss stylelint-order stylelint-scss

    7.1 - create .stylelintrc.json

# 8 - **prop-types**

    npm i prop-types

- [1 - Create react app](#1---create-react-app)
- [2 - **sass**](#2---sass)
- [3 - **craco** (pathler için cra config override için)](#3---craco-pathler-için-cra-config-override-için)
  - [3.1 - **create craco.config.js**](#31---create-cracoconfigjs)
- [4 - **create jsconfig.json** (vs code ayarları için)](#4---create-jsconfigjson-vs-code-ayarları-için)
- [5 - **cra css reset**](#5---cra-css-reset)
- [6 - **tailwindcss**](#6---tailwindcss)
- [7 - **Stylelint**](#7---stylelint)
- [8 - **prop-types**](#8---prop-types)
