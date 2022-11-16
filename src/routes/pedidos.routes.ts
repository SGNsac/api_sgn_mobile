import express from 'express'
import { selectPedidoEstoque } from '../query/pedidoQuery'
import execSQLQuery from '../utils/execSqlQuery'

const Router = express.Router()

Router.get('/', (req, res) => {
  res.status(200).send({ message: 'Router pedido' })
})

Router.get('/:usuaCod', (req, res) => {
  const { usuaCod } = req.params
  const sql = selectPedidoEstoque(usuaCod)

  execSQLQuery(sql, res)
})

export default Router
