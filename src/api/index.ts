// import 'react-native-url-polyfill/auto';
import { PetApi, UserApi } from '../../api_client';

// Importing the PetApi and UserApi classes from the specified file path '../../api_client/api'.
// Instead of PetApi and UserApi it can be any other API related class.
// import { PetApi, UserApi } from '../../api_client/api';

// Creating a new instance of the PetApi class.
const petApi = new PetApi();

// Creating a new instance of the UserApi class.
const userApi = new UserApi();

// Exporting the instances of PetApi and UserApi for use in other parts of the application.
export { petApi, userApi };
