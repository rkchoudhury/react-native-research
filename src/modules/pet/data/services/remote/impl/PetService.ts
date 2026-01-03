import { injectable } from 'inversify';
// import 'react-native-url-polyfill/auto';

import { Pet, PetStatusEnum } from '@api/index';
import { petApi } from '@src/api';
import { IPetService } from '../IPetApiService';

@injectable()
export class PetService implements IPetService {
    async fetchPetByStatus(): Promise<Pet[]> {
        try {
            const response = await petApi.findPetsByStatus([PetStatusEnum.Available]);
            return response.data as Pet[];
        } catch (error) {
            console.error('Failed to fetch data:', error);
            throw error;
        }
    }
}
