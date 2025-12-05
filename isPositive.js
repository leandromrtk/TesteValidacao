/**
 * Valida se um valor de depósito é positivo, atendendo aos critérios de aceitação:
 * 1. Retorna true se o valor for > 0.
 * 2. Retorna false se o valor for 0.
 * 3. Lança exceção "Valor inválido" se o valor for < 0.
 * 4. Lança exceção "A entrada deve ser um número" se não for um número.
 *
 * @param {number} value O valor a ser validado.
 * @returns {boolean} True se o valor for positivo, false se for zero.
 * @throws {Error} Se o valor for negativo ou não for um número.
 */
const isPositive = (value) => {
    // Critério 4: Validação de tipo
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error('A entrada deve ser um número');
    }

    // Critério 3: Validação de valor negativo
    if (value < 0) {
        throw new Error('Valor inválido');
    }

    // Critério 1: Valor positivo
    if (value > 0) {
        return true;
    }

    // Critério 2: Valor zero (o único caso restante)
    return false;
};

module.exports = isPositive;
