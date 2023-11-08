import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { DateTime } from "luxon";
import chalk from "chalk";

export default () => {
    const workDir = process.cwd();
    const dataDir = "data";
    const libraryPath = process.argv[2] ?? "";
    // async
    // fs.readFile("./data/file2.txt", "utf8", (err, data) => {
    //     console.log("file letto");

    //     if (err) {
    //         console.error("errore nella lettura del file: ", err);
    //     } else {
    //         console.log(data);
    //     }
    // });
    // console.log("finito!");

    // sync
    // lettura di un file di testo
    try {
        const data = fs.readFileSync(path.join(workDir, dataDir, "file2.txt"), "utf8");
        console.log(data);
    } catch (err) {
        console.error("errore nella lettura del file: ", err);
    } finally {
        console.log("finito!");
    }

    // scrittura file di testo
    const contenuto = "Questo è il testo da scrivere sul file.\n" + new Date().toLocaleTimeString();
    try {
        fs.writeFileSync(path.join(workDir, dataDir, "file.txt"), contenuto, "utf-8");//se il file non esiste viene creato; c'è anche l'appendFileSync
        console.log("scrittura eseguita con successo");
    } catch (err) {
        console.error("errore nella scrittura del file: ", err);
    }

    // rinominare un file
    try {
        fs.renameSync(path.join(workDir, dataDir, "file.txt"), path.join(workDir, dataDir, "data.txt"));
        console.log("rinomina eseguita con successo");
    } catch (err) {
        console.error("errore nella rinomina del file: ", err);
    }

    // eliminare un file
    try {
        fs.unlinkSync(path.join(workDir, dataDir, "data.txt"));
        console.log("eliminazione eseguita con successo");
    } catch (err) {
        console.error("errore nell'eliminazione del file: ", err);
    }

    // lettura dir impostata o meno come parametro
    try {
        const entities = fs.readdirSync(path.join(workDir, "node_modules", libraryPath), { withFileTypes: true });
        console.log("contenuto cartella: ", libraryPath != "" ? libraryPath : "node_modules");
        for (const entity of entities) {
            console.log(entity.isDirectory() ? "[D]" : "[F]", entity.name);
        }
    } catch (err) {
        console.error("errore lettura dir: ", err);
    }

    // statistiche entita (file/cartella)
    try {
        const entity = fs.statSync(path.join(workDir, dataDir, "file2.txt"));
        if (entity.isFile()) {
            console.log("il percorso corrisponde ad un file");
        } else {
            console.log("il percorso corrisponde ad una cartella");
        }
        const dataUltimaModifica = DateTime.fromMillis(entity.mtimeMs);
        //console.log(chalk.yellow("data ultima modifica"), chalk.red(dataUltimaModifica.toLocaleString()), chalk.green(dataUltimaModifica.toISOTime()));
    } catch (err) {
        console.error("errore nelle statistiche del file: ", err);
    }

    // esistenza di entita
    console.log("esiste file2 txt?", fs.existsSync(path.join(workDir, dataDir, "file2.txt")));

}