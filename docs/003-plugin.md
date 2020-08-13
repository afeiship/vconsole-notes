# plugin
> 开发一个实用的插件


```js
var myPlugin = new VConsole.VConsolePlugin('my_plugin', 'My Plugin');

// event
myPlugin.on('init', function() {
	console.log('My plugin init');
});

// add a tab
myPlugin.on('renderTab', function(callback) {
	var html = '<div>Click the tool button below!</div>';
	callback(html);
});


// add tool  --- 当前tab下方的 actions
myPlugin.on('addTool', function(callback) {
	var button = {
		name: 'Reload',
		onClick: function(event) {
			location.reload();
		}
	};
	callback([button]);
});

vConsole.addPlugin(myPlugin);
```
