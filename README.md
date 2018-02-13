# nuxt-cname-module

> Nuxt Module that generate CNAME file in nuxt generate mode - VueJS

**Note:** CNAME is only enabled in generate mode.

[![Build Status](https://travis-ci.org/FBerthelot/nuxt-cname-module.svg?branch=master)](https://travis-ci.org/FBerthelot/nuxt-cname-module)
[![npm](https://img.shields.io/npm/dt/nuxt-cname-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-cname-module)
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-cname-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-cname-module)

## Getting started

### Install

Install it via NPM:
``` bash
npm i nuxt-cname-module
```

or via yarn:
```bash
yarn add nuxt-cname-module
```

### Add to nuxt

Add it to your `nuxt.config.js` file.


```javascript
  /** ... **/
  modules: [
    /* ... */
   ['nuxt-cname-module', { baseUrl: 'myFunnyUrl.com' }],
  ]
  /** ... **/
```

## Options

### baseUrl
- [Required]
Should be a string

### generateCNAME
- [Optional]
If set to false, cname is never generated
(default to true)

## Environment variable

You can overwrite all you setting via environment variable like this:

```bash
baseUrl="anotherFunnyUrl.com" generateCNAME=true npm run generate
```

## nuxt env variable

You can also use env variable in `nuxt.config.js`:

```javascript
/** ... **/
modules: [
  /* ... */
 ['nuxt-cname-module'],
],
env: {
  baseUrl: 'myFunnyUrl.com'
}
/** ... **/
```
