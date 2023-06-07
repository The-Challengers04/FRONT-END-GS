// Alerta de Seja bem-vindo
// Obtém a data e hora atual
var dataAtual = new Date();

// Formata a data e a hora
var dataFormatada = dataAtual.toLocaleDateString();
var horaFormatada = dataAtual.toLocaleTimeString();

// Cria a mensagem do alerta
var mensagem = "\nData: " + dataFormatada + "\nHora: " + horaFormatada;

// Exibe o alerta
alert("Seja bem-vindo" + mensagem);
// menuBars();
const btnMobile = document.getElementById('btn-mobile');
const link_nav = document.getElementsByClassName('link_nav');
function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Verificar se o usuário esta logado
// Se estiver deve aparece o ícone junto com seu nome em baixo
divUsuario = document.querySelector("#divUsuario");
usuarioLogado = localStorage.getItem("UsuarioLogado");
if (usuarioLogado == null) // O usuario não esta logado 
{
  //<a href="./pages/login.html">Login</a>
  btnLogin = document.createElement("a");
  btnLogin.href = "./pages/login.html";
  btnLogin.textContent = "Login";
  divUsuario.appendChild(btnLogin);
}
else // O usuario esta logado
{
  usuarioLogado = JSON.parse(usuarioLogado);
  avatarUser = document.createElement("img");
  avatarUser.src = usuarioLogado.Avatar;
  avatarUser.alt = "Avatar do usuário";
  avatarUser.name = "avatarUser"
  avatarUser.classList.add("avatar");
  nomeUser = document.createElement("label");
  nomeUser.textContent = usuarioLogado.nome;
  nomeUser.for = avatarUser.name
  divUsuario.appendChild(avatarUser);
  divUsuario.appendChild(nomeUser);
}


// ==================== CARROSSEL =========================
// Localizando elementos do HTML
const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");
const imgCarrossel = document.querySelector("#carrosselImgElement");
const legendaImagemCarrossel = document.querySelector("#legendaCarrossel");

// Definindo os valores das imagens e legendas
const imagens = [
  [
    "./img/img-projeto.jpg",
    "Imagem de uma estante com varias plantas e sensores ligados a terra juntamente com luzes em sua direção",
  ],
  [
    "./img/agroTechTower-IAGenerativeImage01.png",
    "Uma estrutura de prateleiras compostas por plantas e luzes",
  ],
  [
    "./img/ArquiteturaProjeto-imgIA01.png",
    "Um esboço da prateleira compostas de plantas",
  ],
  [
    "./img/ArquiteturaProjeto-imgIA02.png",
    "Outro esboço da prateleira compostas de plantas",
  ],
]; // Array com os nomes das imagens
const legendas = [
  "Imagem ilustrativa do projeto SmartGrow",
  "Imagem gerada por uma IA Generativa sobre a estrutura do nosso projeto",
  "Um esboço do projeto gerado por uma IA Generativa de imagens",
  "Outra verão de esboço do projeto gerado pela mesma IA Generativa",
]; // Array com as legendas correspondentes

let indiceImagemAtual = 0;

function atualizarCarrossel() {
  imgCarrossel.src = imagens[indiceImagemAtual][0];
  imgCarrossel.alt = imagens[indiceImagemAtual][1];
  legendaImagemCarrossel.textContent = legendas[indiceImagemAtual];
}

function avancarImagem() {
  indiceImagemAtual++;
  if (indiceImagemAtual >= imagens.length) {
    indiceImagemAtual = 0;
  }
  atualizarCarrossel();
}

function retrocederImagem() {
  indiceImagemAtual--;
  if (indiceImagemAtual < 0) {
    indiceImagemAtual = imagens.length - 1;
  }
  atualizarCarrossel();
}

let timer;
function iniciarCarrosselAutomatico() {
  timer = setInterval(avancarImagem, 5000); // Avança a imagem a cada 5 segundos
}

function pararCarrosselAutomatico() {
  clearInterval(timer); // Para o temporizador
}

setaDireita.addEventListener("click", () => {
  pararCarrosselAutomatico();
  avancarImagem();
  iniciarCarrosselAutomatico();
  // Dessa forma ele vai alterar a imagem do carrossel manualmente e reinicia o tempo para a alteração automática
});

setaEsquerda.addEventListener("click", () => {
  pararCarrosselAutomatico();
  retrocederImagem();
  iniciarCarrosselAutomatico();
  // Dessa forma ele vai alterar a imagem do carrossel manualmente e reinicia o tempo para a alteração automática
});

// Inicialização do carrossel
atualizarCarrossel();
iniciarCarrosselAutomatico();

// ===========================================================

// =============== VALIDANDO FORMULáRIO DE RECADO =====================
// recuperando inputs do Formulario Recado
const form = document.querySelector("form[class='colorful-form']");
const nomeInput = document.querySelector("#inputNome");
const emailInput = document.querySelector("#inputEmail");
const phoneInput = document.querySelector("#inputPhone");
const mensagemInput = document.querySelector("#inputMensagem");
const btnEnviarRecado = document.querySelector("#btnEnviarRecado");

