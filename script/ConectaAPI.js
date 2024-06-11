async function listarVideos() {
    const respostaDaAPI = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await respostaDaAPI.json();

    return conexaoConvertida
}

async function criarVideo(titulo, descricao, url, imagem) {
    const respostaDaAPI = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })

    if(!respostaDaAPI.ok) {
        throw new Error("Não foi possível enviar o vídeo")
    }

    const conexaoConvertida = await respostaDaAPI.json();
    return conexaoConvertida;
}

async function buscarVideo(palavraDeBusca) {
    const respostaDaAPI = await fetch(`http://localhost:3000/videos?q=${palavraDeBusca}`);
    const conexaoConvertida = await respostaDaAPI.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    listarVideos,
    criarVideo,
    buscarVideo
}

