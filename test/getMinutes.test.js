const calcularDuracionMinutos = require('../util/getMinutes');

test('calcula correctamente la duración en minutos', () => {
    expect(calcularDuracionMinutos('09:02', '10:17')).toBe(75);
});