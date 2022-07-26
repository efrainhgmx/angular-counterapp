# Contador en Angular

## COMANDOS BASICOS PARA PROYECTOS DE ANGULAR CREADOS CON ANGULAR CLI

Antes de trabajar con Angular, es recomendable revisar la siguiente documentación sobre la instalacion de [Angular-CLI](https://angular.io/cli)

### Crear un Proyecto nuevo:

Usamos el comando:

`$ng new project-name`

### Correr un proyecto en el navegador

Usamos el comando:

`$ng serve` //Levanta el proyecto en modo desarrollo
`$ng serve -o` //Abre el proyecto en una pestaña del navegador, tan pronto levante el proyecto

### Crear componente de manera autómatica

Se pueden usar cualquier de los siguientes comandos:

`$ng generate component directorio/nombreComponente`

o hacer la manera corta (Ammbos es lo mismo)

`$ng g c modulo/nombreComponente`

`$ng g c modulo/nombreComponente --skip-tests` //Crea el componente sin los archivos de tests

Esto genera el componenten dentro de la carpeta **src/app** por eso ya no se especifica

### Generar un modulo mediante angular-cli

Al igual que se pueden generar componentes, podemos crear modulos de manera automática.

Y para eso usamos el siguiente comando:

`$ ng generate module nombreDelModulo`

o de la manera abreviada:

`$ ng g m nombreDelModulo`

### Version de produccion.

En las ultimas versiones de Angular usamos el siguiente comando para crear un build e producción:

`$ ng build --configuration production` 