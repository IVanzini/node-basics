import path from "node:path";

export default () => {
    const dir = "/usr/uploads";
    const anno = "2023";
    const file = "file.txt";
    const filePath = path.join(dir, anno, file);
    console.log(filePath);

    const filePath2 ="/usr/documents/file.pdf";
    const fileName = path.basename(filePath2);
    console.log(fileName);
}