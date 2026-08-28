# 🧪 CASOS DE TESTE — API /register

## 🟢 TESTES APROVADOS

### TC-API-001 — Cadastro com dados válidos

**Objetivo:**
Validar o cadastro utilizando dados válidos.

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "nathan.teste@email.com",
  "password": "123456",
  "confirmPassword": "123456",
  "accessProfile": "user"
}
```

**Resultado esperado:**

* Cadastro realizado.
* Status `201 Created`.
* Retorno de mensagem de sucesso.
* Retorno de token JWT.

**Resultado obtido:**
Cadastro realizado com sucesso.

**Status:** 🟢 PASS

---

### TC-API-002 — Campo obrigatório ausente

**Objetivo:**
Validar a obrigatoriedade dos campos.

**Condição:**
Remover um dos campos obrigatórios.

**Resultado esperado:**

* Cadastro rejeitado.
* Status `400 Bad Request`.
* Mensagem informando que todos os campos são obrigatórios.

**Resultado obtido:**
API retornou `400` e a mensagem esperada.

**Status:** 🟢 PASS

**RF:** RF-API-001 / RF-API-009

---

### TC-API-003 — Senhas diferentes

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "teste@email.com",
  "password": "123456",
  "confirmPassword": "654321",
  "accessProfile": "user"
}
```

**Resultado esperado:**

* Cadastro rejeitado.
* Status `400`.
* Mensagem informando que as senhas não conferem.

**Resultado obtido:**
`400` + `"As senhas não conferem"`.

**Status:** 🟢 PASS

**RF:** RF-API-005 / RF-API-009

---

### TC-API-004 — Usuário duplicado

**Condição:**
Tentar cadastrar novamente um e-mail já utilizado.

**Resultado esperado:**

* Cadastro rejeitado.
* Status `400`.
* Mensagem informando que o usuário já está cadastrado.

**Resultado obtido:**
`400` + mensagem esperada.

**Status:** 🟢 PASS

---

### TC-API-005 — Password com exatamente 4 caracteres

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "testeemail2@hotmail.com",
  "password": "1234",
  "confirmPassword": "1234",
  "accessProfile": "user"
}
```

**Resultado esperado:**

* Cadastro aceito.
* Status `201`.

**Resultado obtido:**
`201` + `"Cadastro com sucesso"`.

**Status:** 🟢 PASS

**RF:** RF-API-006

---

### TC-API-006 — Password com exatamente 12 caracteres

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "testemail@hotmail.com",
  "password": "123456789012",
  "confirmPassword": "123456789012",
  "accessProfile": "user"
}
```

**Resultado esperado:**

* Cadastro aceito.
* Status `201`.

**Resultado obtido:**
`201` + `"Cadastro com sucesso"`.

**Status:** 🟢 PASS

**RF:** RF-API-006

---

### TC-API-007 — Body vazio

**Dados:**

```json
{}
```

**Resultado esperado:**

* Status `400`.
* Mensagem indicando campos obrigatórios.

**Resultado obtido:**

* `400`
* `"Todos os campos são obrigatórios"`

**Status:** 🟢 PASS

**RF:** RF-API-001 / RF-API-009

---

### TC-API-008 — Password com letras, números e caracteres especiais

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "tipo34@gmail.com",
  "password": "abc@1234",
  "confirmPassword": "abc@1234",
  "accessProfile": "user"
}
```

**Resultado esperado:**
Cadastro aceito.

**Resultado obtido:**
API aceitou.

**Status:** 🟢 PASS

**RF:** RF-API-007

---

### TC-API-009 — accessProfile com entrada admin

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "nathan.teste1@email.com",
  "password": "123456",
  "confirmPassword": "123456",
  "accessProfile": "admin"
}
```

**Resultado esperado:**
Cadastro aceito.

**Resultado obtido:**
API aceitou.

**Status:** 🟢 PASS

**RF:** RF-API-008

---

