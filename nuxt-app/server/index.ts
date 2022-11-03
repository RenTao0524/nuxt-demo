import express from 'express'

const port = 3001
const app = express()

app.get('/user', (req: any, res: any) => {
  res.send('user info')
})

async function start() {
  app.listen(port, () => {
    console.log('start server:', `http://localhost:${port}`)
  })
}

start()