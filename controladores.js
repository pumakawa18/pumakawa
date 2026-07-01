import { usuariosFicticios } from './basedatos.js';
export const getdata = async(req,res) => {
  res.json(usuariosFicticios);
}