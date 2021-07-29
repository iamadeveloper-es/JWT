import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "https://reqres.in/api/";

export default {
    //Save logged user
    setUserLogged(userLogged){
        Cookies.set("userLogged", userLogged)
    },
    //Get logged user
    getUserLogged(){
        return Cookies.get("userLogged")
    },
    deleteUserLogged() {
        Cookies.remove('userLogged');
    },
    register(email, password) {
        const user = {email, password}
        return axios.post(ENDPOINT_PATH + "register", user)
    },
    login(email, password) {
        const user = {email, password}
        return axios.post(ENDPOINT_PATH + "login", user)
    }
}