# Requisições com cURL

## GET simples

### curl https://api.scryfall.com/cards/random

Busca um card aleatório do jogo *Magic: The Gathering*

Retorno:
```
{
  "object": "card",
  "id": "5305b5c6-2af6-4b5c-9a57-0a2d2628e2f4",
  "oracle_id": "e120f341-4445-4b96-9777-2290471832bf",
  "multiverse_ids": [
    142356
  ],
...
  "purchase_uris": {
    "tcgplayer": "https://www.tcgplayer.com/product/15512?page=1\\u0026utm_campaign=affiliate\\u0026utm_medium=api\\u0026utm_source=scryfall",
    "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall\\u0026searchString=Goldmeadow+Dodger\\u0026utm_campaign=card_prices\\u0026utm_medium=text\\u0026utm_source=scryfall",
    "cardhoarder": "https://www.cardhoarder.com/cards/28391?affiliate_id=scryfall\\u0026ref=card-profile\\u0026utm_campaign=affiliate\\u0026utm_medium=card\\u0026utm_source=scryfall"
  }
}
```

## GET com parâmetros

### curl https://api.scryfall.com/cards/dom/35

Busca o card *Shalay, Voice of Plenty (35)* do jogo *Magic: The Gathering*, coleção *Dominaria (dom)*

Retorno:
```{
  "object": "card",
  "id": "db827ee7-6f2e-4e10-aac0-120fc2b69fbd",
  "oracle_id": "a0c47ab6-dfb4-46ee-a3f7-9e1521b4bb4b",
  "multiverse_ids": [
    442923
  ],
  "mtgo_id": 67535,
...
  "purchase_uris": {
    "tcgplayer": "https://www.tcgplayer.com/product/164228?page=1\\u0026utm_campaign=affiliate\\u0026utm_medium=api\\u0026utm_source=scryfall",
    "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall\\u0026searchString=Shalai%2C+Voice+of+Plenty\\u0026utm_campaign=card_prices\\u0026utm_medium=text\\u0026utm_source=scryfall",
    "cardhoarder": "https://www.cardhoarder.com/cards/67535?affiliate_id=scryfall\\u0026ref=card-profile\\u0026utm_campaign=affiliate\\u0026utm_medium=card\\u0026utm_source=scryfall"
  }
}
```

## POST

### curl -d https://jsonplaceholder.typicode.com/posts/

Simula a criação de um recurso do tipo *post*

Retorno:
```
{
  "id": 101
}
```

## PUT

### curl -X PUT https://jsonplaceholder.typicode.com/posts/1

Retorno:
```
{
  "id": 1
}
```

## DELETE

### curl -X DELETE https://jsonplaceholder.typicode.com/posts/1

Retorno:
```
{}
```
