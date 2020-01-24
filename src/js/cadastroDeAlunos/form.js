

const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const matricula = document.querySelector('#matricula')
    const nome = document.querySelector('#nome');


    if (matricula.value.trim().length === 0 || nome.value.trim().length === 0) {
        alert("escreva");
    } else {
        if (confirm("Quer mesmo salvar?")) {
            salvarAluno();
        }
    }

    matricula.value = "";
    nome.value = "";

})


