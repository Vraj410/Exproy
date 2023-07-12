import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter";

export const pineconeUpsert = async (pinecone, pineconeIndex, documents) => {

    const index = pinecone.Index(pineconeIndex);

    // ITERATE THROUGH EACH DOCUMENT HERE

    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000 // subject to change (going higher may create problems with LLM token limits)
        // maybe there's a way to split into chunks with a paragraph delimeter?
    });

    const chunks = await textSplitter.createDocuments(/* pass in the pageContent from the documents */);

    // embed each chunk
    const embeddings = await new OpenAIEmbeddings().embedDocuments(/* can pass in a function to remove new line characters. otherwise pass in the chunk*/); 


    // UPSERT TO PINECONE
        // batches of 100 is optimal

    // END DOCUMENT ITERATION

};