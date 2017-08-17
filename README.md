# 
la base necesita Node y YARN para puder installarse.

'''shell
$ brew install yarn
'''
Esto instala ambos 

---

Instala todas las dependencias ( una vez dentrod del repositorio)

```shell
$ yarn install
```
---
El comando default de gulp corre procesos de procesamiento de archivos .pug en /src y .sass en /src/sass

```shell
gulp
```


---
es posible que los comandos de terminal de gulp no esten activados por defualt

```
yarn global add gulp-cli
```
para instalarlos de manera global y sean reconocidos por terminal.
