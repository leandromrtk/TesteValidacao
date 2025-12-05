const isPositive = require('./isPositive');

describe('isPositive', () => {
    // Critério de Aceitação 1: Dado que o usuário informa um valor maior que zero, quando a função isPositive() for chamada, então ela deve retornar true.
    test('deve retornar true para um valor positivo (Red Phase 1)', () => {
        expect(isPositive(10)).toBe(true);
    });

    // Critério de Aceitação 2: Dado que o usuário informa o valor 0, então ela deve retornar false.
    test('deve retornar false para o valor zero (Red Phase 2)', () => {
        expect(isPositive(0)).toBe(false);
    });

    // Critério de Aceitação 3: Dado que o usuário informa um valor menor que zero, então ela deve lançar uma exceção com a mensagem "Valor inválido".
    test('deve lançar exceção "Valor inválido" para um valor negativo (Red Phase 3)', () => {
        expect(() => isPositive(-5)).toThrow('Valor inválido');
    });

    // Critério de Aceitação 4: Dado que o usuário informa algo que não é um número (ex.: "abc", true, null), quando a função isPositive() for chamada, então ela deve lançar uma exceção com a mensagem "A entrada deve ser um número".
    test('deve lançar exceção "A entrada deve ser um número" para entrada não numérica (Red Phase 4)', () => {
        expect(() => isPositive('abc')).toThrow('A entrada deve ser um número');
        expect(() => isPositive(true)).toThrow('A entrada deve ser um número');
        expect(() => isPositive(null)).toThrow('A entrada deve ser um número');
    });
});
