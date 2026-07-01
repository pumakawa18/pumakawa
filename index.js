// config express
import express from 'express'
import { getdata, postdata, putdata } from './controladores.js';
import { usuariosFicticios } from './basedatos.js';

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/users", getdata)
app.post("/users", postdata)
app.put("/users/:id", putdata)

app.listen(PORT,() => {
    console.log(`✅ Server running on port ${PORT}`)
})

// put
// delete
