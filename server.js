import http from "http";

const PORT = 3000;

const routes = {
    "/": "Curso de Node.js",
    "/livros": "Rota de Livros",
    "/autores": "Rota de autores"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    })
    res.end(routes[req.url])
})

server.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`)
})