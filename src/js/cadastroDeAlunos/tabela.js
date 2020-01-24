; (function () {
    "use strict"

    window.salvarAluno = function () {

        const tabela = document.getElementById("tabela")
        const linha = tabela.insertRow(-1);
        const matriculaAluno = linha.insertCell(0);
        const nomeAluno = linha.insertCell(1);
        const btnExcluir = linha.insertCell(2);
        matriculaAluno.innerHTML = matricula.value;
        nomeAluno.innerHTML = nome.value;
        btnExcluir.classList.add('excluir');
        nomeAluno.setAttribute("contentEditable", true);



        linha.addEventListener('click', function (event) {
            if (event.target.classList.contains('excluir')) {
                if (confirm("Vai apagar mesmo?")) {
                    linha.classList.add("excluir-sumindo");

                    linha.addEventListener('transitionend', function () {
                        linha.remove();
                    })

                }
            }

        })

    }
})();
