import { injectable } from 'inversify';
import { IGetPetUseCase } from '../IGetPetUseCase';
import type { IPetRepository } from '@src/modules/pet/data/repositoty/IPetRepository';
import { Pet } from '../../models/Pet';

@injectable()
export class GetPetUseCase implements IGetPetUseCase {
  private readonly _petRepository: IPetRepository;

  constructor(petRepository: IPetRepository) {
    this._petRepository = petRepository;
  }

  async getPetByStatus(): Promise<Pet[]> {
    return await this._petRepository.getPetByStatus();
  }
}
