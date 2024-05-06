const command = require('../util/commands');

describe('command function', () => {

  let estudiantes;

  // Antes de cada prueba, limpiamos el objeto estudiantes
  beforeEach(() => {
    estudiantes = {};
  });

  test('agrega un estudiante correctamente', () => {
    const comando = 'Student';
    const partes = ['Student', 'Marco'];
    command(comando, estudiantes, partes);
    expect(estudiantes).toHaveProperty('Marco');
    expect(estudiantes['Marco']).toEqual({
      totalMinutos: 0,
      diasAsistidos: new Set()
    });
  });

  test('acumula correctamente el tiempo si ya existe un registro para el estudiante', () => {
    estudiantes['Sofia'] = { totalMinutos: 30, diasAsistidos: new Set([1, 3]) }; // Estudiante registrado anteriormente
    const comando = 'Presence';
    const partes = ['Presence', 'Sofia', '2', '09:00', '10:00']; // Nuevo registro para el mismo estudiante
    command(comando, estudiantes, partes);
    expect(estudiantes['Sofia'].totalMinutos).toBe(90); // El tiempo anterior (30) más el nuevo tiempo (60)
    expect(estudiantes['Sofia'].diasAsistidos.size).toBe(3); // añadimos un nuevo día a los días asistidos
  });

  test('acumula correctamente el tiempo si ya existe un registro para el estudiante en el mismo dia', () => {
    estudiantes['Sofia'] = { totalMinutos: 30, diasAsistidos: new Set([1, 3]) }; // Estudiante registrado anteriormente
    const comando = 'Presence';
    const partes = ['Presence', 'Sofia', '3', '09:00', '10:00']; // Nuevo registro para el mismo estudiante
    command(comando, estudiantes, partes);
    expect(estudiantes['Sofia'].totalMinutos).toBe(90); // El tiempo anterior (30) más el nuevo tiempo (60)
    expect(estudiantes['Sofia'].diasAsistidos.size).toBe(2); // añadimos un nuevo día a los días asistidos
  });

  test('registra la presencia de un estudiante correctamente', () => {
    estudiantes['David'] = { totalMinutos: 0, diasAsistidos: new Set() };
    const comando = 'Presence';
    const partes = ['Presence', 'David', '1', '09:00', '10:00'];
    command(comando, estudiantes, partes);
    expect(estudiantes['David'].totalMinutos).toBe(60);
    expect(estudiantes['David'].diasAsistidos.size).toBe(1);
    expect(estudiantes['David'].diasAsistidos.has(1)).toBe(true);
  });
  

  test('no registra la presencia si la duración es menor a 5 minutos', () => {
    const comando = 'Presence';
    const partes = ['Presence', 'Fran', '3', '10:00', '10:04'];
    command(comando, estudiantes, partes);
    expect(estudiantes).not.toHaveProperty('Fran');
  });
});