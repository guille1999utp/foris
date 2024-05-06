const calcularDuracionMinutos = require('../util/getMinutes');

// testeamos con los tiempos de la prieba
test('calcula correctamente la duración en minutos', () => {
    expect(calcularDuracionMinutos('09:02', '10:17')).toBe(75);
    expect(calcularDuracionMinutos('10:58', '12:05')).toBe(67);
    expect(calcularDuracionMinutos('14:02', '15:46')).toBe(104);
});