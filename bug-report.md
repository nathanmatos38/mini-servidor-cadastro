# 🐛 BUG REPORT — API /register

## BUG-API-002 — email aceita formato inválido

**Severidade:** Alta

**Descrição:**

A API permite o cadastro utilizando um e-mail que não possui formato válido.

**Exemplo:**

```json
{
  "email": "qualquer"
}
```

**Resultado atual:**

`201 Created`

**Resultado esperado:**

A API deve rejeitar o cadastro e informar que o e-mail possui formato inválido.

**Regra violada:** RF-API-004

**Status final:** CORRIGIDO 🟢

---

## BUG-API-003 — fullName aceita tipo NUMBER

**Severidade:** Média

**Descrição:**

A API aceita `fullName` enviado como tipo numérico.

**Exemplo:**

```json
{
  "fullName": 123
}
```

**Resultado atual:**

`201 Created`

**Resultado esperado:**

A API deve rejeitar a requisição, pois `fullName` deve ser enviado como texto.

**Regra violada:** RF-API-002

**Status final:** CORRIGIDO 🟢

---

## BUG-API-004 — email aceita tipo NUMBER

**Severidade:** Alta

**Descrição:**

A API aceita o campo `email` como número, em vez de exigir um valor textual em formato válido.

**Exemplo:**

```json
{
  "email": 123456
}
```

**Resultado atual:**

`201 Created`

**Resultado esperado:**

A API deve rejeitar a requisição, pois o campo `email` deve ser um texto em formato válido.

**Regra violada:** RF-API-004

**Status final:** CORRIGIDO 🟢

---

## BUG-API-005 — password aceita tipo NUMBER

**Severidade:** Média

**Descrição:**

A API aceita `password` e `confirmPassword` como valores numéricos.

**Exemplo:**

```json
{
  "password": 123456,
  "confirmPassword": 123456
}
```

**Resultado atual:**

`201 Created`

**Resultado esperado:**

A API deve rejeitar a requisição quando `password` e `confirmPassword` forem enviados em tipo incompatível com as regras definidas.

**Regras relacionadas:** RF-API-006 / RF-API-007

**Status final:** CORRIGIDO 🟢

---

## BUG-API-006 — Password não respeita limite de 4 a 12 caracteres

**Severidade:** Alta

**Descrição:**

A API permite o cadastro de senhas que não respeitam o limite definido de 4 a 12 caracteres.

**Exemplos:**

```json
{
  "password": "123",
  "confirmPassword": "123"
}
```

E:

```json
{
  "password": "1234567890123",
  "confirmPassword": "1234567890123"
}
```

**Resultado atual:**

`201 Created`

**Resultado esperado:**

A API deve rejeitar senhas com menos de 4 ou mais de 12 caracteres e informar que a senha deve possuir entre 4 e 12 caracteres.

**Casos relacionados:** TC-API-013 / TC-API-017 / TC-API-018

**Regra violada:** RF-API-006

**Status final:** CORRIGIDO 🟢

---

## BUG-API-007 — fullName aceita somente números

**Severidade:** Média

**Descrição:**

A API aceita `fullName` enviado somente com números.

**Exemplo:**

```json
{
  "fullName": "123"
}
```

**Resultado atual:**

`201 Created`

**Resultado esperado:**

A API deve rejeitar a requisição, pois `fullName` não pode conter somente números.

**Regra violada:** RF-API-003

**Status final:** CORRIGIDO 🟢
