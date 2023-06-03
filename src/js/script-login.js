// Obtendo o usuario e senha
//
const form = document.querySelector("form[class='FormLogin']");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
const btnEntrar = document.querySelector("input[value='Entrar']");

usuariosRegistrados = [
    {
        "usuario":"Admin",
        "senha":"123456"
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
    usuarioEncontrado = false
    for(let i = 0; i < usuariosRegistrados.length; i++){
        if(usuariosRegistrados[i].usuario == usuario && usuariosRegistrados[i].senha == senha){
            usuarioEncontrado = true;
            break;
        }
    }
    if (usuarioEncontrado) {
        alert("Login efetuado com sucesso!");
        // Mude de pagina apos 2 segundos
        setTimeout(() => {
            window.location.href = "../index.html";
        }, 2000);
    } else {
        alert("Usuário ou senha inválidos!");
    }
});




