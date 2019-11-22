# gridsome-source-buttondown

> [Buttondown](https://buttondown.email) source for Gridsome

## Install

- `yarn add gridsome-source-buttondown`
- `npm install gridsome-source-buttondown`

## Usage

```js
const { API_KEY } = process.env;
module.exports = {
  plugins: [
    {
      use: 'gridsome-source-buttondown',
      options: {
        apiKey: API_KEY
      }
    }
  ],
   templates: {
    Email: "/archive/:id"
  }  
}
```

This plugin lets you load data from the Buttondown API. This allows you to directly host your own archive within Gridsome.

## Options

#### apiKey

- Type: `string` *required*

The buttondown API Key (found in [settings](https://buttondown.email/settings)).

#### typeName

- Type: `string`
- Default: `'Email'`

The GraphQL type and template name. A `.vue` file in `src/templates` must match the `typeName` to have a template for it.
