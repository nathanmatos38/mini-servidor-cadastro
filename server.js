// server.js

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = process.env.PORT || 3000;

const SECRET = "segredo_super_secreto";

app.use(bodyParser.json());

let users = [];

app.post("/register", (req, res) => {
  const { fullName, email, password, confirmPassword, accessProfile } = req.body;

  // RF-API-001 — Todos os campos são obrigatórios
  if (!fullName || !email || !password || !confirmPassword || !accessProfile) {
    return res.status(400).json({
      message: "Todos os campos são obrigatórios"
    });
  }

  // RF-API-002 — fullName deve ser texto
  if (typeof fullName !== "string") {
    return res.status(400).json({
      message: "O nome deve ser um texto"
    });
  }

  // RF-API-003 — fullName não pode conter somente números
  if (/^\d+$/.test(fullName.trim())) {
    return res.status(400).json({
      message: "O nome não pode conter somente números"
    });
  }

  // RF-API-004 — email deve possuir formato válido
  if (typeof email !== "string") {
    return res.status(400).json({
      message: "O e-mail deve ser um texto em formato válido"
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "O e-mail possui formato inválido"
    });
  }

  // RF-API-006 / RF-API-007 — password deve ser texto e possuir entre 4 e 12 caracteres
  if (
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    return res.status(400).json({
      message: "A senha deve ser um texto"
    });
  }

  if (password.length < 4 || password.length > 12) {
    return res.status(400).json({
      message: "A senha deve possuir entre 4 e 12 caracteres"
    });
  }

  // RF-API-005 — password e confirmPassword devem ser iguais
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "As senhas não conferem"
    });
  }

  // RF-API-008 — accessProfile deve pertencer aos perfis permitidos
  const allowedProfiles = ["user", "admin", "TI"];

  if (!allowedProfiles.includes(accessProfile)) {
    return res.status(400).json({
      message: "Perfil de acesso inválido"
    });
  }

  // Verificação de usuário duplicado
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    return res.status(400).json({
      message: "O usuário já está cadastrado"
    });
  }

  const newUser = {
    fullName,
    email,
    password,
    accessProfile
  };

  users.push(newUser);

  const token = jwt.sign(
    { email, accessProfile },
    SECRET,
    { expiresIn: "1h" }
  );

  return res.status(201).json({
    message: "Usuário cadastrado com sucesso",
    token: token
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});