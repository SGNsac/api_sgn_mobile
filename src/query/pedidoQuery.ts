const selectPedidoEstoque = (usuaCod : string) => {
  return `
    SELECT TOP 50
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
        PEDI_DATA
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
    OR
        PEDI_USUA_COD_ASS_2 =   ${usuaCod}
    OR
        PEDI_USUA_COD_ASS_3 = ${usuaCod}
    OR
        PEDI_USUA_COD_ASS_4  =   ${usuaCod}
    ORDER BY
        PEDI_DATA DESC`
}

export {
  selectPedidoEstoque
}
