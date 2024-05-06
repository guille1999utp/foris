const generarReporte = require('../util/report');

test('genera correctamente el reporte de estudiantes ordenado por minutos', () => {
  const estudiantes = {
    Marco: { totalMinutos: 150, diasAsistidos: new Set([1, 3]) },
    David: { totalMinutos: 100, diasAsistidos: new Set([2]) },
    Fran: { totalMinutos: 0, diasAsistidos: new Set() }
  };

  const reporte = generarReporte(estudiantes);

  expect(reporte).toEqual([
    { estudiante: 'Marco', totalMinutos: 150, totalDias: 2 },
    { estudiante: 'David', totalMinutos: 100, totalDias: 1 },
    { estudiante: 'Fran', totalMinutos: 0, totalDias: 0 }
  ]);
});

test('genera correctamente el reporte de estudiantes sin días asistidos', () => {
  const estudiantes = {
    Sofia: { totalMinutos: 0, diasAsistidos: new Set() }
  };

  const reporte = generarReporte(estudiantes);

  expect(reporte).toEqual([
    { estudiante: 'Sofia', totalMinutos: 0, totalDias: 0 }
  ]);
});

test('genera correctamente el reporte de estudiantes con ordenamiento correcto', () => {
  const estudiantes = {
    Carlos: { totalMinutos: 200, diasAsistidos: new Set([1, 2, 3]) },
    Laura: { totalMinutos: 250, diasAsistidos: new Set([1, 2, 3]) },
    Maria: { totalMinutos: 150, diasAsistidos: new Set([1, 2]) }
  };

  const reporte = generarReporte(estudiantes);

  expect(reporte).toEqual([
    { estudiante: 'Laura', totalMinutos: 250, totalDias: 3 },
    { estudiante: 'Carlos', totalMinutos: 200, totalDias: 3 },
    { estudiante: 'Maria', totalMinutos: 150, totalDias: 2 }
  ]);
});