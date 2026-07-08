// config express
import express from 'express'
import { getData, postData, putData } from '../controladores.js';
import { usuariosFicticios } from './basedatos.js';

const PORT = 3000;
const app = express();
app.use(express.json());

app.get("/users", getData)
app.post("/users", postData)
app.put("/users/:id", putData)

app.listen(PORT,() => {
    console.log(`✅ Server running on port ${PORT}`)
})
