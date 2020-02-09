const express = require ('express');
    app = express();
    path = require('path');

    app.use(express.static(path.join(__dirname,'/public')));

    cookieParser = require('cookie-parser'), 
    cookieSession = require('cookie-session'); 

    app.use(cookieParser());
    app.use(cookieSession({secret: "soy una cookie"}));


    app.route('/').get((peticion,respuesta)=>{ 
        peticion.session.visitashome || (peticion.session.visitashome = 0);
    let home = peticion.session.visitashome++
    console.log("home" + " " + home);
        respuesta.sendFile(`${__dirname}/views/index.html`);

    })

    
    app.route('/horror').get((peticion,respuesta)=>{ 
        peticion.session.visitashorror || (peticion.session.visitashorror = 0);
    let horror = peticion.session.visitashorror++
    console.log("horror" + " " + horror );
        respuesta.sendFile(`${__dirname}/views/horror.html`);

    })

    app.route('/suspenso').get((peticion,respuesta)=>{ 
        peticion.session.visitasuspenso || (peticion.session.visitasuspenso = 0);
    let suspenso = peticion.session.visitasuspenso++
    console.log("suspenso" + " " + suspenso );
        respuesta.sendFile(`${__dirname}/views/suspenso.html`);

    })

    

    app.route('/horror').get((peticion,respuesta)=>{ 
        respuesta.sendFile(`${__dirname}/views/horror.html`);
        
    })

    app.route('/suspenso').get((peticion,respuesta)=>{ 
        respuesta.sendFile(`${__dirname}/views/suspenso.html`);
        
    })



    app.route('/busqueda/?').get((peticion, respuesta) => {

        if (peticion.query.nombre == "horror") {
    
            respuesta.sendFile(`${__dirname}/views/horror.html`);
    
        }  else if (peticion.query.nombre == "suspenso") {
    
            respuesta.sendFile(`${__dirname}/views/suspenso.html`);
    
        }
        else { respuesta.sendFile(`${__dirname}/views/error.html`);
            }
        
    });


  
app.listen(8080);
console.log('Funcional!!');
