# 🧪 QA — API `/register`

Documentação dos testes realizados na API de cadastro do projeto `mini-servidor-cadastro`.

---

## 🎯 Objetivo

Validar o comportamento da API `POST /register`, verificando se os dados recebidos são processados de acordo com as regras funcionais definidas para o cadastro de usuários.

O projeto tem como objetivo aplicar, na prática, conceitos de Quality Assurance (QA), incluindo planejamento, definição de regras funcionais, elaboração de casos de teste, execução, identificação de bugs, correção, reteste, teste de regressão e documentação das evidências.

---

## 📌 Escopo

Os testes foram direcionados à rota:

`POST /register`

Foram avaliados os seguintes aspectos:

- Cadastro com dados válidos;
- Campos obrigatórios;
- Validação do tipo dos dados;
- Validação do formato do e-mail;
- Validação de senha e confirmação de senha;
- Limites mínimo e máximo da senha;
- Aceitação de letras, números e caracteres especiais na senha;
- Validação do campo `fullName`;
- Validação do campo `accessProfile`;
- Tratamento de entradas inválidas;
- Mensagens de retorno da API;
- Comportamento da API após as correções realizadas.

Foram executados **18 casos de teste**, contemplando cenários positivos e negativos.

---

## 🖥️ Ambiente de Testes

| Item | Configuração |
|---|---|
| Sistema Operacional | Windows |
| Ambiente de desenvolvimento | Visual Studio Code |
| Backend | Node.js |
| Framework | Express |
| Ferramenta de testes | Postman |
| Método HTTP | POST |
| Endpoint | `/register` |
| URL local | `http://localhost:3000/register` |
| Formato dos dados | JSON |

---

## 📋 Regras Funcionais

### RF-API-001 — Campos obrigatórios

Todos os campos necessários para o cadastro devem ser informados.

### RF-API-002 — Tipo do `fullName`

O campo `fullName` deve ser informado como texto.

### RF-API-003 — `fullName` não numérico

O campo `fullName` não pode conter somente números.

### RF-API-004 — Formato do e-mail

O campo `email` deve possuir um formato válido de e-mail.

### RF-API-005 — Confirmação da senha

Os campos `password` e `confirmPassword` devem possuir valores iguais.

### RF-API-006 — Limite da senha

O campo `password` deve possuir no mínimo **4 caracteres** e no máximo **12 caracteres**.

### RF-API-007 — Caracteres permitidos na senha

O campo `password` pode conter números, letras e caracteres especiais.

### RF-API-008 — Perfil de acesso

O campo `accessProfile` deve pertencer aos perfis permitidos, como `user`, `admin` e `TI`.

### RF-API-009 — Mensagens de erro

A API deve retornar mensagens informativas quando ocorrer algum erro de validação.

---

## 🧪 Estratégia de Testes

A estratégia de testes foi estruturada de forma incremental, contemplando diferentes tipos de cenários:

1. **Cenários positivos** — validação de dados considerados válidos;
2. **Cenários negativos** — envio de dados inválidos ou fora das regras estabelecidas;
3. **Validação de campos obrigatórios**;
4. **Validação de tipos de dados**;
5. **Validação de formatos**;
6. **Análise de valores de fronteira**, principalmente nos limites da senha;
7. **Reteste dos casos que apresentaram falha**;
8. **Teste de regressão**, executando novamente todos os casos após as correções.

---

## 🧪 Execução dos Testes

A execução dos testes foi realizada utilizando o Postman, com o objetivo de validar o comportamento da API `POST /register` de acordo com as regras funcionais definidas.

Foram executados inicialmente **18 casos de teste**, contemplando cenários positivos, negativos, validações de campos, tipos de dados, limites de senha e perfis de acesso.

### 📊 Resultado Inicial

| Resultado | Quantidade | Percentual |
|---|---:|---:|
| 🟢 PASS | 10 | 55,56% |
| 🔴 FAIL | 8 | 44,44% |
| ⚪ BLOCK | 0 | 0% |
| **Total** | **18** | **100%** |

A execução inicial identificou **8 casos de teste com falha**, indicando comportamentos da API que não estavam de acordo com as regras funcionais estabelecidas.

### 🔴 Casos que apresentaram falha

