// Obtendo o usuario e senha
//
const form = document.querySelector("form[class='formLogin']");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
const btnEntrar = document.querySelector("input[value='Entrar']");

usuariosRegistrados = [
    {
        "usuario":"Admin",
        "senha":"123456",
        "nome":"Administrador",
        "Avatar":"./img/AvatarADM.png" // Endereço referente ao caminho partindo da index
    }
]


localStorage.setItem("Usuarios",JSON.stringify(usuariosRegistrados));

// Prevenindo
form.addEventListener("submit", (e) => {
    e.preventDefault();
}
);
// Validando o usuario e senha
btnEntrar.addEventListener("click", () => {
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    const usuariosRegistrados = JSON.parse(localStorage.getItem("Usuarios"));
    usuarioEncontrado = false // Variável para identificar se o usuario é válido 
    usuarioLogado = null // Variável para armazenar o usuario se o o login for validado
    for(let i = 0; i < usuariosRegistrados.length; i++){
        if(usuariosRegistrados[i].usuario == usuario && usuariosRegistrados[i].senha == senha){
            usuarioEncontrado = true;
            usuarioLogado = {
                "usuario":usuariosRegistrados[i].usuario,
                "nome":usuariosRegistrados[i].nome,
                "Avatar":usuariosRegistrados[i].Avatar
            };
            break;
        }
    }
    if (usuarioEncontrado) {
        alert("Login efetuado com sucesso!");

        // Adicionando usuario ao localStorage
        localStorage.setItem("UsuarioLogado",JSON.stringify(usuarioLogado));
        // Mude de pagina apos 2 segundos
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    } else {
        alert("Usuário ou senha inválidos!");
    }
});

const eye = document.querySelector("#eye");
eye.addEventListener("click", () => {
    if(eye.className == "fa fa-eye") // Revelar Senha
    {
        inputSenha.type = "password";
        eye.className = "fa fa-eye-slash";
    }
    else // Ocultar Senha
    {
        inputSenha.type = "text";
        eye.className = "fa fa-eye";
    }
})

