function validarFormulario() {
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const erroEmail = document.getElementById("erroEmail");
  const erroTelefone = document.getElementById("erroTelefone");
  const msgSucesso = document.getElementById("mensagemSucesso");

  erroEmail.textContent = "";
  erroTelefone.textContent = "";
  msgSucesso.textContent = "";

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

  let valido = true;

  if (!regexEmail.test(email)) {
    erroEmail.textContent = "Por favor, insira um e-mail válido (ex: usuario@dominio.com).";
    valido = false;
  }

  if (!regexTelefone.test(telefone)) {
    erroTelefone.textContent = "Telefone inválido (ex: (11) 91234-5678).";
    valido = false;
  }

  if (valido) {
    msgSucesso.textContent = "Formulário enviado com sucesso!";
    document.getElementById("formContato").reset();
  }

  return false; // Impede envio real
}
