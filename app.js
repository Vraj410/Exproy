// import pinecone client
import {PineconeClient} from "@pinecone-database/pinecone";
// import directory loader?
    // text loader?
    // PDF loader?
// access dotenv
import 'dotenv/config'        //require("dotenv").config(); // maybe change?
console.log(process.env);


// import other files

// setup pinecone client
const client = new PineconeClient();
await client.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT,
});

const pineconeIndex = "exproy";
const vectorDimensions = 1536;

// following can be moved to another file if needed

const createRequest = {
    name: pineconeIndex,
    dimension: vectorDimensions,
    metric: "cosine"
};
  
await client.createIndex({ createRequest }); // brackets necessary?


// import {express} from "express"
// const app = express()
// import {path} from "path"

// app.all('*',(req,res) => {
//     res.status(404).send('<h1> Error 404, resource not found </h1>')
// })

// for when the frontend has an html
//app.use(express.static('./public'))

//homepage
// app.get('/', (req,res) => {
//   res.status(200).send('Hello World')
//   //res.sendFile(path.resolve(__dirname, '../navbar-app/index.html')) //change file path
// })


// app.listen(4000,() => {
//   console.log('listening on port 4000...')
// })