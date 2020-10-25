const resultado = (informacao) => {
    const div = document.getElementById("resultado"); 
    div.insertAdjacentHTML("afterbegin", `<div>Estado: ${informacao.estado}</div>`);
    div.insertAdjacentHTML("afterbegin", `<div>Cidade: ${informacao.cidade}</div>`);
    if (informacao.logradouro != undefined) {
        div.insertAdjacentHTML("afterbegin", `<div>Logradouro: ${informacao.logradouro}</div>`);
        div.insertAdjacentHTML("afterbegin", `<div>Bairro: ${informacao.bairro}</div>`);
        div.insertAdjacentHTML("afterbegin", `<div>Complemento: ${informacao.complemento}</div>`);
    }
}

const iniciar = () => {
    const botao = document.querySelector("button");
    const click = async (e) => {
        e.preventDefault();
        const cep = document.getElementById("cep").value;
        try {
            const response = await fetch(`https://api.postmon.com.br/v1/cep/${cep}`);
            if (response.ok) {
                const result = await response.json();
                resultado(result);
            } else {
                throw new error(`Erro: ${response.statusText}`);
            } 
        } catch(error) {
            alert(`Erro: ${error.message}`);
        }
    }
    botao.addEventListener("click", click);
}
 
document.addEventListener("DOMContentLoaded", iniciar);