import Koa from 'koa'
const app = new Koa();

app.use(ctx => {
    if (ctx.url === "/") {
        ctx.status = 200;
        ctx.body = "<h1>Index Safyasina hosgeldiniz</h1>";
    } else if (ctx.url === "/about") {
        ctx.status = 200;
        ctx.body = "<h1>Hakkimda sayfasina hosgeldiniz</h1>";
    } else if (ctx.url === "/contact") {
        ctx.status = 200;
        ctx.body = "<h1>iletisim sayfasina hosgeldiniz</h1>";
    } else {
        ctx.status = 404;
        ctx.body = "<h1>Safya bulunamadı</h1>";
    }
});


app.listen(3000);