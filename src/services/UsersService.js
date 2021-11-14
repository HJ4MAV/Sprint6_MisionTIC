import axios from "axios";

const usersUrl = "https://peaceful-peak-03211.herokuapp.com/usuarios"; 
export const createUser = async (user) => {
    return await axios.post(`${usersUrl}/`, user);
}