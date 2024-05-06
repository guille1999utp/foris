function generarReporte(estudiantes) {

    const reporte = [];
        
    for (const estudiante in estudiantes) {
        const { totalMinutos, diasAsistidos } = estudiantes[estudiante];
        const totalDias = diasAsistidos.size;
        reporte.push({ estudiante, totalMinutos, totalDias });
    }

    // Ordenamos el reporte por minutos de mayor tiempo de asistencia a menor
    reporte.sort((a, b) => b.totalMinutos - a.totalMinutos);

    return reporte;
}

module.exports = generarReporte;