// Recuperando spans de mensagem de erro
spanNome = document.querySelector("#errorName");
spanEmail = document.querySelector("#errorEmail");
spanPhone = document.querySelector("#errorPhone");
spanMensagem = document.querySelector("#errorMensagem");


// Prevenindo
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validando Telefone
var phoneLength = 11; // Limite de 11 dígitos
phoneInput.addEventListener("input", function (e) {
  var value = e.target.value;
  value = value.replace(/\D/g, ""); // Remove todos os caracteres não numéricos

  if (value.length > phoneLength) {
    value = value.slice(0, phoneLength); // Limita a quantidade de caracteres
  }

  value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Adiciona parênteses e espaço após os primeiros dois dígitos
  value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona hífen após os próximos cinco dígitos

  e.target.value = value;
});

nomeInput.addEventListener("blur",()=>{
    if(nomeInput.value.trim() == "" || !nomeInput.value)
    {
        spanNome.innerText = "nome não pode ser nulo!!";
    }
});
nomeInput.addEventListener("keydown", () => {
  spanNome.innerText = "";
});


emailInput.addEventListener("blur",()=>{
    if(emailInput.value.trim() == "")
    {
        spanEmail.innerText = "email não pode ser nulo!!";
    }
    else if (!emailRegex.test(emailInput.value)) {
        spanEmail.innerText = "email Inválido";
    }
});
emailInput.addEventListener("keydown", () => {
  spanEmail.innerText = "";
});

phoneInput.addEventListener("blur",()=>{
    if(phoneInput.value.trim() == "")
    {
        spanPhone.innerText = "telefone não pode ser nulo!!";
    }
    else if (phoneInput.value.length < phoneLength) {
        spanPhone.innerText = "telefone Inválido";
    }
});
phoneInput.addEventListener("keydown", () => {
  spanPhone.innerText = "";
});

mensagemInput.addEventListener("blur",()=>{
    if(mensagemInput.value.trim() == "")
    {
        spanMensagem.innerText = "mensagem não pode ser nula!!";
    }
});
mensagemInput.addEventListener("keydown", () => {
  spanMensagem.innerText = "";
});


btnEnviarRecado.addEventListener("click", function () {
    camposVazios = "";
    valid = true;
    if (!nomeInput.value || nomeInput.value.trim() == "") {
        camposVazios += "- NOME\n";
        valid = false;
        spanNome.innerText = "nome não pode ser nulo!!"
    }

    if (!emailInput.value || emailInput.value.trim() == "") {
        camposVazios += "- EMAIL\n";
        valid = false;
        spanEmail.innerText = "email não pode ser nulo!!"
    }else if (!emailRegex.test(emailInput.value)) {
        alert("Por favor, insira um email válido.");
        valid = false;
        spanEmail.innerText = "email Inválido"
    }

    if (!phoneInput.value || phoneInput.value.trim() == "") {
        camposVazios += "- TELEFONE\n";
        valid = false;
        spanPhone.innerText = "telefone não pode ser nulo!!"
    } else if (phoneInput.value.length < phoneLength) {
        alert("Telefone invalido!");
        valid = false;
        spanPhone.innerText = "telefone Inválido"
    }

    if (!mensagemInput.value || mensagemInput.value.trim() == "") {
        camposVazios += "- MENSAGEM\n";
        valid = false;
        spanMensagem.innerText = "mensagem não pode ser nula!!"
    }

    if (camposVazios.length > 0) {

        alert("Os campos não podem ser vazios!!\nPreencha o(s) campo(s):\n" + camposVazios);
    }
    if(valid)
    {
        // //Envia o recado (EXEMPLO)
        /*
        let recado = {
            nome: nomeInput.value,
            email: emailInput.value,
            telefone: phoneInput.value,
            mensagem: mensagemInput.value
        };

        fetch("www.smartgrow.com.br/recados/receberAPI",{
            method: "POST",
            body: recado
        });
        */

        alert("Recado enviado!!\nObrigado pela sua opinião :)");
        nomeInput.value = ""
        emailInput.value = ""
        phoneInput.value = ""
        mensagemInput.value = ""

    }
    // ...
});

// DARK MODE
const darkModeBtn = document.getElementById("darkModeBtn");
const body = document.body;

const container01 = document.getElementById('oque')


darkModeBtn.addEventListener("click", function () {
  // Alterar a cor de fundo da pagina
  body.classList.toggle("dark-mode");

  darkModeBtn.classList.toggle("dark-mode");
  
  // Atualizar o texto do botão com base no modo atual
  if (body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = 'Modo Claro';
  } else {
    darkModeBtn.textContent = 'Modo Escuro';
  }
});
