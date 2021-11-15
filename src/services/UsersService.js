import axios from "axios";

const usersUrl = "https://sprint6misiontic.herokuapp.com/usuarios"; 
export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}