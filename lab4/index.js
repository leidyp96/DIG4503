const Express = require("express");
const App = Express();
const port = 80;

const Pokemons = require("./Pokemons.js");
const Pokemons = require('json-pokemon');
const chalk = require('chalk');



App.get("/id/:id",(req,res)=>{
    Pokemons.forEach((value)=>{
        if(value.id == req.params.id){
            res.send(chalk.green(value));
        }
    });
    res.send(chalk.red("ID does not exist!"))
});

App.get("/name/:name",(req,res)=>{
    Pokemons.forEach((value)=>{
        if(value.name == req.params.name){
            res.send(value);
        }
    });
    res.send(chalk.red("Name does not exist!"))
});

App.listen(port, () => {
    console.log("Server running!");
});


