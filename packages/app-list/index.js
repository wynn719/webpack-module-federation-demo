const Koa = require('koa');
const serve = require('koa-static');
const app = new Koa();

app.use(serve('./public'));

app.on('error', err => {
  log.error('server error', err)
});

app.listen(3000);
