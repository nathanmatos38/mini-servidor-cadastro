# 🚀 Mini Servidor de Cadastro — API /register

Projeto desenvolvido para **estudos e prática de Quality Assurance (QA)**, utilizando uma API de cadastro construída com **JavaScript e Node.js/Express**.

O projeto foi utilizado como ambiente prático para aplicar conceitos de **testes de API, elaboração de casos de teste, validação de regras funcionais, identificação e documentação de bugs, correção de defeitos, retestes e regressão**.

> 🎯 **Objetivo principal:** analisar o comportamento da API `/register`, identificar inconsistências entre as regras esperadas e o comportamento real do sistema e documentar todo o processo de testes.

---

## 🧪 Sobre o Projeto

A aplicação disponibiliza uma API responsável pelo cadastro de usuários através da rota:

```http
POST /register
```

Durante o projeto, foram realizadas diferentes abordagens de teste para validar:

* Campos obrigatórios;
* Tipos de dados;
* Validação de nome;
* Formato de e-mail;
* Regras de senha;
* Confirmação de senha;
* Usuários duplicados;
* Perfis de acesso;
* Códigos de resposta HTTP;
* Mensagens retornadas pela API;
* Geração de token JWT.

O projeto também foi utilizado para praticar a identificação de **bugs funcionais e de validação de dados**.

---

## 🛠️ Tecnologias e Ferramentas

### Desenvolvimento

* **JavaScript**
* **Node.js**
* **Express.js**
* **JWT**

### QA e Testes

* **Postman**
* Testes manuais de API
* Casos de teste
* Testes positivos e negativos
* Validação de códigos HTTP
* Validação de mensagens de resposta
* Retestes
* Testes de regressão

### Versionamento

* **Git**
* **GitHub**
* **GitHub Desktop**

---

## 📋 Regras Funcionais

Durante a análise da API, foram definidas e utilizadas regras funcionais para orientar os testes.

| ID             | Regra Funcional                                                                                     |
| -------------- | --------------------------------------------------------------------------------------------------- |
| **RF-API-001** | Os campos obrigatórios devem ser informados.                                                        |
| **RF-API-002** | `fullName` deve ser enviado como texto.                                                             |
| **RF-API-003** | `fullName` não deve aceitar somente números.                                                        |
| **RF-API-004** | `email` deve ser um texto em formato válido.                                                        |
| **RF-API-005** | `password` e `confirmPassword` devem ser iguais.                                                    |
| **RF-API-006** | A senha deve possuir entre 4 e 12 caracteres.                                                       |
| **RF-API-007** | A senha deve aceitar letras, números e caracteres especiais conforme definido pela regra.           |
| **RF-API-008** | `accessProfile` deve aceitar os perfis previstos pela aplicação.                                    |
| **RF-API-009** | A API deve retornar erro quando os dados obrigatórios ou válidos não forem fornecidos corretamente. |

---

# 🔎 Estratégia de Testes

A execução dos testes foi estruturada buscando validar tanto o **fluxo esperado** quanto comportamentos inválidos ou inesperados.

### Abordagens utilizadas

**1. Testes positivos**

Validação de cadastros utilizando dados válidos e diferentes combinações permitidas.

**2. Testes negativos**

Envio de dados inválidos para verificar se a API rejeitaria corretamente as requisições.

**3. Validação de tipos**

Foram enviados valores incompatíveis com os tipos esperados, como números nos campos `fullName`, `email` e `password`.

**4. Análise de limites**

Foram testados valores relacionados aos limites da regra de senha:

* 4 caracteres;
* 12 caracteres;
* 3 caracteres;
* 13 caracteres.

**5. Validação de respostas**

Foram analisados:

* Status HTTP;
* Mensagens retornadas;
* Aceitação ou rejeição do cadastro;
* Token JWT retornado no cadastro válido.

---

# 🧪 Casos de Teste

Foram executados **18 casos de teste** durante a etapa de exploração inicial.

Os casos contemplaram:

* Cadastro válido;
* Campos obrigatórios ausentes;
* Body vazio;
* Senhas diferentes;
* Usuário duplicado;
* Senha nos limites mínimo e máximo;
* Senha abaixo do limite;
* Senha acima do limite;
* Caracteres especiais;
* Diferentes perfis de acesso;
* `fullName` numérico;
* `fullName` somente numérico;
* E-mail inválido;
* E-mail numérico;
* Password numérico.

A documentação completa dos cenários está disponível em:

