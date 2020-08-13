# config

## console
```js
console.log('foo');   // 白底黑字
console.info('bar');  // 白底紫字
console.debug('oh');  // 白底黄字
console.warn('foo');  // 黄底黄字
console.error('bar'); // 红底红字
```

## time
```js
console.time('foo');    // 启动名为 foo 的计时器
console.timeEnd('foo'); // 停止 foo 计时器并输出经过的时间
```

## slog
> 可以集成，不过，很丑，所以，放弃。
```js
slog({ title: 'Platform', content: 'MacOs' });
```


## methods
- show
- hide
- vConsole.hideSwitch(); --- 就是那个绿色的 button
