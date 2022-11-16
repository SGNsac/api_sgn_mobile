import express from 'express'
import bcrypt from 'bcrypt'
import execSQLQuery from '../utils/execSqlQuery'
import execSQLQueryLogin from '../utils/execSqlQueryLogin'
import execSqlQueryTrocarSenha from '../utils/execSqlQueryTrocarSenha'
import { login, selectAllUser, selectSUCC, update, selectMovimentacao } from '../query/userQuery'
import validPassword from '../utils/validStrengthPassword'
import execSqlMoviDiario from '../utils/execSqlMoviDiario'

const Router = express.Router()

Router.get('/',
  (req, res) => {
    execSQLQuery(selectAllUser, res)
  }
)

Router.post('/login',
  async (req, res) => {
    const { user, password } = req.body
    if (validPassword(password) === false) {
      res.status(400).json({ message: 'Senha deve conter letra maiuscula e minuscula numero e caracters especias', error: true, status: '400' })
    } else {
      if (password.length >= 10) {
        const sqlQuery = login(user)
        await execSQLQueryLogin(sqlQuery, res, password)
      } else {
        res.status(400).json({ message: 'Senha deve conter 10 ou mais caracteres', error: true, status: '400' })
      }
    }
  }
)

Router.post('/changePassword',
  async (req, res) => {
    const { user, password } = req.body
    if (validPassword(password) === false) {
      res.status(400).json({ message: 'Senha deve conter letra maiuscula e minuscula numero e caracters especias', error: true, status: '400' })
    } else {
      if (password.length >= 10) {
        const saltRounds = 2
        const passwordHash = await bcrypt.hash(password, saltRounds)
        const sqlQuery = update(user, passwordHash)
        console.log(sqlQuery)
        execSqlQueryTrocarSenha(sqlQuery, res)
      } else {
        res.status(400).json({ message: 'Senha deve conter 10 ou mais caracteres', error: true, status: '400' })
      }
    }
  }
)

Router.get('/movimentoDiario/:login',
  (req, res) => {
    const { login } = req.params

    const sql = selectMovimentacao(login)

    execSqlMoviDiario(sql, res)
  }
)

Router.get('/movimentoDiario/:login/:data',
  (req, res) => {
    const { login, data } = req.params

    const sql = selectSUCC(login, data)

    execSqlMoviDiario(sql, res)
  }
)

Router.get('/pegaSubConta/:login',
  (req, res) => {
    const { login } = req.query

    const sql = `SELECT SUCC_DESC FROM USUARIO INNER JOIN REL_USUARIO_SUBCONTA ON REUS_USUA_COD = USUA_COD INNER JOIN SUB_CONTA_CORRENTE ON SUCC_COD = REUS_SUCC_COD WHERE USUA_SIGLA = '${login}'
    `

    execSQLQuery(sql, res)
  }
)

export default Router
