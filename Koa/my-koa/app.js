const Koa = require('./koa')

const app = new Koa()

app.use((ctx, next) => {
  ctx.body = 'hello koa12'
  next()
})

app.use((ctx, next) => {
  console.log(ctx.response.body)
})

// const one = (ctx, next) => {
//   console.log('>> one');
//   next();
//   console.log('<< one');
// }

// const two = (ctx, next) => {
//   console.log('>> two');
//   next();
//   console.log('<< two');
// }

// const three = (ctx, next) => {
//   console.log('>> three');
//   next();
//   console.log('<< three');
// }

// app.use(one);
// app.use(two);
// app.use(three);

app.listen(30000, () => {
  console.log('http://localhost:30000')
})