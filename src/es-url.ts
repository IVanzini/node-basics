import { URL, URLSearchParams } from "node:url";

export default () => {
    const urlString = "https://www.example.com/cucina?query=123&sort=ascending";
    const parsedUrl = new URL(urlString);
    console.log("host: ", parsedUrl.hostname);
    console.log("path: ", parsedUrl.pathname);
    console.log("query: ", parsedUrl.searchParams.get("query"));
    console.log("sort: ", parsedUrl.searchParams.get("sort"));

    const baseUrl = "https://www.amazon.com";
    const path = "/products";
    const queryString = {
        category: "electronics",
        page: "1"
    };
    const constructedUrl = new URL(path, baseUrl);
    constructedUrl.search = new URLSearchParams(queryString).toString();
    console.log(constructedUrl.href);
}