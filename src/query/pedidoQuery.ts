const selectPedidoEstoque1 = (usuaCod: string) => {
  return `
    SELECT
        PEDI_TOTAL_MERC,
        PEDI_OBS,
        PEDI_DESCONTO,
        PEDI_STATUS,
        PEDI_FRETE,
        PEDI_VALOR_APROVADO,
        PEDI_VALOR_TOTAL,
        PEDI_COD,
        PEDI_NUMERO,
        FORN_NOME,
        PEDI_DATA,
        1 AS ASS,
        EMPR_NOME
    FROM
        pedido_estoque
    INNER JOIN
        FORNECEDOR
    ON
        FORN_COD = PEDI_FORN_COD
    INNER JOIN
        EMPRESA
    ON
        EMPR_COD = PEDI_EMPR_COD
    WHERE
        PEDI_STATUS = 'N'
    AND
        PEDI_USUA_COD_ASS_1 =   ${usuaCod}
    AND 
        PEDI_ASSINATURA_1 != 'S'
    ORDER BY
        PEDI_DATA DESC`
}

const selectPedidoEstoque2 = (usuaCod: string) => {
  return `
    SELECT
        PEDI_TOTAL_MERC,
        PEDI_OBS,
        PEDI_DESCONTO,
        PEDI_STATUS,
        PEDI_FRETE,
        PEDI_VALOR_APROVADO,
        PEDI_VALOR_TOTAL,
        PEDI_COD,
        PEDI_NUMERO,
        FORN_NOME,
        PEDI_DATA,
        2 AS ASS,
        EMPR_NOME
    FROM
        pedido_estoque
    INNER JOIN
        FORNECEDOR
    ON
        FORN_COD = PEDI_FORN_COD
    INNER JOIN
        EMPRESA
    ON
        EMPR_COD = PEDI_EMPR_COD
    WHERE
        PEDI_STATUS = 'N'
    AND
        PEDI_USUA_COD_ASS_2 =   ${usuaCod}
    AND 
        PEDI_ASSINATURA_2 != 'S'
    ORDER BY
        PEDI_DATA DESC`
}
// 3116-2298

const selectPedidoEstoque3 = (usuaCod: string) => {
  return `
    SELECT
        PEDI_TOTAL_MERC,
        PEDI_OBS,
        PEDI_DESCONTO,
        PEDI_STATUS,
        PEDI_FRETE,
        PEDI_VALOR_APROVADO,
        PEDI_VALOR_TOTAL,
        PEDI_COD,
        PEDI_NUMERO,
        FORN_NOME,
        PEDI_DATA,
        3 AS ASS,
        EMPR_NOME
    FROM
        pedido_estoque
    INNER JOIN
        FORNECEDOR
    ON
        FORN_COD = PEDI_FORN_COD
    INNER JOIN
        EMPRESA
    ON
        EMPR_COD = PEDI_EMPR_COD
    WHERE
        PEDI_STATUS = 'N'
    AND
        PEDI_USUA_COD_ASS_3 =   ${usuaCod}
    AND 
        PEDI_ASSINATURA_3 != 'S'
    ORDER BY
        PEDI_DATA DESC`
}

const selectPedidoEstoque4 = (usuaCod: string) => {
  return `
    SELECT
        PEDI_TOTAL_MERC,
        PEDI_OBS,
        PEDI_DESCONTO,
        PEDI_STATUS,
        PEDI_FRETE,
        PEDI_VALOR_APROVADO,
        PEDI_VALOR_TOTAL,
        PEDI_COD,
        PEDI_NUMERO,
        FORN_NOME,
        PEDI_DATA,
        4 AS ASS,
        EMPR_NOME
    FROM
        pedido_estoque
    INNER JOIN
        FORNECEDOR
    ON
        FORN_COD = PEDI_FORN_COD
    INNER JOIN
        EMPRESA
    ON
        EMPR_COD = PEDI_EMPR_COD
    WHERE
        PEDI_STATUS = 'N'
    AND 
        PEDI_USUA_COD_ASS_4 =   ${usuaCod}
    AND 
        PEDI_ASSINATURA_4 != 'S'
    ORDER BY
        PEDI_DATA DESC
    `
}

