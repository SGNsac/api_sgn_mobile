/* eslint-disable @typescript-eslint/no-explicit-any */

import data1Mes from '../utils/pega1Mes'
import dataAtual from '../utils/pegaDataAtual'

const dataAt = dataAtual()

const dataMesAtras = data1Mes()

const selectAllUser = 'SELECT USUA_SIGLA,USUA_SENHA_APP FROM USUARIO'

const selectUser = (usuaSigla: any) => {
  return `
    SELECT
      USUA_SIGLA,
      USUA_COD 
    FROM 
      USUARIO
    WHERE
      USUA_SIGLA = '${usuaSigla}' `
}

const login = (login: string) => {
  return `
    SELECT 
      USUA_SIGLA,
      USUA_SENHA_APP,
      USUA_COD 
    FROM
      USUARIO 
    WHERE 
      USUA_SIGLA = '${login}' `
}

const update = (user: string, passwordHash: string) => {
  return `
    UPDATE 
      USUARIO 
    SET 
      USUA_SENHA_APP = '${passwordHash}' 
    WHERE 
      USUA_SIGLA = '${user}'`
}

const selectMovimentacao = (login: string) => {
  return `SELECT SUM(MODI_DEBITO) AS DEBITO , SUM(MODI_CREDITO) AS CREDITO ,SUM(MODI_SALDO_ANTES) AS SALDO, MODI_DATA AS DATA FROM USUARIO INNER JOIN REL_USUARIO_SUBCONTA ON REUS_USUA_COD = USUA_COD INNER JOIN SUB_CONTA_CORRENTE ON SUCC_COD = REUS_SUCC_COD INNER JOIN  MOVIMENTO_DIARIO ON MODI_SUCC_COD = SUCC_COD INNER JOIN ALOCACAO_CONTA ON ALCO_SUCC_COD = SUCC_COD INNER JOIN GRUPO_ALOC_CONTA ON  ALCO_GACO_COD = GACO_COD INNER JOIN  APLICACAO_CONTA ON APCO_COD = ALCO_APCO_COD WHERE USUA_SIGLA ='${login}' AND MODI_DATA BETWEEN '${dataMesAtras}' AND  '${dataAt}'  GROUP BY MODI_DATA ORDER BY MODI_DATA DESC
  `
}

const selectSUCC = (login: string, data : string) => {
  return `SELECT APCO_NOME,MODI_DEBITO, MODI_CREDITO,MODI_SALDO_ANTES, MODI_DATA,SUCC_DESC FROM USUARIO INNER JOIN REL_USUARIO_SUBCONTA ON REUS_USUA_COD = USUA_COD INNER JOIN SUB_CONTA_CORRENTE ON SUCC_COD = REUS_SUCC_COD INNER JOIN  MOVIMENTO_DIARIO ON MODI_SUCC_COD = SUCC_COD INNER JOIN ALOCACAO_CONTA ON ALCO_SUCC_COD = SUCC_COD INNER JOIN GRUPO_ALOC_CONTA ON  ALCO_GACO_COD = GACO_COD INNER JOIN  APLICACAO_CONTA ON APCO_COD = ALCO_APCO_COD WHERE USUA_SIGLA ='${login}' AND MODI_DATA = '${data}'`
}

export {
  selectAllUser,
  selectUser,
  login,
  update,
  selectSUCC,
  selectMovimentacao
}
