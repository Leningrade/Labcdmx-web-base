# Base para Sitios Web del Laboratorio para la Ciudad de México.

Este repositorio esta pensado para los miembros del equipo de diseño del laboratorio para la ciudad.
El paquete usa Gulp, Pug, Sass, y yarn para el manejo de los recursos.

## Instalación

Se necesita Node y YARN para puder installarse. Gulp para el manejo de los commandos en 

```shell
$ brew install yarn && yarn global add gulp-cli
```

El siguiente comando instala todas las dependencias (una vez dentrod del repositorio) y lo inicializa.

```shell
$ yarn install
```

El comando default de gulp corre procesos de procesamiento de archivos .pug en /src y .sass en /src/sass

```shell
gulp
```

para el iniciar el servidor web ( default: /dist ) 
