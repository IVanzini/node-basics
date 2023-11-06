import process from "node:process";

export default () => {
    const processId = process.pid;
    console.log("processId: ", processId);

    console.log("current directory: ", process.cwd());
    console.log("percorso eseguibile: ", process.argv0);
    console.log("argomenti: ", process.argv);
    console.log("istruzione: ", process.argv[2]);// es lanciando questo comando: npm start generate component prova
    console.log("schematic: ", process.argv[3]);
    console.log("nome: ", process.argv[4]);

    if (process.argv[2] == "generate") {
        console.log("generazione", process.argv[3], "in corso");
    }
}