const Express = require("express");
const App = Express();
const port = 80;


const Pokemons = require('json-pokemon');
const chalk = require('chalk');

const cors = require("cors");
App.use(cors());

App.use("/",Express.static("client/build"));



App.get("/id/:id",(req,res)=>{
    let result = {"error": "No pokemon found! Try another id."
    }
    Pokemons.forEach((value)=>{
        if(value.id == req.params.id){
            result = value;
            console.log(chalk.green(req.path));
        }
    });
    res.json(result);
    console.log(chalk.red(req.path));

});

App.get("/name/:name",(req,res)=>{
    let result = {"error": "No pokemon found! Try another name."
    }
    Pokemons.forEach((value)=>{
        if(value.name == req.params.name){
            result = value;
            console.log(chalk.green(req.path));
        }
    });
    res.json(result);
    console.log(chalk.red(req.path));

});

App.listen(port, () => {
    console.log("Server running!");
});


