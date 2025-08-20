
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

  if (!fullName || !email || !password || !confirmPassword || !accessProfile) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "As senhas não conferem" });
  }

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "O usuário já está cadastrado" });
  }

  const newUser = { fullName, email, password, accessProfile };
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
