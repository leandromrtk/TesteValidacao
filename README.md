# TDD - Validação de Depósito Positivo (isPositive)
Resolução da Parte 2 - Experimento prático da atividade de TDD da disciplina de Verificação e Validação de Software.
# Objetivo
Implementar a função isPositive() seguindo o ciclo TDD (Red, Green, Refactor) para validar valores de depósito positivos, conforme a seguinte História de Usuário:

Como usuário do sistema financeiro da Fintech, quero que o sistema valide se o valor informado em um depósito é maior que zero, para que eu não consiga realizar transações com valores negativos ou inválidos, evitando inconsistências no saldo da conta.
# Critérios de Aceitação (DoD - Definition of Done)
Positivo: se o usuário informa um valor maior que zero, quando a função isPositive() for chamada, então ela deve retornar true.

Zero: se o usuário informa o valor 0, então ela deve retornar false.

Negativo: se o usuário informa um valor menor que zero, então ela deve lançar uma exceção com a mensagem "Valor inválido".

Não Numérico: se o usuário informa algo que não é um número (ex.: "abc", true, null), quando a função isPositive() for chamada, então ela deve lançar uma exceção com a mensagem "A entrada deve ser um número".
# Estrutura do Projeto
O projeto foi desenvolvido em JavaScript (Node.js) e utiliza o Jest para os testes.


| Arquivo | Descrição |
| :--- | :--- |
| `isPositive.js` | Contém a implementação da função `isPositive()`. |
| `isPositive.test.js` | Contém os testes unitários que garantem o cumprimento dos Critérios de Aceitação. |
| `package.json` | Define as dependências do projeto (apenas `jest`). |

## Como Executar os Testes

Para executar os testes e validar a solução, siga os passos abaixo:

1.  **Clone o repositório:**
    \`\`\`bash
    git clone LINK DO REPOSITÓRIO
    cd tdd-ispositive
    \`\`\`
2.  **Instale as dependências:**
    \`\`\`bash
    npm install
    \`\`\`
3.  **Execute os testes:**
    \`\`\`bash
    npx jest
    \`\`\`

O resultado esperado é que **todos os 4 testes passem**, confirmando que a função `isPositive()` atende a todos os critérios de aceitação definidos.
