/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'

import dotenv from 'dotenv'

import config from './db'

import sql from 'mssql'

import RouterUser from './routes/usuario.routes'

dotenv.config()

const app = express()

app.use(express.json())

const port = process.env.PORT

sql.connect(config)
  .then(
    (conn:any) => {
      // eslint-disable-next-line no-return-assign
      return global.conn = conn
    }
  )
  .catch(
    (err:any) => {
      console.log(err)
    }
  )

app.use('/usuario', RouterUser)

app.get('/', async (req, res) => {
  res.status(200).send({ message: 'Rota padrão', status: '200', ERROR: false })
})

app.listen(port)

// testando se funcionou
console.log(`API funcionando! ${port}`)
