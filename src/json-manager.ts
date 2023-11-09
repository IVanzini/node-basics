import fs from "node:fs";

export const salvaJson = async (file: string, url: string) => {
    try {
        let res = await fetch(url);
        let json = await res.json();

        fs.writeFileSync(file, JSON.stringify(json, null, 4));
    } catch (error) {
        console.error("ERRORE GESTITO:", error);
    }
}