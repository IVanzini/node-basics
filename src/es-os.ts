import os from "node:os";

export const logUserName = () => {
    console.log(os.userInfo().username);
}

export const logUserHomeDir = () => {
    console.log(os.homedir());
}

export const logHostName = () => {
    console.log(os.hostname());
}