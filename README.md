# Clean Architecture with MVVM Patterns

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

