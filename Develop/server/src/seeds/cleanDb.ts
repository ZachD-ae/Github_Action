import models from '../models/index.js';
import db from '../config/connection.js';

export default async (modelName: "Question", collectionName: string) => {
  try {
    // Check if the model exists before attempting to access it
    const model = models[modelName];
    if (model) {
      let modelExists = await model.db.db.listCollections({
        name: collectionName
      }).toArray();

      if (modelExists.length) {
        await db.dropCollection(collectionName);
      }
    } else {
      throw new Error(`Model ${modelName} not found.`);
    }
  } catch (err) {
    throw err;
  }
}
