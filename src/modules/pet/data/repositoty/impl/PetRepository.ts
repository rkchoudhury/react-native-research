import { injectable } from 'inversify';
import { Pet } from '@api/index';
import type { IPetService } from '../../services/remote/IPetApiService';
import { IPetRepository } from '../IPetRepository';

@injectable()
class PetRepository implements IPetRepository {
  private readonly _apiService: IPetService;

  constructor(petProvider: IPetService) {
    this._apiService = petProvider;
  }

  async getPetByStatus(): Promise<Pet[]> {
    return await this._apiService.fetchPetByStatus();
  }
}

export default PetRepository;