📄 [`casos-de-teste.md`](casos-de-teste.md)

---

# 🐛 Bugs Encontrados

Durante a execução dos testes, foram identificados **6 tipos de problemas**, documentados formalmente em Bug Reports.

### Principais problemas encontrados

| Bug             | Problema                                            | Severidade |
| --------------- | --------------------------------------------------- | ---------- |
| **BUG-API-002** | `email` aceitava formato inválido                   | 🔴 Alta    |
| **BUG-API-003** | `fullName` aceitava tipo NUMBER                     | 🟡 Média   |
| **BUG-API-004** | `email` aceitava tipo NUMBER                        | 🔴 Alta    |
| **BUG-API-005** | `password` aceitava tipo NUMBER                     | 🟡 Média   |
| **BUG-API-006** | `password` não respeitava limite de 4–12 caracteres | 🔴 Alta    |
| **BUG-API-007** | `fullName` aceitava somente números                 | 🟡 Média   |

Todos os problemas encontrados foram posteriormente **corrigidos e retestados**.

A documentação completa está disponível em:

📄 [`bug-report.md`](bug-report.md)

---

# 🔧 Correções e Retestes

Após a identificação dos problemas, foram realizadas as correções necessárias na aplicação.

Cada comportamento que apresentou falha foi novamente executado para verificar se a correção havia sido efetiva.

O processo seguido foi:

```text
Execução dos testes
        ↓
Identificação dos problemas
        ↓
Documentação dos bugs
        ↓
Correção
        ↓
Reteste dos casos afetados
        ↓
Regressão
        ↓
Resultado final
```

---

# 🔄 Teste de Regressão

Após as correções, foi realizada uma **regressão completa dos 18 casos de teste**.

O objetivo foi garantir que:

* Os bugs identificados haviam sido corrigidos;
* Os casos anteriormente aprovados continuavam funcionando;
* As alterações realizadas não introduziram novos problemas.

### Resultado da regressão

> 🟢 **18/18 casos aprovados — 100% PASS**

---

# 📊 Resultado Final

| Resultado | Quantidade | Percentual |
| --------- | ---------: | ---------: |
| 🟢 PASS   |     **18** |   **100%** |
| 🔴 FAIL   |      **0** |     **0%** |
| ⛔ BLOCK   |      **0** |     **0%** |
| **TOTAL** |     **18** |   **100%** |

### 🏆 Status Final

**Projeto aprovado na regressão, com 100% dos casos de teste aprovados.**

Os problemas identificados durante a exploração inicial foram corrigidos e validados através de retestes.

---

# 📚 Documentação QA

Toda a documentação produzida durante o projeto está organizada na pasta `QA`:

```text
QA/
├── QA.md
├── casos-de-teste.md
└── bug-report.md
```

### 📄 Documentos

* [`QA.md`](QA/QA.md) — Documentação principal do processo de QA.
* [`casos-de-teste.md`](QA/casos-de-teste.md) — Casos de teste executados.
* [`bug-report.md`](QA/bug-report.md) — Bugs identificados durante os testes.

---

# 🎯 O que foi praticado

Este projeto proporcionou prática em diferentes atividades relacionadas à área de QA:

* Análise de requisitos;
* Definição de regras funcionais;
* Planejamento de testes;
* Testes de API;
* Testes positivos e negativos;
* Validação de tipos de dados;
* Análise de valores limite;
* Validação de status HTTP;
* Validação de mensagens de resposta;
* Identificação de defeitos;
* Classificação de severidade;
* Elaboração de Bug Reports;
* Reteste após correções;
* Testes de regressão;
* Documentação de QA;
* Versionamento com Git/GitHub.

---

# 💡 Conclusão

O projeto permitiu aplicar, de forma prática, conceitos fundamentais de **Quality Assurance** em uma API real de estudos.

Através da execução dos testes, foram identificados comportamentos que não estavam de acordo com as regras funcionais estabelecidas. Os problemas foram documentados, corrigidos e posteriormente validados através de retestes e uma regressão completa.

O resultado final foi de:

> 🟢 **18/18 testes aprovados — 100% PASS**

Mais do que validar se a API funcionava, o projeto teve como objetivo desenvolver uma visão de QA baseada em **investigação, evidências, documentação, identificação de riscos e validação das correções**.

---

## 👨‍💻 Autor

**Nathan Matos**

Projeto desenvolvido para fins de **estudo, prática e construção de portfólio em Quality Assurance**.
