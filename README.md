# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# Curso de JavaScript Profesional

# This

Is a concept that many programming languages. This se refiere a un objeto, ese objeto es el que actualmente esta ejecutando un pedazo de código.

## As Global Scope

whenever we

## in fucnctions

cuando ejecutamos directamente la function js considera a this como el objeto global window.

A menos que estemos usando el strict mode

## In Objects

# Call, apply and bind

Estos  3 métodos son parte  del prototipo function. Nos ayudan a establecer el contexto del this.

```jsx
<script>
function saludar(){
console.log(`Hola. Soy ${this.name} ${this.apellido}`}
</script>

const richard ={
name: "Richard",
apellido: "Kaufman",
}
saludar.call(richard);

function caminar (metros,direction){
console.log(`${this.name}`)
```

## Apply

```java
function caminar(metros, direction){
	console.log(`${this.name} camina ${metros} metros hacia${direcction}`)
}
caminar.call(richard,400,'oeste');
const valores =[800,`noreste`];
caminar.apply(richard, valores);
```

## bind

```jsx

```

## function Currying

```jsx
const buttons= document.getElemnetByClassname("call-to-action");
button.forEach(button =>{
	buttons.onclick=()=> alert(`nunca pares de aprender`)
}// esto no funciona por que buttons en un NodeList, es un 
//ojeto que no tiene todas las propiedades de los arrays
Array.prototype.forEach.call(buttons,button=>{
	button.onclick=()=> alert(`Nunca pares de aprender!`);
});
```

# Prototypes

En java script todos son objetos. 
Los objetos encapsulan datos lo que minimiza el uso de variables globales

## objectCreate

# Herencias prototipales

## Object.prototypeof

# Parses y Abstract Syntax tree

¡Qué hace un js engine?

- Recibe código fuente
- Parsea el código un produce un  **Abstract Syntax Tree (AST).**
- Se compila a byte code y se ejecuta

¿Qué es un parse?

Agarra nuestro codigo fuente y lo descompone en tokens

## Tipos de parsing de V8

### Eager Parsing

### Lazy Parsing

- Encuentra errores de sintaxis
- Crea AST
- Construye Scopes

Estamos retrazando una parte del codigo

- No se construye el AST
- Doble de rápido que el eager parser
- Construye los scopes parcialmente

## Bitecode

## Machine code

# Event loop

Es lo hace que js paresca multi hilo cuando realmente es de un solo hilo

Organización de tdatos en jasva escirpt

### Stack

Dentro del stack los procesos que van avanzado en la forma de que el primero que llega es el primero que sale.

### Memory heap

Aquí es donde se guardan las variables.

# Generator

Son funciones que nos permiten detener su ejecución  y volver  a retomarlas cuando necesitemos.

# Patrones de diseño

Son tecnicas para resolver problemas comunes en el desarrollo de software

Se refiere a problemas que se pueden resolver dentro de un contexto con todas sus limitaciones

la solución tiene que ser genérica para alcanzar la meta dentro de un contexto.

¿De donde vienen los patrones de diseño?

Viene de la arquitectura con Christopher Alexander

 

## Beneficios de usar patrones de diseño

Nos sirven as  tools that can provide responses very specific to certain problems

## Criticas

- Introducen complejidad
- no son algo que queramos usar constantemente ,solo en caso de que sean muy complejos los problemas
- 

# Categorías de patrones de diseño

## Creacionales

## Estructurales

## De comportamiento
