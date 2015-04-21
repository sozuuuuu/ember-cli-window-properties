# Ember-cli-window-properties

An ember-cli addon injects an object that manages window properties into controllers and views.

## Usage

Just install this addon then `winProps` object will be available in your controllers and views.

`winProps` has these properties below.

- height
- width
- isSmartphone

## Customization

You can specify your border that the device is smartphone or not.
Add `windowProperties.smartphoneWidth` in your `config/environment.js`.

```
module.exports = function(environment) {
  var ENV = {
    ...
    windowProperties: {
      smartphoneWidth: 768
    }
    ...
  }
}
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## TODO

- Write tests

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
