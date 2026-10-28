import fs from 'fs' //filesystem

export async function readJSON(filepath:string)
 {
    return JSON.parse(
        fs.readFileSync(filepath,"utf-8")
    )
};