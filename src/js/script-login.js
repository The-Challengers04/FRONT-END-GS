// Obtendo o usuario e senha
//
const form = document.querySelector("form[class='formLogin']");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#senha");
const btnEntrar = document.querySelector("input[value='Entrar']");


// Prevenindo
form.addEventListener("submit", (e) => {
    e.preventDefault();
}
);
// Validando o usuario e senha
btnEntrar.addEventListener("click", () => {
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    
    if(usuario === "Admin" && senha == "123456"){
        alert("Login efetuado com sucesso!");
        // Mude de pagina apos 1 segundos
        setTimeout(() => {
            window.location.href = "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
        }, 1000);
    }
    else {
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

