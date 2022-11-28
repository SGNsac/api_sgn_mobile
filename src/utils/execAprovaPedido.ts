/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../db'
import sql from 'mssql'

async function execSQLQuery (sqlQuery:string, res:any) {
  const connect = await sql.connect(config)
  connect.request()
    .query('SELECT PAGE_APROVA_PEDIDO,PAGE_NUM_APROVACOES_PEDIDO,PAGE_TODAS_APROVACOES_PEDIDO FROM PARAMETROS_GERAIS')
    .then((result:any) => {
      console.log(result.recordset)
    //   connect.request()
    //     .query(sqlQuery)
    //     .then((result:any) => {
    //       res.status(200).send({ result: '123' })
    //     })
    //     .catch((err:any) => { res.json(err) })
    })
    .catch((err:any) => { res.json(err) })
}

export default execSQLQuery
