##安装
...
npm install webbear
...

##导入
...js
const data=require('webbear')
...

##转义HTML中的特殊符号
...js
const text=require('./webbear')
var str='<input type="text"><span>请输入用户名</span>';
str=text.htmlescape(str);
//str输出结果为&lt;input type=&quot;text&quot;&gt;&lt;span&gt;请输入用户名&lt;/span&gt;
...

##还原HTML中的特殊符号
...js
const text=require
var str='&lt;input type=&quot;text&quot;&gt;&lt;span&gt;请输入用户名&lt;/span&gt;';
log(text.htmlunescape(str))
//输出结果为<input type="text"><span>请输入用户名</span>
...

##开源协议
ISC