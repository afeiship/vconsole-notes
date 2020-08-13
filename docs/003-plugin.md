# plugin
> 开发一个实用的插件

## usage
- https://github.com/Tencent/vConsole/blob/dev/doc/plugin_event_list_CN.md
- https://github.com/Tencent/vConsole/blob/dev/doc/plugin_building_a_plugin_CN.md

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

var type;
myPlugin.on('addTopBar', function(callback) {
	var btnList = [];
	btnList.push({
		name: 'Apple',
		className: '',
		data: {type: 'apple'},
		onClick: function() {
			if (type != this.dataset.type) {
				// `this` 指向当前按钮
				type = this.dataset.type;
			} else {
				return false;
			}
		}
	});
	btnList.push({
		name: 'Orange',
		className: '',
		data: {type: 'orange'},
		onClick: function() {
			type = this.dataset.type;
		}
	}
	});
	callback(btnList);
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
