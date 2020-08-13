# delegate


```js
var $page = vConsole.$.one('#my_page');
vConsole.$.delegate($page, 'click', '.item', function(event) {
	vConsole.$.addClass(this, 'selected'); // this => '.item'
});
```
