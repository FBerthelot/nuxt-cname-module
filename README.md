# nuxt-cname-module

> Nuxt Module that generate CNAME file in nuxt generate mode - VueJS


**Note:** CNAME is only enabled in generate mode.

## Getting started

### Install

Install it via NPM :
``` bash
npm i nuxt-cname-module
```

or via yarn :
```bash
yarn add nuxt-cname-module
```

### Add to nuxt

Add it to your `nuxt.config.js` file.


```js
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
Should be in form of `GTM-XXXXXXX`

### generateCNAME
- [Optional]
If set to false, cname is never generated
(default to true)

## Environment variable

You can overwrite all you setting via environment variable like this :

```bash
baseUrl="anotherFunnyUrl.com" generateCNAME=true npm run generate
```
