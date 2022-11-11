/* eslint-disable @typescript-eslint/no-explicit-any */
import config from '../db'
import sql from 'mssql'

async function execSQLQueryUpdate (sqlQuerySelect:string, res:any) {
  const connect = await sql.connect(config)
  connect.request()
    .query(sqlQuerySelect)
    .then(async () => {
      res.status(200).send({ message: 'Senha alterada com sucesso', error: false, status: 200 })
    })
    .catch((err:any) => { res.json(err) })
}

export default execSQLQueryUpdate
