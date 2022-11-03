import express from 'express'

const port = 3001
const app = express()

app.get('/', (_req, res) => {
  res.send('hello world!')
})

app.get('/user', (_req, res) => {
  res.send('user info')
})

async function start() {
  app.listen(port, () => {
    console.log('start server:', `http://localhost:${port}`)
  })
}

start()