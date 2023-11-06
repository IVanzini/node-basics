import { Post } from "./post";
import axios from "axios";

export const getPosts = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts");
}

export const getPostsGestioneErrore = async (): Promise<Post[] | undefined> => {
    try {
        let res: Response = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await res.json() as Post[];
    } catch (err) {
        console.error(err);
        return undefined;
    }
}

export const getPostsGestioneErroreAxios = async (): Promise<Post[] | undefined> => {
    try {
        return (await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")).data;
    } catch (err) {
        console.error(err);
        return undefined;
    }
}