import { promises as fs } from 'fs';

export default async function handler(req, res) {
    //Find the absolute path of the json directory
    //Read the json data file data.json
    const fileContents = await fs.readFile('/productsdata.json', 'utf8');
    //Return the content of the data file in json format
    res.status(200).json({ list: JSON.parse(fileContents) });
}
