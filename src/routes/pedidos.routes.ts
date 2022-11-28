import express from 'express'
import {
  searchForn1,
  searchForn2,
  searchForn3,
  searchForn4,
  searchNumero1,
  searchNumero2,
  searchNumero3,
  searchNumero4,
  selectPedidoEstoque1,
  selectPedidoEstoque2,
  selectPedidoEstoque3,
  selectPedidoEstoque4,
  selectPedidosItemServico,
  updateASS1,
  updateASS2,
  updateASS3,
  updateASS4
} from '../query/pedidoQuery'
import execSQLQueryPedidos from '../utils/execSQLQueryPedidos'
import execSqlQueryPedidoDetalhe from '../utils/execSqlQueryPedidoDetalhe'
import execAprovaPedido from '../utils/execAprovaPedido'
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

Router.get('/searchNum/:usuaCod/:pediNumero', (req, res) => {
  const { usuaCod, pediNumero } = req.params
  const sql1 = searchNumero1(usuaCod, pediNumero)
  const sql2 = searchNumero2(usuaCod, pediNumero)
  const sql3 = searchNumero3(usuaCod, pediNumero)
  const sql4 = searchNumero4(usuaCod, pediNumero)

  execSQLQueryPedidos(sql1, sql2, sql3, sql4, res)
})

Router.get('/searchForn/:usuaCod/:fornNome', (req, res) => {
  const { usuaCod, fornNome } = req.params
  const sql1 = searchForn1(usuaCod, fornNome)
  const sql2 = searchForn2(usuaCod, fornNome)
  const sql3 = searchForn3(usuaCod, fornNome)
  const sql4 = searchForn4(usuaCod, fornNome)

  execSQLQueryPedidos(sql1, sql2, sql3, sql4, res)
})

Router.get('/detalhe/:pediCod',
  (req, res) => {
    const { pediCod } = req.params
    const sql = selectPedidosItemServico(pediCod)
    execSqlQueryPedidoDetalhe(sql, res)
  }
)

Router.put('/:assPos/:pediCod',
  (req, res) => {
    const { assPos, pediCod } = req.params
    let sql
    if (assPos === '1') {
      sql = updateASS1(pediCod)
    } else if (assPos === '2') {
      sql = updateASS2(pediCod)
    } else if (assPos === '3') {
      sql = updateASS3(pediCod)
    } else if (assPos === '4') {
      sql = updateASS4(pediCod)
    }

    execAprovaPedido(sql, res)
  }
)

export default Router