### TC-API-010 — accessProfile com entrada TI

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "nathan.teste3@email.com",
  "password": "123456",
  "confirmPassword": "123456",
  "accessProfile": "TI"
}
```

**Resultado esperado:**
Cadastro aceito.

**Resultado obtido:**
API aceitou.

**Status:** 🟢 PASS

**RF:** RF-API-008

---

# 🔴 TESTES QUE ENCONTRARAM PROBLEMAS

### TC-API-011 — fullName somente numérico

**Dados:**

```json
{
  "fullName": "123",
  "email": "teste@gmail.com",
  "password": "123456",
  "confirmPassword": "123456",
  "accessProfile": "user"
}
```

**Resultado esperado:**
Cadastro rejeitado.

**Resultado obtido:**
API aceitou. Status `201`.

**Status:** 🔴 FAIL

**RF:** RF-API-003

---

### TC-API-012 — E-mail em formato inválido

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "qualquer",
  "password": "123456",
  "confirmPassword": "123456",
  "accessProfile": "user"
}
```

**Resultado esperado:**

* Cadastro rejeitado.
* Mensagem de erro.

**Resultado obtido:**
API aceitou. Status `201`.

**Status:** 🔴 FAIL

**RF:** RF-API-004

---

### TC-API-013 — Senha abaixo do limite mínimo

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "senha-curta@email.com",
  "password": "123",
  "confirmPassword": "123",
  "accessProfile": "user"
}
```

**Resultado esperado:**
Cadastro rejeitado.
Senha deve possuir no mínimo 4 caracteres.

**Resultado obtido:**
API aceita senha abaixo de 4 caracteres.

**Status:** 🔴 FAIL

**RF:** RF-API-006

> Antes este caso estava como "sem regra". Agora, com a RF-API-006, podemos oficialmente classificá-lo como FAIL.

---

### TC-API-014 — fullName como número

**Dados:**

```json
{
  "fullName": 123,
  "email": "tipo2@gmail.com",
  "password": "123456",
  "confirmPassword": "123456",
  "accessProfile": "user"
}
```

**Resultado esperado:**

* Cadastro rejeitado.
* `fullName` deve ser texto.

**Resultado obtido:**
API aceitou. Status `201`.

**Status:** 🔴 FAIL

**RF:** RF-API-002

---

### TC-API-015 — email como número

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": 123456,
  "password": "123456",
  "confirmPassword": "123456",
  "accessProfile": "user"
}
```

**Resultado esperado:**

* Cadastro rejeitado.
* E-mail deve ser um texto em formato válido.

**Resultado obtido:**
API aceitou.

**Status:** 🔴 FAIL

**RF:** RF-API-004

---

### TC-API-016 — password como número

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "tipo3@gmail.com",
  "password": 123456,
  "confirmPassword": 123456,
  "accessProfile": "user"
}
```

**Resultado esperado:**
Cadastro rejeitado, pois `password` deve ser tratado como texto e obedecer às regras de caracteres.

**Resultado obtido:**
API aceitou.

**Status:** 🔴 FAIL

**RF:** RF-API-006 / RF-API-007

---

### TC-API-017 — Password com 3 caracteres

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "tipo345@gmail.com",
  "password": "123",
  "confirmPassword": "123",
  "accessProfile": "user"
}
```

**Resultado esperado:**
Cadastro rejeitado, pois a senha possui menos de 4 caracteres.

**Resultado obtido:**
API aceitou.

**Status:** 🔴 FAIL

**RF:** RF-API-006

---

### TC-API-018 — Password com 13 caracteres

**Dados:**

```json
{
  "fullName": "Nathan Teste",
  "email": "tipo34@gmail.com",
  "password": "1234567890123",
  "confirmPassword": "1234567890123",
  "accessProfile": "user"
}
```

**Resultado esperado:**
Cadastro rejeitado, pois excede o limite máximo de caracteres.

**Resultado obtido:**
API aceitou.

**Status:** 🔴 FAIL

**RF:** RF-API-006

---

# 🎯 Total

**18 casos de teste executados**

| Resultado | Quantidade | Percentual |
| --------- | ---------: | ---------: |
| 🟢 PASS   |         10 |     55,56% |
| 🔴 FAIL   |          8 |     44,44% |
| **Total**  |     **18** |   **100%** |
