const express= require ('express')
const nunjucks = require('nunjucks')
const server = express()

const videos = require("./data")

server.use(express.static('public'))


server.set("view engine","njk")
//primeiro informa o caminho e dps as opções (formato de obj)
nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noCache: true
})

server.get("/", function (req,res) {
    const about = {
        avatar_url:"https://uploaddeimagens.com.br/images/002/724/530/full/perfi1.jpg?1592950330",
        name: "Diego Arend",
        role:"Desenvolvedor Full-stack",
        links: [
            {name:"Github", url: "https://github.com/Diegoarend"},
            {name:"Linkedin", url: "https://www.linkedin.com/in/diegoarend/"},
            
        ],

    }

    //responde o get com a renderizaçãoda index
    return res.render("about", {about})

})



server.get("/tutoriais", function (req,res) {
    //responde o get com a renderizaçãoda dos tutoriais
    //envia um obj com a propriedade items recebendo video
    return res.render("tutoriais", {items:videos})

})

server.get("/conteudo", function (req,res) {
    //responde o get com a renderizaçãoda conteudo
    return res.render("conteudo")

})

server.listen(5000,function(){
    console.log("Server is running")
})