const selectPedidosItemServico = (pediCod: string) => {
  return `
    SELECT 
        PEIT_VALORUNI AS VALOR_UNITARIO,
        UNMA_DESC AS DESCRICAO_MEDIDA,
        PEIT_DESCONTO AS DESCONTO ,
        PEIT_QTD AS QUANTIDADE,
        MATE_DESC AS DESCRICAO,
        PEIT_DTENTREGA AS DTENTREGA,
        PEIT_OBS AS OBSERVACAO,
        'PRODUTO' AS TIPO,
        PEIT_PEDI_COD AS CODIGO,
        (PEIT_VALORUNI * PEIT_QTD) AS VALOR_TOTAL,
        CONCAT(CERE_SIGLA, ' - ',CERE_NOME) AS CR,
        ALMO_DESC AS ALMOXARIFADO
    FROM 
        PEDIDO_ITEM
    INNER JOIN 
        UNID_MAT
    ON
        UNMA_COD = PEIT_UNMA_COD
    INNER JOIN
        MATERIAL
    ON
        MATE_COD = PEIT_MATE_COD
    INNER JOIN
        CENTRO_RESULTADO
    ON
        CERE_COD = PEIT_CERE_COD
    INNER JOIN
        ALMOXARIFADO
    ON
        PEIT_ALMO_COD = ALMO_COD
    WHERE 
        PEIT_PEDI_COD = ${pediCod}

    UNION ALL

    SELECT 
        PESE_VALOR_UNITARIO  AS VALOR_UNITARIO,
        UNMA_DESC AS DESCRICAO_MEDIDA,
        PESE_DESCONTO AS DESCONTO,
        PESE_QUANTIDADE AS QUANTIDADE,
        SERV_DESC AS DESCRICAO,
        GETDATE() AS DTENTREGA,
        PESE_OBS AS OBSERVACAO,
        'SERVICO' AS TIPO,
        PESE_PEDI_COD AS CODIGO,
        (PESE_VALOR_UNITARIO * PESE_QUANTIDADE) AS VALOR_TOTAL,
        CONCAT(CERE_SIGLA, ' - ',CERE_NOME) AS CR,
        ALMO_DESC AS ALMOXARIFADO
    FROM 
        PEDIDO_SERVICO
    INNER JOIN 
        UNID_MAT
    ON
        UNMA_COD = PESE_UNMA_COD
    INNER JOIN
        SERVICOS
    ON
        SERV_COD = PESE_SERV_COD
    INNER JOIN
        CENTRO_RESULTADO
    ON
        CERE_COD = PESE_CERE_COD
    INNER JOIN
        ALMOXARIFADO
    ON
        PESE_ALMO_COD = ALMO_COD
    WHERE 
        PESE_PEDI_COD = ${pediCod}
        ORDER BY 
    CODIGO
    `
}

const searchNumero4 = (usuaCod: string, pediNumero: string) => {
  return `
        SELECT
            PEDI_TOTAL_MERC,
            PEDI_OBS,
            PEDI_DESCONTO,
            PEDI_STATUS,
            PEDI_FRETE,
            PEDI_VALOR_APROVADO,
            PEDI_VALOR_TOTAL,
            PEDI_COD,
            PEDI_NUMERO,
            FORN_NOME,
            PEDI_DATA,
            4 AS ASS,
            EMPR_NOME
        FROM
            pedido_estoque
        INNER JOIN
            FORNECEDOR
        ON
            FORN_COD = PEDI_FORN_COD
        INNER JOIN
            EMPRESA
        ON
            EMPR_COD = PEDI_EMPR_COD
        WHERE
            PEDI_STATUS = 'N'
        AND 
            PEDI_USUA_COD_ASS_4 =   ${usuaCod}
        AND 
            PEDI_ASSINATURA_4 != 'S'
        AND
            PEDI_NUMERO = '${pediNumero}'
        ORDER BY
            PEDI_DATA DESC
    `
}

const searchNumero3 = (usuaCod: string, pediNumero: string) => {
  return `
          SELECT
              PEDI_TOTAL_MERC,
              PEDI_OBS,
              PEDI_DESCONTO,
              PEDI_STATUS,
              PEDI_FRETE,
              PEDI_VALOR_APROVADO,
              PEDI_VALOR_TOTAL,
              PEDI_COD,
              PEDI_NUMERO,
              FORN_NOME,
              PEDI_DATA,
              3 AS ASS,
              EMPR_NOME
          FROM
              pedido_estoque
          INNER JOIN
              FORNECEDOR
          ON
              FORN_COD = PEDI_FORN_COD
          INNER JOIN
              EMPRESA
          ON
              EMPR_COD = PEDI_EMPR_COD
          WHERE
              PEDI_STATUS = 'N'
          AND 
              PEDI_USUA_COD_ASS_3 =   ${usuaCod}
          AND 
              PEDI_ASSINATURA_3 != 'S'
          AND
              PEDI_NUMERO = '${pediNumero}'
          ORDER BY
              PEDI_DATA DESC
      `
}

