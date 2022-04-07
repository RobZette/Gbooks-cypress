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
> Contributeurs : Loïc Brachet - Robin Josso - Lucas Baste

<svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
</svg>