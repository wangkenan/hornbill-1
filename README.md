# hornbill
基于uri的 node mvc框架，适用于前后端分离服务

启动服务脚本放置在nest下 主要放置启动文件 配置文件

	var hornbill = require('../frame')
     ,path = require('path')

	hornbill.start({
		'appsPath' : path.resolve(__dirname , '../apps') //设置应用主目录
		,'configPath' : path.resolve(__dirname,'config') //设置配置主目录，扩展框架内置配置
	})
	
默认端口6001 
更多服务配置和更新记录见 [wiki](https://github.com/ronwe/hornbill/wiki)



------

浏览器端模块加载器，AMD组件加载，合并加载，本地缓存 LRU清理 (https://github.com/ronwe/booter.js)
