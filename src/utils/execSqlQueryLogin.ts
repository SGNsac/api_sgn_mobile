/* eslint-disable @typescript-eslint/no-explicit-any */

import config from '../db'
import sql from 'mssql'
import bcrypt from 'bcrypt'

async function execSQLQueryLogin (sqlQuery, res, password) {
  const connect = await sql.connect(config)
  connect.request()
    .query(sqlQuery)
    .then(async result => {
      const senhaBanco = result.recordset[0].USUA_SENHA_APP

      const comparePassword = await bcrypt.compare(password, senhaBanco)

      console.log(comparePassword)

      if (!comparePassword) {
        res.status(404).send({ message: 'Senha errada ', error: true, status: 404 })
      } else {
        res.status(200).send({ message: 'Login efetuado', error: false, status: 200 })
      }
    })
    .catch(err => { res.json(err) })
}

export default execSQLQueryLogin
