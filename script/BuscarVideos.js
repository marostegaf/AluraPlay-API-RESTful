import { conectaAPI } from "./ConectaAPI.js";
import construirCard from "./MostrarVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault();

    const dadosDeBusca = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.buscarVideo(dadosDeBusca);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        construirCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)
    ))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeo com essa Busca.</h2>`
    }

}
    
const botaoDeBusca = document.querySelector("[data-botao-pesquisa]");

botaoDeBusca.addEventListener("click", evento => buscaVideo(evento));
