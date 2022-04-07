# Google Books API Test Cypress
> Tests automatiques de non régression sur l'API Google Books réalisé avec le framework **Cypress**

- Url de base = [googleapis.com/books/v1](https://www.googleapis.com/books/v1)
- Documentation = [developers.google.com/books](https://developers.google.com/books)
## Obtenir une liste de livres -
#### Test passant d'obtention d'une liste de livres :
```
Etant donné L'url : {{baseUrl}}/volumes?q={{query}}&maxResults={{max}}
Quand On utilise la méthode GET
Alors le serveur revoit un message 200
Et le schéma de la réponse est valide
Et Les items de le réponse contiennent le therme recherché dans leur titre
Et La réponse contient le nombre d'items spécifié avec maxResults
```
#### Test non passant d'obtention d'une liste de livres :
```
Etant donné L'url {{baseUrl}}/volumes?q=intitle:badQuery
Quand On utilise la méthode GET
Alors le serveur revoit un message 200
Et La réponse ne contient aucun item
```
#### Test passant d'obtention un livres avec son code ISBN :
```
Etant donné L'url {{baseUrl}}/volumes?q=isbn:9782070360536
ET Le mot clef de la requête est l'ISBN précédé de isbn:
Quand On utilise la méthode GET
Alors le serveur revoit un message 200
Et Le livre affiché correspond à l'ISBN recherché
```
## Accéder à un livre -
#### Test passant d'accés à un livre :
```
Etant donné L'url : {{baseUrl}}/volumes/{{bookId}}
ET {{bookId}} est la route du livre {{query}}
Quand On utilise la mêthode GET
Alors Le serveur revoit un message 200
ET Le schéma de la réponse est valide
ET Le livre à la route spécifiée a le bon ID
```
#### Test non passant d'accés à un livre :
```
Etant donné L'url : {{baseUrl}}/volumes/badID  
Quand On utilise la méthode GET
Alors Le serveur revoit un message 503
```
