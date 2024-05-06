# Detectar Estudiantes que Más Asisten a Clases

## Descripción del Problema

El problema de la prueba tecnica consiste en un archivo de entrada que contiene comandos para registrar estudiantes y su asistencia a clases, y generar un reporte de los estudiantes que más asisten a clases, ordenandolos del estudiante que mas asiste al que menos asiste

## Enfoque de Solución

Para solucionar este problema, he desarrollado un código en Node.js que funciona con varias funciones modulares para manejar diferentes aspectos del procesamiento del archivo de entrada y la generación del reporte, teniendo en cuenta el orden y la legibilidad del codigo.

## Estructura del Código

He dividido el código en varios archivos para mejorar la modularidad y la legibilidad:

1. util/getMinutes.js: Contiene la función "calcularDuracionMinutos" para calcular la duración en minutos entre dos horas dadas.
2. util/commands.js: Define la función "commandos" para procesar cada comando del archivo de entrada, como agregar un estudiante o registrar su presencia en clase.
3. util/report.js: Contiene la función "generarReporte" para generar el reporte final de los estudiantes, ordenado por la cantidad de minutos de asistencia.
4. index.js: Es el archivo de entrada principal del programa. Lee el archivo de entrada, procesa los comandos y genera el reporte utilizando las funciones definidas en los otros archivos.

## Enfoque al Testing

Para asegurar la calidad y la eficiencia del código, he implementado pruebas unitarias utilizando Jest, es una de las mejores librerias para test unitarios en javascript y con una amplia comunidad, entonces se utilizo por sus beneficios que podria otorgar para futuros proyectos manteniendo la escalabilidad de este. Las pruebas cubren diversos casos de uso, como agregar un estudiante, registrar su presencia en clase, acumular tiempo si ya existe un registro previo, y manejar diferentes escenarios de entrada.

## Expresiones Típicas y Prácticas del Lenguaje

He seguido las prácticas y convenciones típicas de JavaScript, como el uso de nombres de variables descriptivos con camelCase, no se uso `try/catch` que comunmente se utiliza el manejo adecuados de los errores, en este caso usamos los mecanismos de manejo de errores proporcionados por Node.js como por ejemplo el callback que devuelve el fs al leer el archivo, ademas tambien se uso las funciones modulares y con posibilidad de reutilizar. También utilize funciones nativas de JavaScript como `split`, `forEach` y `sort` para manipular y procesar los datos de manera eficiente.

## Razonamiento detrás de las Decisiones

Nuestro enfoque de diseño se basó en encontrar una estabilidad entre la simplicidad, la eficiencia y la legibilidad del código. Opte por una estructura modular para facilitar el mantenimiento y la escalabilidad en el futuro del código, mejorando la claridad y la comprensión mediante nombres descriptivos de variables y funciones, así como comentarios explicativos para tener mejor contexto para futuros programadores.

## Conclusiones

la solución aborda el problema de detectar estudiantes que más asisten a clases de manera efectiva y eficiente, utilizando un enfoque modular y bien estructurado que facilita la lectura, la mantebilidad y la extensión del código. Además, hemos asegurado la calidad del código mediante pruebas unitarias que abordan variedad de casos de uso.


# Correr el proyecto en local

## Configuración del Proyecto por repositorio por medio de Github

Clona este repositorio en tu máquina local utilizando el siguiente comando:

```console
git clone https://github.com/guille1999utp/foris.git
```

## Configuracion del proyecto por archivo zip

para comprimir los archivos adjuntos al .tgz utilizamos el siguiente comando para descomprimir el archivo y poder ejecutar los siguientes pasos:

```console
tar -xzf prueba_tecnicas.tgz
```

## Instalacion de dependencias del proyecto

Instalamos las dependencias de nuestro proyecto que son las que necesitaremos para poder correr nuestro proyecto, en este caso solo para los test unitarios con jest:

```console
npm install
```

## Ejecucion del proyecto

se puede correr el proyecto de dos maneras, por medio de un comado donde se adjunta el archivo donde arrancaremos la aplicacion y el archivo con los comandos: 

```console
node index.js input.txt
```

o ya bien utilizando los shortcuts dentro del package.json para ejecutar comandos, podemos ejecutar el siguiente si se usaran los que estan de base en la prueba adjunta:

```console
npm start
```

## Ejecucion de pruebas unitarias

para la ejecucion de estas ya debemos haber instalado las dependencias del proyecto con anterioridad, el comando para ejecutar los test unitarios es el siguiente:

```console
 npm run test
```



