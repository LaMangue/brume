let express = require('express');
let enchantclick = require('./fonction');
let app = express();
var session = require('express-session')



app.set('view engine','ejs');
app.set('trust proxy', 1) // trust first proxy

app.use('/assets', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: 'mangue',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', (request, response) => {

    response.render('pages/index', {test:'index'})
})

app.get('/Races' , (request,response)=>{

    console.log("listening Races"); 
    tests = 2
    response.render('pages/Races',)

})

app.get('/Royaumes' , (request,response)=>{

    console.log("listening Royaumes"); 
    tests = 2
    response.render('pages/Royaumes',)

})

app.get('/Premier_Dieux' , (request,response)=>{

    console.log("listening Premier_Dieux"); 
    tests = 2
    response.render('pages/Premier_Dieux',)

})

app.get('/Guildes' , (request,response)=>{

    console.log("listening Guildes"); 
    tests = 2
    response.render('pages/Guildes',)

})

app.get('/Dieux_Dechus' , (request,response)=>{

    console.log("listening Dieux_Dechus"); 
    tests = 2
    response.render('pages/Dieux_Dechus',)

})

app.get('/Dieux' , (request,response)=>{

    console.log("listening Dieux"); 
    tests = 2
    response.render('pages/Dieux',)

})

app.get('/transcandes' , (request,response)=>{

    console.log("listening transcandes"); 
    tests = 2
    response.render('pages/transcandes',)

})

app.get('/Naissance_du_monde_erudit' , (request,response)=>{

    console.log("listening Naissance_du_monde_erudit"); 
    tests = 2
    response.render('pages/Naissance_du_monde_erudit',)

})

app.get('/test', (request, response)=>{

    enchantclick(request, response)
})

app.listen(8080, () => {
    console.log("listening to http://localhost:8080");
});

