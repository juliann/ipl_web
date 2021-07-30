/// <reference types="react-scripts" />
declare global {
    namespace NodeJS {
        interface ProcessEnv {

            REACT_APP_DATA_START_YEAR:number;
            REACT_APP_DATA_END_YEAR:number;
        }
    }
}

export {};