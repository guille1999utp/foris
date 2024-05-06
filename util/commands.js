const calcularDuracionMinutos = require("./getMinutes");

function commandos(comando, estudiantes, partes) {

    if (comando === 'Student') {

        const estudiante = partes[1]; // Capturamos nombre estudiante
                estudiantes[estudiante] = {
                    totalMinutos: 0,// Almacena el total de minutos que el estudiante asistió a clase
                    diasAsistidos: new Set() // Almacena los días de la semana en los que el estudiante asistió a clase, en este caso inicializamos un Set para evitar duplicados y tener un mejor control de los días
                };

    } else if (comando === 'Presence') {
        const estudiante = partes[1];
        const diaSemana = parseInt(partes[2]);
        const horaInicioAsistencia = partes[3];
        const horaFinAsistencia = partes[4];
        const duracionMinutos = calcularDuracionMinutos(horaInicioAsistencia, horaFinAsistencia); // Calculamos la duración en minutos de la asistencia del estudiante
        if (duracionMinutos >= 5) {
            estudiantes[estudiante].totalMinutos += duracionMinutos; // Sumamos la duración en minutos de la asistencia del estudiante con el total de minutos que el estudiante asistió a clase anteriormente
            estudiantes[estudiante].diasAsistidos.add(diaSemana); // Agregamos el día de la semana que el estudiante asistió a clase
        }
    }
}

module.exports = commandos;