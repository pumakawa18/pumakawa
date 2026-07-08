import { usuariosFicticios } from "../basedatos.js";

export const getAllUsers = async () => {
    return usuariosFicticios;
};

export const createUser = async (userData) => {
    const { nombre, email, contrasena } = userData;

    const newUser = {
        id: usuariosFicticios.length + 1,
        nombre: nombre,
        email: email,
        contrasena: contrasena
    }
};

return newUser;