| Caso de Teste | Regra Funcional | Problema Identificado |
|---|---|---|
| TC-API-011 | RF-API-003 | `fullName` aceitava somente números |
| TC-API-012 | RF-API-004 | `email` aceitava formato inválido |
| TC-API-013 | RF-API-006 | `password` com menos de 4 caracteres era aceita |
| TC-API-014 | RF-API-002 | `fullName` aceitava valores do tipo NUMBER |
| TC-API-015 | RF-API-004 | `email` aceitava valores do tipo NUMBER |
| TC-API-016 | RF-API-006 / RF-API-007 | `password` e `confirmPassword` aceitavam valores do tipo NUMBER |
| TC-API-017 | RF-API-006 | `password` com 3 caracteres era aceita |
| TC-API-018 | RF-API-006 | `password` com 13 caracteres era aceita |

Os comportamentos identificados foram registrados no Bug Report para posterior correção e reteste.

---

## 🐛 Bugs Encontrados

Durante a execução inicial, **8 casos de teste apresentaram FAIL**.

Entretanto, esses casos de teste não representam necessariamente 8 bugs distintos. Após a análise dos resultados, foram identificados **6 bugs/comportamentos defeituosos**, pois alguns casos de teste estavam relacionados ao mesmo defeito funcional.

### BUG-002 — E-mail em formato inválido

**Caso relacionado:** TC-API-012  
**Regra:** RF-API-004

A API aceitava endereços de e-mail em formato inválido quando deveria rejeitá-los.

---

### BUG-003 — `fullName` informado como número

**Caso relacionado:** TC-API-014  
**Regra:** RF-API-002

A API aceitava o campo `fullName` informado como um valor do tipo NUMBER, contrariando a regra de que o nome deve ser informado como texto.

---

### BUG-004 — `email` informado como número

**Caso relacionado:** TC-API-015  
**Regra:** RF-API-004

A API aceitava o campo `email` informado como um valor do tipo NUMBER, quando deveria rejeitar a entrada.

---

### BUG-005 — `password` informada como número

**Caso relacionado:** TC-API-016  
**Regras:** RF-API-006 / RF-API-007

A API aceitava `password` e `confirmPassword` informados como valores do tipo NUMBER, quando deveriam ser tratados como texto.

---

### BUG-006 — Validação dos limites da `password`

**Casos relacionados:** TC-API-013, TC-API-017 e TC-API-018  
**Regra:** RF-API-006

A API não validava corretamente os limites mínimo e máximo definidos para a senha.

Foram identificados os seguintes cenários:

- **TC-API-013** — senha com 3 caracteres (`123`);
- **TC-API-017** — senha com 3 caracteres (`123`);
- **TC-API-018** — senha com 13 caracteres (`1234567890123`).

Os três casos verificam a mesma regra funcional, RF-API-006, e foram classificados como um único bug funcional: **BUG-006**.

---

### BUG-007 — `fullName` somente numérico

**Caso relacionado:** TC-API-011  
**Regra:** RF-API-003

A API aceitava um `fullName` composto somente por números, quando deveria rejeitar esse tipo de entrada.

---

## 🔧 Correções e Retestes

Após a execução inicial dos testes, foram identificados **8 casos com falha**. Os problemas encontrados foram analisados e as validações correspondentes foram implementadas no arquivo `server.js`.

As correções realizadas contemplaram:

- Validação do tipo de `fullName`;
- Validação de `fullName` não numérico;
- Validação do formato do `email`;
- Validação do tipo do `email`;
- Validação do tipo de `password` e `confirmPassword`;
- Validação do limite mínimo e máximo da senha;
- Validação dos perfis permitidos em `accessProfile`.

Após a implementação das correções, os casos que apresentaram falha foram executados novamente para verificar se os comportamentos esperados haviam sido restaurados.

### 🔄 Resultado dos Retestes

| Caso de Teste | Problema | Resultado após correção |
|---|---|---|
| TC-API-011 | `fullName` somente numérico | 🟢 PASS — API retornou `400` e mensagem de validação |
| TC-API-012 | `email` com formato inválido | 🟢 PASS — API retornou `400` e mensagem de formato inválido |
| TC-API-013 | Senha abaixo de 4 caracteres | 🟢 PASS — API retornou `400` e mensagem sobre limite da senha |
| TC-API-014 | `fullName` como NUMBER | 🟢 PASS — API retornou `400` e informou que o nome deve ser texto |
| TC-API-015 | `email` como NUMBER | 🟢 PASS — API retornou `400` e informou que o e-mail deve ser texto em formato válido |
| TC-API-016 | `password` como NUMBER | 🟢 PASS — API retornou `400` e informou que a senha deve ser texto |
| TC-API-017 | Senha com 3 caracteres | 🟢 PASS — API retornou `400` e informou o limite de 4 a 12 caracteres |
| TC-API-018 | Senha com 13 caracteres | 🟢 PASS — API retornou `400` e informou o limite de 4 a 12 caracteres |

