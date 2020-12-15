// jest.config.ts
import  {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {

    verbose: true,
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "testEnvironment": "jsdom"

};
export default config;

// Or async function
/*
export  async (): Promise<Config.InitialOptions> => {
    return {
        verbose: true,
    };
};*/
