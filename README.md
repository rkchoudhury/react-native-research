# Clean Architecture with MVVM Patterns

## Architecture Overview
The application follows `Clean Architecture` with `MVVM` pattern using:

- Dependency Injection (InversifyJS)
- Redux Toolkit (for state management)
- Redux Thunk (for async operations)

## Step 1: Open API Generator - Generate API Client directory for the external APIs

### Introduction

- The `openapi-generator-cli` is a command-line interface tool used to automatically generate API client libraries (SDKs)
- It automates the creation of boilerplate code for interacting with an API, saving significant development time.

### Steps to setup

- Run the below command directly without installating the `@openapitools/openapi-generator-cli` package
- Before generating open api related files, replace your `SWAGGER` JOSN file

    ```sh
    # Swagger file path - example:'https://petstore.swagger.io/v2/swagger.json'
    SWAGGER_FILE=<YOUR_SWAGGER.JSON> 

    npx openapi-generator-cli generate -i $SWAGGER_FILE -g typescript-axios -o api_client --additional-properties=apiPackage=api,modelPackage=model,withSeparateModelsAndApi=true
    ```

- The above command will generate API related files inside the `api_client` directory.
- It will generate typescript files along with axios for the data fetching.

- Install `axios` for data fetching

    ```sh
    npm install axios

    Or

    yarn add axios
    ```

### Usage

1. Inside `api.ts` under `src`, import API class from generated files and make an instance.

    ```js
    import { PetApi, UserApi } from 'api_client/api';

    const petApi = new PetApi();
    const userApi = new UserApi();

    export { petApi, userApi };
    ```

2. Use the APIs in your component or redux level

    ```js
    import { userApi } from 'api';

    const fetchedUser = await userApi.getUserById(id);
    ```

## Step 2: Dependency injection - Using inversify

### Introduction

- InversifyJS is a tool that helps JavaScript developers write code with good OO design that adheres to the SOLID principles.

### Installation

- Install `inversify` and `reflect-metadata` npm packages

    ```sh
    npm install inversify reflect-metadata --save

    or 

    yarn add inversify reflect-metadata
    ```

### Setup

- Do the following `tsconfig.json` file changes

    ```js
    {
        "compilerOptions": {
            "target": "es5",
            "lib": ["es6"], // Add this
            "types": ["reflect-metadata"], // Add this
            "module": "commonjs",
            "moduleResolution": "node",
            "experimentalDecorators": true, // Add this
            "emitDecoratorMetadata": true // Add this
        }
    }
    ```

### Usages

1. Wraps

## Step 3: PerService

## Step 4:

- react-native-url-polyfill: 
    - react-native-url-polyfill/auto provides the URL and URLSearchParams APIs that aren't fully implemented in React Native's JavaScript engines (like Hermes or JSC). Some networking libraries depend on these APIs.
    - The polyfill only needs to be imported once at app startup.
    - The api-client axios is not working

- babel-plugin-module-resolver
    - Used for resolving the import paths

- babel-plugin-transform-typescript-metadata
    <!-- - To resolve the injectable error -->

- @babel/plugin-proposal-decorators
    - To resolve the injectable error