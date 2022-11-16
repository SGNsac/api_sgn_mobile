/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../db'
import sql from 'mssql'

async function execSQLQuery (sqlQuery1: string, sqlQuery2: string, sqlQuery3: string, sqlQuery4: string, res: any) {
  const jsonPedido = []
  const connect = await sql.connect(config)
  connect.request()
    .query(sqlQuery1)
    .then((result1: any) => {
      result1.recordset.map((pos) => jsonPedido.push(pos))
      connect.request()
        .query(sqlQuery2)
        .then((result2: any) => {
          result2.recordset.map((pos) => jsonPedido.push(pos))
          connect.request()
            .query(sqlQuery3)
            .then((result3: any) => {
              result3.recordset.map((pos) => jsonPedido.push(pos))
              connect.request()
                .query(sqlQuery4)
                .then((result4: any) => {
                  result4.recordset.map((pos) => jsonPedido.push(pos))
                  res.json({ message: jsonPedido })
                })
                .catch((err: any) => { res.json(err) })
            })
            .catch((err: any) => { res.json(err) })
        })
        .catch((err: any) => { res.json(err) })
    })
    .catch((err: any) => { res.json(err) })
}

export default execSQLQuery
