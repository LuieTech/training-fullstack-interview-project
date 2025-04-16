<!-- # LAB API REST

En este laboratorio vamos a construir una biblioteca, teniendo en cuenta que almacenaremos información tanto de autores como libros.

> El objetivo de este laboratorio es recordar el módulo 2 y aplicar los conceptos aprendidos del 3º sobre API Rest, intenta usar al máximo posible tu intuición y copiar lo menos posible de otros sitios ❤️.

> Haz uso de Postman para probar la API.


## Definición de los modelos


### Author

- name: nombre completo del autor
- bio: biografía del autor
- century: siglo al que pertenece
- genres: lista de géneros literarios asociados


### Book

- title: nombre del libro
- abstract: resumen del libro
- isbn: número internacional del libro
- author: autor al que pertenece
- publishedAt: fecha de publicación
- coverUrl: imagen de la portada
- genres: lista de géneros literarios asociados


## Iteración 1

Lo primero de todo es conseguir arrancar el API escuchando en el puerto 3000 y configurar su conexión contra la base de datos:

- app.js
- config/db.config.js
- dotenv: no te olvides de configurar dotenv y crear el template de variables de entorno

## Iteración 2

Implementación del modelo Author, analiza todos sus campos e introduce las validaciones necesarias en cada atributo.

## Iteración 3

¡En esta iteración construiremos el CRUD completo de autores, recuerda en API Rest todas las rutas cuelgan del nombre del recurso en plural!

- `app.js`
- `config/routes.config.js`
- `controllers/authors.controller.js`

Recuerda una API Rest se basa en el uso de los verbos HTTP unidos al PATH correctamente:

- GET: obtener
- PORT: crear
- PUT: edición total
- PATCH: edición parcial
- DELETE: borrar

## Iteración 4

Implementa la detección de errores usando la librería http-errors.

- 400: Bad Params
- 404: Not Found
- 500: Internal Server Error

Al final del app.js añadiremos tanto el middleware de captura de errores 404 como el que errores generales.

## Iteración 5

Implementación del modelo Book, analiza todos sus campos e introduce las validaciones necesarias en cada atributo.


## Iteración 6

Implementación del CRUD completo de libros:

- `app.js`
- `config/routes.config.js`
- `controllers/books.controller.js`

## Iteración 7

Añade atributos virtuales en el autor:

- amoutOfBooks: Número total de libros que tiene el autor
- books: listado de todos los libros del autor

Siempre que se listen, obtenga el detalle de los autores vía API devolveremos también estos dos atributos. -->