//definindo pacotes
const express = require('express');
const session = require('express-session'); //manipulador de sessoes
const bodyParser = require('body-parser')

const port = 3000;
const path = require('path'); //manipular e setar diretorio das minhas views
const app = express(); //utilizado para definir rotas e outras funcionalidades q o express vai utilizar

//variaveis para teste
let email = '123@123'
let password = '123123'

app.use(session({ secret: 'coisaaleatoria' })) //a sessão precisa ter uma chave secreta, e nesse momento essa chave pode ser qualquer coisa
app.use(bodyParser.urlencoded({ extended: true })); //consigo recuperar dados do formulario no metodo post

app.engine('html', require('ejs').renderFile);
app.set('view_engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.post('/', (req, res) => {
    if (req.body.password == password && req.body.email == email) {
        //logado né
        req.session.email = email;
        // res.redirect('/');
        res.render('logado.html')
    } else {
        res.render('index.html');
    }
});

app.get('/', (req, res) => {
    if (req.session.email) {
        res.render('logado.html');
        console.log('o meu usuario logado é' + req.session.email)
    } else {
        res.render('index.html');
    }
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})