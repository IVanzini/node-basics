import { User } from "./user";
import axios from "axios";

   // 1. creare un modulo con una funzione export default 
    // 2. fare richiesta http get a https://jsonplaceholder.typicode.com/users per recuperare il json
    // 3. salvare in data/users.json gli users di cui sopra

export default () => {
    const getUsers = async (): Promise<void> => {
        try {
            const dati = (await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")).data;
            
            if (dati) {
                console.log(dati);
            }
        } catch (err) {
            console.error(err);
            return undefined;
        }
    }
    getUsers();
}