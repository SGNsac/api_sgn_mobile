/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../db'
import sql from 'mssql'

async function execSQLQuery (sqlQuery1: string, res: any) {
  const connect = await sql.connect(config)
  connect.request()
    .query(sqlQuery1)
    .then((result: any) => {
      res.status(200).send({ message: result.recordset })
    })
    .catch((err: any) => { res.json(err) })
}

export default execSQLQuery
