import { getPosts } from "./richieste";
// setInterval(() => {

//     console.clear();
//     console.log(new Date().toLocaleTimeString());
// }, 1000);

//console.log(getPosts());

//then
//se dopo ci sono delle istruzioni (una log in questo caso) le esegue, non si ferma ad aspettare il risultato della promise
const getPostsSync = () => {
    getPosts().then(res => {
        //console.log(res.body);
        console.log(res.status);
        res.json().then(dati => {
            console.log(dati[0]);
        })
    });
    console.log("finito");
}
//getPostsSync();


//async/await
//se dopo ci sono delle istruzioni (una log in questo caso) si ferma ed aspetta il risultato della promise prima di eseguirle
const getPostsAsync = async () => {
    let res: Response = await getPosts();
    console.log(res.status);
    let dati = await res.json();
    console.log(dati[0]);
    console.log("finito");
}
getPostsAsync();

