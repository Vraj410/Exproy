// import pinecone client
import {PineconeClient} from "@pinecone-database/pinecone";
// import directory loader?
    // text loader?
    // PDF loader?
// access dotenv
import 'dotenv/config'        //or should it be dotenv.config after using import * as dotenv from "dotenv" 


/* GET DOCUMENTS HERE */
// const documents = ____ 


// import other files
import {pineconeInit} from "./pineconeInit.js"
import { pineconeUpsert } from "./pineconeUpsert.js";

// setup pinecone client
const pinecone = new PineconeClient();
await pinecone.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
});

const pineconeIndex = "exproy";
const vectorDimensions = 1536;

/* GET USER'S QUESTION HERE */

// main function
(async () => {
    await pineconeInit(pinecone,pineconeIndex,vectorDimensions);
    await pineconeUpsert(pinecone,pineconeIndex,documents);

})();




import express from 'express';
const app = express()
import path from 'path'
import { upsertPinecone } from "./pineconeUpsert.js";

app.all('*',(req,res) => {
    res.status(404).send('<h1> Error 404, resource not found </h1>')
})

// for when the frontend has an html
//app.use(express.static('./public'))

//homepage
app.get('/', (req,res) => {
  res.status(200).send('Hello World')
  //res.sendFile(path.resolve(__dirname, '../navbar-app/index.html')) //change file path
})


app.listen(4000,() => {
  console.log('listening on port 4000...')
})

