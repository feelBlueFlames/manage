const express = require('express');
const path = require('path');
const app = express();
// 导入路由
const accountRt = require('./router/accountRt');
const studentRt = require('./router/studentRt');
// 打印路劲
app.use((req, res, next) => {
    console.log(req.url);
    next();
})
// 加载路由
app.use('/account', accountRt);
app.use('/student', studentRt);

// 配置模板引擎
app.set('view engine', 'pug');
app.set('view cache', false);
app.set('views', path.join(__dirname, './static/views/'));

app.locals.basedir = path.join(__dirname, './static/views/');

// 托管静态资源
// app.use(express.static(path.join(__dirname, './static/views/')));
app.use('/public/', express.static(path.join(__dirname, './node_modules/')));
app.listen(8086, err => {
    if (err) throw err;
    console.log("http://localhost:8086");
})