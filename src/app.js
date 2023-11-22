import express from "express"

const app = express()

app.use(express.json())

const books = [
    {
        id: 1,
        titulo: "O senhor dos anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
]

function getBook(id) {
    return books.findIndex(book => book.id === Number(id))
}

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get("/books", (req, res) => {
    res.status(200).json(books)
})

app.get("/books/:id", (req, res) => {
    const index = getBook(req.params.id)
    res.status(200).json(books[index])
})

app.post("/books", (req, res) => {
    books.push(req.body)
    res.status(201).send("Livro cadastrado com sucesso")
})

app.put("/books/:id", (req, res) => {
    const index = getBook(req.params.id)
    books[index].titulo = req.body.titulo
    res.status(200).json(books)
})

app.delete("/books/:id", (req, res) => {
    const index = getBook(req.params.id)
    books.splice(index, 1)
    res.status(200).send("Livro excluído com sucesso")
})

export default app