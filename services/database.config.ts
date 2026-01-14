
/**
 * DATABASE CONFIGURATION LOGIC
 * This service handles data persistence. In a real-world scenario, 
 * this would connect via an ORM or Driver based on the DB_TYPE variable.
 */

export enum DatabaseType {
  MONGODB = 'mongodb',
  POSTGRES = 'postgresql',
  MYSQL = 'mysql',
  LOCALSTORAGE = 'localstorage' // Default for demo/browser environments
}

interface DBConfig {
  type: DatabaseType;
  uri: string;
}

export const getDBConfig = (): DBConfig => {
  return {
    // These environment variables should be set in your production environment
    type: (process.env.DB_TYPE as DatabaseType) || DatabaseType.LOCALSTORAGE,
    uri: process.env.DB_CONNECTION_STRING || ''
  };
};

export const saveToDatabase = async (collection: string, data: any): Promise<boolean> => {
  const config = getDBConfig();
  console.log(`[DB] Attempting to save to ${config.type} in collection: ${collection}`);
  
  // MOCK LOGIC for different DBs
  try {
    if (config.type === DatabaseType.LOCALSTORAGE) {
      const existing = JSON.parse(localStorage.getItem(collection) || '[]');
      existing.push({ ...data, id: Date.now() });
      localStorage.setItem(collection, JSON.stringify(existing));
      return true;
    }
    
    // Example of how you'd extend this:
    // if (config.type === DatabaseType.MONGODB) {
    //   const client = await MongoClient.connect(config.uri);
    //   await client.db().collection(collection).insertOne(data);
    // }

    return true;
  } catch (error) {
    console.error("Database Save Error:", error);
    return false;
  }
};
