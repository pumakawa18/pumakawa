import { usuariosFicticios } from './basedatos.js';

export const getData = async(req,res) => {
  res.json(usuariosFicticios);
}

export const postData = async(req, res) => {
  const {nombre, mail, contrasena} = req.body;
  const newUser = {id: usuariosFicticios.length + 1, nombre, mail, contrasena}
  console.log("User created successfully!!", {newUser})
  res.status(201).json(newUser);
}

// apapa pipipi

export const putData = async(req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = usuariosFicticios.findIndex(
    user => user.id === userId
  )
  if (userIndex === -1){
    return res.status(201).json({message: "User not found"})
  }
};

usuariosFicticios[userIndex] = {
  id: userId,
  nombre: req.body.nombre,
  mail: req.body.mail,
  contrasena: req.body.contrasena
};

res.json(usuariosFicticios[userIndex])