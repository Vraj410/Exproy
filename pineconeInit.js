export const pineconeInit = async (pinecone, pineconeIndex, vectorDimensions) => {
    
    const indexesList = await pinecone.listIndexes();

    if (!indexesList.includes(pineconeIndex)) {
    
        const createRequest = {
            name: pineconeIndex,
            dimension: vectorDimensions,
            metric: "cosine"
        };
          
        await pinecone.createIndex({ createRequest }); // brackets necessary?
        // set a timeout to wait for index to be created?
    }
    
}

