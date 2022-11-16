import express from 'express'
import {
  selectPedidoEstoque1,
  selectPedidoEstoque2,
  selectPedidoEstoque3,
  selectPedidoEstoque4
} from '../query/pedidoQuery'
import execSQLQueryPedidos from '../utils/execSQLQueryPedidos'

const Router = express.Router()

Router.get('/', (req, res) => {
  res.status(200).send({ message: 'Router pedido' })
})

Router.get('/:usuaCod', (req, res) => {
  const { usuaCod } = req.params
  const sql1 = selectPedidoEstoque1(usuaCod)
  const sql2 = selectPedidoEstoque2(usuaCod)
  const sql3 = selectPedidoEstoque3(usuaCod)
  const sql4 = selectPedidoEstoque4(usuaCod)

  execSQLQueryPedidos(sql1, sql2, sql3, sql4, res)
})

export default Router
