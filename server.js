let express = require('express');
let enchantclick = require('./fonction');
let app = express();
var session = require('express-session')



app.set('view engine','ejs');


app.use('/assets', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'mangue',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))



app.get('/', (request, response) => {

    response.render('pages/index', {test:'index'})
})

app.get('/generateur.1' , (request,response)=>{

    //if(request.session.error){
        //response.locals.eror = request.session.error;
        //request.session.error = undefined;
   // }

    console.log("listening generateur"); 
    tests = 2
    response.render('pages/generateur1',)

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





app.post('/generateur.1', (request, response)=>{

    if(request.body.enchant === undefined || request.body.enchant === ''){

        response.redirect('/generateur.1')

        // response.render('pages/generateur1', {error:"Vous n'avez pas défini la quantité :c"})
        //console.log("Vous n'avez pas défini la quantité :c")
        // tests = " "
    }
    if(request.body.enchant < 10 || request.body.enchant > 1 ){
        response.render('pages/generateur1', {succes:"enchantement !"})
        console.log("Il faut un nombre entier entre 1 et 10")
        tests = "1"
    }

})

app.post('/Races', (request, response)=>{ 

    response.redirect('/Races')

})

app.post('/Royaumes', (request, response)=>{

    response.redirect('/Royaumes')

})

app.post('/Premier_Dieux', (request, response)=>{

    response.redirect('/Premier_Dieux')

})
app.post('/Dieux_Dechus', (request, response)=>{

    response.redirect('/Dieux_Dechus')

})

app.post('/Dieux', (request, response)=>{

    response.redirect('/Dieux')

})

app.post('/transcandes', (request, response)=>{

    response.redirect('/transcandes')

})

app.post('/Guildes', (request, response)=>{

    response.redirect('/Guildes')

})

app.post('/Naissance_du_monde_erudit', (request, response)=>{

    response.redirect('/Naissance_du_monde_erudit')

})



app.listen(8080, () => {
    console.log("listening to http://localhost:8080");
});