### 📊 Resultado após as Correções

Após a execução dos retestes, todos os 8 casos anteriormente reprovados apresentaram o comportamento esperado.

| Resultado | Quantidade | Percentual |
|---|---:|---:|
| 🟢 PASS | 18 | 100% |
| 🔴 FAIL | 0 | 0% |
| ⚪ BLOCK | 0 | 0% |
| **Total** | **18** | **100%** |

### ✅ Conclusão dos Retestes

Os 8 casos de teste que apresentaram falha na execução inicial foram corrigidos e posteriormente aprovados nos retestes.

O resultado foi de **18/18 casos de teste aprovados**, representando **100% de aprovação** e **0% de falhas** após as correções.

Os bugs identificados durante a execução inicial foram considerados corrigidos e validados por meio dos respectivos retestes.

---

## 🖼️ Evidências de Testes

As evidências abaixo registram os comportamentos identificados durante a execução inicial dos testes da API `/register`.

Durante a execução inicial, **8 casos de teste apresentaram FAIL**. Após as correções implementadas, todos os casos afetados foram retestados e posteriormente aprovados.

> **Importante:** 8 casos de teste apresentaram falha inicialmente, porém foram identificados **6 bugs/comportamentos defeituosos distintos**, considerando que alguns casos de teste podem estar relacionados ao mesmo defeito.

### 📸 Evidências dos Bugs Encontrados

| **BUG-API-002** | TC-API-012 | E-mail em formato inválido aceito pela API | [`BUG-002_TC-API-012_email-formato-invalido.png`](../evidencias/BUG-002_TC-API-012_email-formato-invalido.png) |
| **BUG-API-003** | TC-API-014 | `fullName` informado como número aceito pela API | [`BUG-003_TC-API-014_fullName-tipo-number.png`](../evidencias/BUG-003_TC-API-014_fullName-tipo-number.png) |
| **BUG-API-004** | TC-API-015 | `email` informado como número aceito pela API | [`BUG-004_TC-API-015_email-tipo-number.png`](../evidencias/BUG-004_TC-API-015_email-tipo-number.png) |
| **BUG-API-005** | TC-API-016 | `password` informado como número aceito pela API | [`BUG-005_TC-API-016_password-tipo-number.png`](../evidencias/BUG-005_TC-API-016_password-tipo-number.png) |
| **BUG-API-006** | TC-API-013, TC-API-017 e TC-API-018 | Validação dos limites mínimo e máximo de caracteres da password | [`Evidência – limite mínimo`](../evidencias/BUG-006_TC-API-018_password-abaixo-maximo.png) / [`Evidência – limite máximo`](../evidencias/BUG-006_TC-API-018_password-acima-maximo.png) |
| **BUG-API-007** | TC-API-011 | `fullName` contendo somente números aceito pela API | [`BUG-007_TC-API-011_fullName-somente-numerico.png`](../evidencias/BUG-007_TC-API-011_fullName-somente-numerico.png) |

### 🔎 Observação sobre o BUG-006

O **BUG-006** está relacionado à validação dos limites de caracteres da `password` e foi identificado em diferentes casos de teste que verificavam a mesma regra funcional (**RF-API-006**).

Os casos relacionados foram:

- **TC-API-013** — Senha abaixo do limite mínimo, utilizando `123` (3 caracteres);
- **TC-API-017** — Password com 3 caracteres, utilizando `123`;
- **TC-API-018** — Password acima do limite máximo, utilizando `1234567890123` (13 caracteres).

Embora existam **três casos de teste relacionados à mesma regra funcional**, eles representam **um único bug funcional**, o BUG-006.

Por esse motivo, existem duas evidências visuais associadas ao BUG-006: uma demonstrando a violação do limite mínimo e outra demonstrando a violação do limite máximo.

### 📊 Resumo das Evidências

- **8 casos de teste:** FAIL na execução inicial;
- **6 bugs/comportamentos defeituosos:** identificados;
- **7 arquivos de evidência:** registrados;
- **18/18 casos:** aprovados após as correções e retestes;
- **18/18 casos:** aprovados na regressão;
- **Resultado final:** **100% PASS**.

