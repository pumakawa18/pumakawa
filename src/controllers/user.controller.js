import { getAllUsers, createUser } from "../services/user.service.js";

export const getData = async (req, rest) => {
    try {
        const users = await getAllUsers();
        rest.json(users);
    } catch (error) {
        rest.status(500).json({ message: "Error to obtain users "});
    }
};

export const postData = async (req, rest) => {
    try {
        const newUser = await createUser(req.body);

        console.log("User created successfully!!", {newUser});
        rest.status(201).json(newUser);
    } catch (error) {
        rest.status(500).json({ message: "Error to create user"});
    }
};