const searchNumero2 = (usuaCod: string, pediNumero: string) => {
  return `
          SELECT
              PEDI_TOTAL_MERC,
              PEDI_OBS,
              PEDI_DESCONTO,
              PEDI_STATUS,
              PEDI_FRETE,
              PEDI_VALOR_APROVADO,
              PEDI_VALOR_TOTAL,
              PEDI_COD,
              PEDI_NUMERO,
              FORN_NOME,
              PEDI_DATA,
              2 AS ASS,
              EMPR_NOME
          FROM
              pedido_estoque
          INNER JOIN
              FORNECEDOR
          ON
              FORN_COD = PEDI_FORN_COD
          INNER JOIN
              EMPRESA
          ON
              EMPR_COD = PEDI_EMPR_COD
          WHERE
              PEDI_STATUS = 'N'
          AND 
              PEDI_USUA_COD_ASS_2 =   ${usuaCod}
          AND 
              PEDI_ASSINATURA_2 != 'S'
          AND
              PEDI_NUMERO = '${pediNumero}'
          ORDER BY
              PEDI_DATA DESC
      `
}

const searchNumero1 = (usuaCod: string, pediNumero: string) => {
  return `
            SELECT
                PEDI_TOTAL_MERC,
                PEDI_OBS,
                PEDI_DESCONTO,
                PEDI_STATUS,
                PEDI_FRETE,
                PEDI_VALOR_APROVADO,
                PEDI_VALOR_TOTAL,
                PEDI_COD,
                PEDI_NUMERO,
                FORN_NOME,
                PEDI_DATA,
                1 AS ASS,
                EMPR_NOME
            FROM
                pedido_estoque
            INNER JOIN
                FORNECEDOR
            ON
                FORN_COD = PEDI_FORN_COD
            INNER JOIN
                EMPRESA
            ON
                EMPR_COD = PEDI_EMPR_COD
            WHERE
                PEDI_STATUS = 'N'
            AND 
                PEDI_USUA_COD_ASS_1 =   ${usuaCod}
            AND 
                PEDI_ASSINATURA_1 != 'S'
            AND
                PEDI_NUMERO = '${pediNumero}'
            ORDER BY
                PEDI_DATA DESC
        `
}