---

## 🔄 Teste de Regressão

Após a conclusão dos retestes, foi realizada uma **regressão completa**, executando novamente os 18 casos de teste.

O objetivo foi verificar se as correções implementadas não introduziram novos problemas nas funcionalidades que anteriormente apresentavam comportamento esperado.

### 📊 Resultado da Regressão

| Resultado | Quantidade | Percentual |
|---|---:|---:|
| 🟢 PASS | 18 | 100% |
| 🔴 FAIL | 0 | 0% |
| ⚪ BLOCK | 0 | 0% |
| **Total** | **18** | **100%** |

Todos os **18 casos de teste foram aprovados** na regressão.

Nenhuma nova falha foi identificada após as correções.

> **Regressão concluída com sucesso: 18/18 PASS — 100% de aprovação.**

---

## 📊 Resultado Final

Após a execução inicial dos testes, foram identificados **8 casos de teste com resultado FAIL**, relacionados a comportamentos de validação que não estavam sendo tratados corretamente pela API.

Os problemas identificados foram analisados, corrigidos e posteriormente submetidos a retestes.

### 📈 Evolução dos Resultados

| Etapa | PASS | FAIL | BLOCK | Total | Aprovação |
|---|---:|---:|---:|---:|---:|
| Execução inicial | 10 | 8 | 0 | 18 | 55,56% |
| Retestes após correções | 18 | 0 | 0 | 18 | 100% |
| Teste de regressão | 18 | 0 | 0 | 18 | 100% |

### Execução Inicial

Na primeira execução foram realizados **18 casos de teste**, dos quais:

- **10 casos foram aprovados (PASS);**
- **8 casos apresentaram falha (FAIL);**
- **0 casos foram bloqueados (BLOCK).**

Os casos que apresentaram falha estavam relacionados principalmente à validação dos tipos e formatos dos dados recebidos pela API, além das regras de limite de caracteres da senha.

### Correções e Retestes

Após a identificação dos problemas, foram realizadas as correções necessárias na API.

Os **8 casos que apresentaram FAIL na execução inicial foram novamente executados**, e todos apresentaram o comportamento esperado após as correções.

Resultado dos retestes:

**18/18 PASS — 100% de aprovação.**

### Teste de Regressão

Após a conclusão dos retestes, foi realizada uma **regressão completa**, executando novamente os 18 casos de teste.

Todos os casos foram aprovados:

**18/18 PASS — 0 FAIL — 0 BLOCK.**

Nenhuma regressão foi identificada.

### 🏆 Resultado Consolidado

Ao final do ciclo de testes, correções, retestes e regressão, a API `/register` apresentou:

- **18 casos de teste executados;**
- **18 casos aprovados;**
- **0 casos reprovados;**
- **0 casos bloqueados;**
- **100% de aprovação na regressão.**

> **Resultado final: 18/18 casos de teste aprovados — 100% PASS.**

---

## 🏁 Conclusão

O projeto de QA da API `/register` foi concluído com sucesso.

Durante a execução inicial, foram identificados **8 casos de teste que apresentaram FAIL**, permitindo encontrar comportamentos inadequados relacionados às validações dos dados recebidos pela API.

Após a análise dos resultados, os problemas foram corrigidos e os casos afetados foram submetidos a retestes. Todos os casos apresentaram o comportamento esperado após as correções.

Em seguida, foi realizada uma **regressão completa dos 18 casos de teste**, com o objetivo de garantir que as alterações realizadas não causassem impactos negativos em funcionalidades que anteriormente estavam funcionando corretamente.

A regressão foi concluída com **18/18 casos aprovados, 0 FAIL e 0 BLOCK**, resultando em **100% de aprovação**.

O projeto também conta com documentação das regras funcionais, estratégia de testes, casos de teste, registro dos bugs encontrados, evidências das falhas identificadas, correções, retestes e resultados da regressão.

### 🏆 Resultado Final

**18/18 testes aprovados — 100% PASS.**

Com a conclusão da regressão e a validação de todos os cenários previstos no escopo, a API `/register` encontra-se **aprovada para o encerramento deste ciclo de testes**.

Este projeto demonstra a aplicação prática de um ciclo de QA envolvendo:

**Planejamento → Execução → Identificação de Bugs → Correção → Reteste → Regressão → Resultado Final.**