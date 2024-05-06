// Función para calcular la duración en minutos en el que el estudiantes asistió a clase
function calcularDuracionMinutos(horaInicio, horaFin) {
    
    const [horaInicioHora, horaInicioMinutos] = horaInicio.split(':').map(Number); // Convertimos la hora de inicio en un array de dos elementos, la hora y los minutos, usamos el Number para convertir los valores a números
    const [horaFinHora, horaFinMinutos] = horaFin.split(':').map(Number);      // Convertimos la hora de fin en un array de dos elementos, la hora y los minutos, usamos el Number para convertir los valores a números

    // console.log(horaInicioHora, horaInicioMinutos, horaFinHora, horaFinMinutos)

    const minutosInicio = horaInicioHora * 60 + horaInicioMinutos; // Convertimos la hora de inicio a minutos y sumamos los minutos para obtener el total de minutos de la hora de inicio
    const minutosFin = horaFinHora * 60 + horaFinMinutos; // Convertimos la hora de fin a minutos y sumamos los minutos para obtener el total de minutos de la hora de fin

    return minutosFin - minutosInicio; // Restamos los minutos de inicio a los minutos de fin para obtener la duración en minutos de la presencia del estudiante en la clase
}

module.exports = calcularDuracionMinutos;