const searchForn1 = (usuaCod: string, fornNome: string) => {
  return `
              SELECT
                  PEDI_TOTAL_MERC,
                  PEDI_OBS,
                  PEDI_DESCONTO,
                  PEDI_STATUS,
                  PEDI_FRETE,
                  PEDI_VALOR_APROVADO,
                  PEDI_VALOR_TOTAL,
                  PEDI_COD,
                  PEDI_NUMERO,
                  FORN_NOME,
                  PEDI_DATA,
                  1 AS ASS,
                  EMPR_NOME
              FROM
                  pedido_estoque
              INNER JOIN
                  FORNECEDOR
              ON
                  FORN_COD = PEDI_FORN_COD
              INNER JOIN
                  EMPRESA
              ON
                  EMPR_COD = PEDI_EMPR_COD
              WHERE
                  PEDI_STATUS = 'N'
              AND 
                  PEDI_USUA_COD_ASS_1 =   ${usuaCod}
              AND 
                  PEDI_ASSINATURA_1 != 'S'
              AND
                  FORN_NOME LIKE '%${fornNome}%'
              ORDER BY
                  PEDI_DATA DESC
          `
}
const searchForn2 = (usuaCod: string, fornNome: string) => {
  return `
                SELECT
                    PEDI_TOTAL_MERC,
                    PEDI_OBS,
                    PEDI_DESCONTO,
                    PEDI_STATUS,
                    PEDI_FRETE,
                    PEDI_VALOR_APROVADO,
                    PEDI_VALOR_TOTAL,
                    PEDI_COD,
                    PEDI_NUMERO,
                    FORN_NOME,
                    PEDI_DATA,
                    2 AS ASS,
                    EMPR_NOME
                FROM
                    pedido_estoque
                INNER JOIN
                    FORNECEDOR
                ON
                    FORN_COD = PEDI_FORN_COD
                INNER JOIN
                    EMPRESA
                ON
                    EMPR_COD = PEDI_EMPR_COD
                WHERE
                    PEDI_STATUS = 'N'
                AND 
                    PEDI_USUA_COD_ASS_2 =   ${usuaCod}
                AND 
                    PEDI_ASSINATURA_2 != 'S'
                AND
                    FORN_NOME LIKE '%${fornNome}%'
                ORDER BY
                    PEDI_DATA DESC
            `
}
const searchForn3 = (usuaCod: string, fornNome: string) => {
  return `
        SELECT
            PEDI_TOTAL_MERC,
            PEDI_OBS,
            PEDI_DESCONTO,
            PEDI_STATUS,
            PEDI_FRETE,
            PEDI_VALOR_APROVADO,
            PEDI_VALOR_TOTAL,
            PEDI_COD,
            PEDI_NUMERO,
            FORN_NOME,
            PEDI_DATA,
            3 AS ASS,
            EMPR_NOME
        FROM
            pedido_estoque
        INNER JOIN
            FORNECEDOR
        ON
            FORN_COD = PEDI_FORN_COD
        INNER JOIN
            EMPRESA
        ON
            EMPR_COD = PEDI_EMPR_COD
        WHERE
            PEDI_STATUS = 'N'
        AND 
            PEDI_USUA_COD_ASS_3 =   ${usuaCod}
        AND 
            PEDI_ASSINATURA_3 != 'S'
        AND
            FORN_NOME LIKE '%${fornNome}%'
        ORDER BY
            PEDI_DATA 
        DESC
        `
}
const searchForn4 = (usuaCod: string, fornNome: string) => {
  return `
          SELECT
              PEDI_TOTAL_MERC,
              PEDI_OBS,
              PEDI_DESCONTO,
              PEDI_STATUS,
              PEDI_FRETE,
              PEDI_VALOR_APROVADO,
              PEDI_VALOR_TOTAL,
              PEDI_COD,
              PEDI_NUMERO,
              FORN_NOME,
              PEDI_DATA,
              4 AS ASS,
              EMPR_NOME
          FROM
              pedido_estoque
          INNER JOIN
              FORNECEDOR
          ON
              FORN_COD = PEDI_FORN_COD
          INNER JOIN
              EMPRESA
          ON
              EMPR_COD = PEDI_EMPR_COD
          WHERE
              PEDI_STATUS = 'N'
          AND 
              PEDI_USUA_COD_ASS_4 =   ${usuaCod}
          AND 
              PEDI_ASSINATURA_4 != 'S'
          AND
              FORN_NOME LIKE '%${fornNome}%'
          ORDER BY
              PEDI_DATA 
          DESC
          `
}

const updateASS1 = (pediCod : string) => {
  return `
    UPDATE 
        PEDIDO_ESTOQUE
    SET
        PEDI_ASSINATURA_1 = 'S'
    WHERE
        PEDI_COD = ${pediCod}
  `
}

const updateASS2 = (pediCod : string) => {
  return `
      UPDATE 
          PEDIDO_ESTOQUE
      SET
          PEDI_ASSINATURA_2 = 'S'
      WHERE
          PEDI_COD = ${pediCod}
    `
}

const updateASS3 = (pediCod : string) => {
  return `
        UPDATE 
            PEDIDO_ESTOQUE
        SET
            PEDI_ASSINATURA_3 = 'S'
        WHERE
            PEDI_COD = ${pediCod}
      `
}

const updateASS4 = (pediCod : string) => {
  return `
          UPDATE 
              PEDIDO_ESTOQUE
          SET
              PEDI_ASSINATURA_4 = 'S'
          WHERE
              PEDI_COD = ${pediCod}
        `
}

export {
  selectPedidoEstoque1,
  selectPedidoEstoque2,
  selectPedidoEstoque3,
  selectPedidoEstoque4,
  searchNumero1,
  searchNumero2,
  searchNumero3,
  searchNumero4,
  searchForn4,
  searchForn3,
  searchForn2,
  searchForn1,
  selectPedidosItemServico,
  updateASS1,
  updateASS2,
  updateASS3,
  updateASS4
}
