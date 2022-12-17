const express = require('express');
const cors = require('cors');
const app = express();
const conn = require("./db/conn");


app.use(cors());

app.use(express.json());

// conexão com o db
conn();

// rotas
const routes = require('./routes/router');
app.use("/api", routes);

app.listen(3000, function(){
    console.log("servidor online");
});


