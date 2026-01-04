import { injectable } from 'inversify';
// import 'react-native-url-polyfill/auto';

import { Pet, PetStatusEnum } from '@api/index';
import { petApi } from '@src/api';
import { IPetService } from '../IPetApiService';

@injectable()
export class PetService implements IPetService {
    async fetchPetByStatus(): Promise<Pet[]> {
        try {
            console.log('Fetching pets by status...');
            const response = await petApi.findPetsByStatus([PetStatusEnum.Available]);
            console.log('API Response:', JSON.stringify(response, null, 2));
            console.log('Response data:', response.data);
            console.log('Response data length:', response.data?.length);

            // const result = await fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available');
            // const data = await result.json();
            // console.log('Fetched Pets using fetch:', data);
            // return data as Pet[];

            return response.data as Pet[];
        } catch (error) {
            console.error('Failed to fetch data:', error);
            throw error;
        }
    }
}
