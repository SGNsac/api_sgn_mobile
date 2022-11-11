/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../db'
import sql from 'mssql'

async function execSQLQuery (sqlQuery:string, res:any) {
  const connect = await sql.connect(config)
  connect.request()
    .query(sqlQuery)
    .then((result:any) => {
      res.json({ message: result.recordset })
    })
    .catch((err:any) => { res.json(err) })
}

export default execSQLQuery
