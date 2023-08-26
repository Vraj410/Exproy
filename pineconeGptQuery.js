import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {OpenAI} from "langchain/llms/openai";
import {loadQAStuffChain} from "langchain/chains";
import {Document} from "langchain/document";

export const pineconeLLMQuery = async (pinecone, pineconeIndexName, prompt) => {

    const index = pinecone.index(pineconeIndexName);

    const embedQuery = await new OpenAIEmbeddings().embedQuery(prompt);

    let response = await pinecone.query({
        queryRequest: {
            topK: 10, // return 10 most relevant embeddings
            vector: embedQuery,
            includeMetadata: true,
            includeValues: true,
        },
    });

    if (response.matches.length) { // found matches 

        const llm = new OpenAI(); // need {} inside parentheses?
        const chain = loadQAStuffChain(llm);

        const returnedPageContent = response.matches.map((match) => {
            match.metadata.pageContent
        }).join(" ");

        const result = await chain.call({
            input_documents: [new Document({pageContent: returnedPageContent})],
            question: prompt,
        });

        console.log(result.text); 




    } else {
        // no matches returned
        console.log('No matches returned'); // tell the user there are not matches
    }
 
}