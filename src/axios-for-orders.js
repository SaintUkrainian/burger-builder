import axios from "axios";

const instance = axios.create({
    baseURL: "https://steel-sequencer-288911.firebaseio.com/",
    
});


export default instance;