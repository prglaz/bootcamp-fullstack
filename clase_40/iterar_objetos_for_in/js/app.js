import { person } from "./data.js";

for (const key in person) {
    console.log(key, person[key]);

    if (key === "address") {
        for (const subKey in person[key]) {
            console.log(subKey, person[key][subKey])
        }
    }

}
