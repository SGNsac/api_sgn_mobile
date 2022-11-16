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
        1 AS ASS
    FROM
        pedido_estoque
    INNER JOIN
        FORNECEDOR
    ON
        FORN_COD = PEDI_FORN_COD
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
          2 AS ASS
      FROM
          pedido_estoque
      INNER JOIN
          FORNECEDOR
      ON
          FORN_COD = PEDI_FORN_COD
      WHERE
          PEDI_STATUS = 'N'
      AND
          PEDI_USUA_COD_ASS_2 =   ${usuaCod}
      AND 
          PEDI_ASSINATURA_2 != 'S'
      ORDER BY
          PEDI_DATA DESC`
}

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
          3 AS ASS
      FROM
          pedido_estoque
      INNER JOIN
          FORNECEDOR
      ON
          FORN_COD = PEDI_FORN_COD
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
          4 AS ASS
      FROM
          pedido_estoque
      INNER JOIN
          FORNECEDOR
      ON
          FORN_COD = PEDI_FORN_COD
      WHERE
          PEDI_STATUS = 'N'
      AND
          PEDI_USUA_COD_ASS_4 =   ${usuaCod}
      AND 
          PEDI_ASSINATURA_4 != 'S'
      ORDER BY
          PEDI_DATA DESC`
}

export {
  selectPedidoEstoque1,
  selectPedidoEstoque2,
  selectPedidoEstoque3,
  selectPedidoEstoque4
}
