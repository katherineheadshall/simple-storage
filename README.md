## simple-storage
<p align="center">
<br><a href="https://travis-ci.com/katherineheadshall/simple-storage">
    <img src="https://travis-ci.com/katherineheadshall/simple-storage.svg?branch=main">
    </a>
    <br>
    <br>
    <b>A node module to help you manage locastorage data, it's tiny, well tested, and ready for production.</b>
</p>

## Install

```
$ yarn add @katherineheadshall/simple-storage
```
or
```
npm i --save @katherineheadshall/simple-storage
```

## Usage

__`get`__
```js
const storage = require('@katherineheadshall/simple-storage');
// import { get } from '@katherineheadshall/simple-storage';

// Getting an already stored user object
storage.get('user').then(user => {
  console.log(user);
  // => {object}
});
```

## Example

__`setObject`__

```js
let user = storage.setObject('user', {id: 1, username: 'example user'});
console.log(user);
// already returns the parsed stored item => {id: 1, username: 'example user'}
```

## API

```js
storage.get('key')
```

`key` `:`  __`string`__

| __`simple-storage-available-methods`__      | __`Output`__  |
|---------------------------------------------|---------------|
| __`get`__                                   | `string`      |
| __`set`__                                   | `string`      |
| __`setObject`__                             | `any`         |
| __`getObject`__                             | `any`         |
| __`getUniqueKey`__                          | `string`      |
| __`remove`__                                | `null`        |

## Remove an already stored item

```js
storage.remove('item')
```

```js
remove('item')
```

## License

[MIT](https://github.com/katherineheadshall/simple-storage/blob/main/LICENSE)
