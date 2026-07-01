// config express
import express from 'express'
import { getdata } from './controladores.js';
import { usuariosFicticios } from './basedatos.js';

const PORT = 3000;
const app = express();

app.get("/users", getdata)
app.listen(PORT,() => {
    console.log(`✅ Server running on port ${PORT}`)
})

// get
// post
// put
// delete

// inicializar puerto