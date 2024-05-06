const fs = require('fs');
const commandos = require('./util/commands');
// Función para procesar el archivo de entrada
function inputComands(input) {
    fs.readFile(input, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // console.log(data)

        const lineas = data.trim().split('\n');

        const estudiantes = {};

        // creamos un ciclo para verificar cada comando en el archivo
        lineas.forEach((linea) => {
            const partes = linea.trim().split(' '); // Dividimos la línea en partes para tomar los datos correspondientes

            
            const comando = partes[0]; // comando para agregar estudiante o presencia de este ("Student" o "Presence")

            commandos(comando, estudiantes, partes);
          
        });

        // Generamos el reporte de los estudiantes
        const reporte = [];
        for (const estudiante in estudiantes) {
            const { totalMinutos, diasAsistidos } = estudiantes[estudiante];
            const totalDias = diasAsistidos.size;
            reporte.push({ estudiante, totalMinutos, totalDias });
        }

        // Ordenamos el reporte por minutos de mayor a menor
        reporte.sort((a, b) => b.totalMinutos - a.totalMinutos);

        // Imprimimos el reporte de los estudiantes en la consola
        reporte.forEach(({ estudiante, totalMinutos, totalDias }) => {
            if(totalDias > 0)console.log(`${estudiante}: ${totalMinutos} minutes in ${totalDias} days`);
            if(totalDias == 0)console.log(`${estudiante}: ${totalMinutos} minutes`);
        });

    });
}





// Verificamos que exista un archivo en los argumetnos del comando
if (process.argv.length === 3) {
    const input = process.argv[2];
    inputComands(input);
} else {
    console.error('Uso: node yourcode.js nombre_archivo');
}