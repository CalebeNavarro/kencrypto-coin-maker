## [kencrypto-coin-maker](https://www.npmjs.com/package/kencrypto-coin-maker)

## Sobre
Pequena biblioteca em TypeScript que lidará com a busca e tratamento das informações de cotação e conversão das moedas.

Desenvolvida para a API CoinMarketCap.

Documentação pode ser encontrada [aqui](https://coinmarketcap.com/api/documentation/v1/)

O que a biblioteca tem.

1. Função para listar a cotação atual e outra para fazer a conversão entre moedas.
2. A chave da [API](https://coinmarketcap.com/api/) é configurável, ou seja, pode ser adicionada diretamente no código da aplicação.
3. Cria tipos personalizados para os formatos de resposta da aplicação.

## Exemplo de uso

### Cotação Atual

A documentação sobre como obter a cotação atual pode ser vista [aqui](https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyQuotesLatest).

Nessa biblioteca, é trabalhado somente o uso so symbol que aceita uma ou mais moeda. Exemplo: <code>symbol=BTC,ETH</code>

Exemplo de resposta da funçao quotes:
```javascript
{
    "data": {
        "BTC": {
            "id": 1,
            "name": "Bitcoin",
            "symbol": "BTC",
            "slug": "bitcoin",
            "date_added": "2013-04-28T00:00:00.000Z",
            "last_updated": "2021-08-26T17:44:11.000Z",
            "quote": {
                "USD": {
                    "price": 46963.215165006586,
                    "last_updated": "2021-08-26T17:44:11.000Z"
                }
            }
        }
    }
}
```

### Conversão de Preço

A documentação sobre como obter uma conversão de preços pode ser vista [aqui](https://coinmarketcap.com/api/documentation/v1/#operation/getV1ToolsPriceconversion).

Parâmetros: parâmetros função conversion: <code>amount, symbol e convert.</code>

```javascript
{
    "data": {
        "id": 1,
        "symbol": "BTC",
        "name": "Bitcoin",
        "amount": 25.67,
        "last_updated": "2021-08-26T18:30:17.000Z",
        "quote": {
            "ETH": {
                "price": 386.5352847529818,
                "last_updated": "2021-08-26T18:30:16.000Z"
            }
        }
    }
}
```
