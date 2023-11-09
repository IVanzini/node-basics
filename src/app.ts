import { getPosts, getPostsGestioneErrore } from "./richieste";
import operazione, { somma, sottrazione } from "./matematica";//operazione è la funzione esportata di default
import * as mate from "./matematica";
import path from "node:path";
import process from "node:process";
// setInterval(() => {

//     console.clear();
//     console.log(new Date().toLocaleTimeString());
// }, 1000);

//console.log(getPosts());

//then
//se dopo ci sono delle istruzioni (una log in questo caso) le esegue, non si ferma ad aspettare il risultato della promise
const getPostsSync = () => {
    getPosts()
        .then(res => {
            //console.log(res.body);
            console.log(res.status);
            res.json()
                .then(dati => {
                    console.log(dati[0]);
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    console.log("finito");
}

const getPostsSync2 = () => {
    getPosts()
        .then(res => {
            console.log(res.status);
            return res.json();
        })
        .then(dati => {
            console.log(dati[0]);
        })
        .catch(err => console.log(err));
    console.log("FINITO");
}
//getPostsSync();


//async/await
//se dopo ci sono delle istruzioni (una log in questo caso) si ferma ed aspetta il risultato della promise prima di eseguirle
const getPostsAsync = async () => {
    try {
        let res: Response = await getPosts();
        console.log(res.status);
        let dati = await res.json();
        console.log(dati[0]);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("finito");
    }
}
//getPostsAsync();

async function getPostsAsyncGestioneErrore() {
    let dati = await getPostsGestioneErrore();

    if (dati) {
        console.log(dati[0]);
    }

    console.log("finito");
}

//getPostsAsyncGestioneErrore();

// import/export moduli custom
// console.log(mate.somma(4,9));
// console.log(sottrazione(4,5));
// console.log(operazione(4,9));

// globals: moduli già presenti, non vanno installati
import * as myOs from "./es-os";
myOs.logUserName();
myOs.logUserHomeDir();
myOs.logHostName();

console.log("=====");
import myPath from "./es-path";
myPath();

console.log("=====");
import myUrl from "./es-url";
myUrl();

console.log("=====");
import myProcess from "./es-process";
myProcess();

console.log("=====");
import runFsExamples from "./es-fs";
runFsExamples();

console.log("=====only users====");
import printUsers from "./users";
printUsers();

console.log("=====users and others=====");
import { salvaJson } from "./json-manager";
let dataDir = path.join(process.cwd(), "data");

let promises = [];
promises.push(salvaJson(path.join(dataDir, "users.json"), "https://jsonplaceholder.typicode.com/users"));
promises.push(salvaJson(path.join(dataDir, "posts.json"), "https://jsonplaceholder.typicode.com/posts"));
promises.push(salvaJson(path.join(dataDir, "albums.json"), "https://jsonplaceholder.typicode.com/albums"));
promises.push(salvaJson(path.join(dataDir, "prodotti.json"), "https://dummyjson.com/products"));

Promise.all(promises).then(() => console.log("FINITO TUTTO"));

