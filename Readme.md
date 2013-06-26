
# type

  better type checking

## install

***node***

```js
$ npm install typed
```

***component***

```js
$ component install jwerle/type
```

***bower***

```js
$ bower install typed
```

## api

### typed(i)

returns the type of a given input
   
```js
assert('string' === typed('string'));
assert('boolean' === typed(true));
assert('number' === typed(0));
assert('date' === typed(new Date));
assert('null' === typed(null));
assert('undefined' === typed(undefined));
assert('function' === typed(function(){}));
assert('array' === typed([]));
assert('regexp' === typed(/foo/));
assert('object' === typed({}));
assert('nan' === typed(NaN));
```

## license

MIT
