## simple-storage

A Typescrit written module to help you manage locastorage data, it's tiny, well tested, and ready for production.

> Version 2.0.0

## Install

```
$ pnpm i @katherineheadshall/simple-storage
```

## Usage

__`get`__
```ts
import { ktget } from '@katherineheadshall/simple-storage';

// Getting an already stored user object
const user = ktget('user');
console.log(user);
// => {object}
```

## Example

__`ktsetObject`__

```ts
let user = ktsetObject('user', {id: 1, username: 'example user'});
console.log(user);
// already returns the parsed stored item => {id: 1, username: 'example user'}
```

## API

```ts
ktget('key')
```

`key` `:`  __`string`__

| __`simple-storage-available-methods`__      | __`Output`__  |
|---------------------------------------------|---------------|
| __`ktget`__                                   | `string`      |
| __`ktset`__                                   | `string`      |
| __`ktsetObject`__                             | `any`         |
| __`ktgetObject`__                             | `any`         |
| __`ktgetUniqueKey`__                          | `string`      |
| __`ktremove`__                                | `null`        |

## Remove an already stored item

```ts
ktremove('item')
```

## License

[MIT](https://github.com/katherineheadshall/simple-storage/blob/main/LICENSE)
