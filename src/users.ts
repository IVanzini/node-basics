import { User } from "./user";
import axios from "axios";
import process from "node:process";
import path from "node:path";
import fs from "node:fs";

   // 1. creare un modulo con una funzione export default 
    // 2. fare richiesta http get a https://jsonplaceholder.typicode.com/users per recuperare il json
    // 3. salvare in data/users.json gli users di cui sopra

export default () => {
    const workDir = process.cwd();
    const dataDir = path.join(workDir, "data");
    
    const printUsersSuFile = async (): Promise<void> => {
        try {
            const dati = (await axios.get<User[]>("https://jsonplaceholder.typicode.com/users")).data;
            
            if (dati) {
                //console.log(dati);
                try {
                    fs.writeFileSync(path.join(dataDir, "users.json"), JSON.stringify(dati, null, 4));
                    console.log("scrittura users su file eseguita con successo");
                } catch (err) {
                    console.error("errore nella scrittura del file: ", err);
                }
            }
        } catch (err) {
            console.error(err);
        }
    }
    printUsersSuFile();
       

}