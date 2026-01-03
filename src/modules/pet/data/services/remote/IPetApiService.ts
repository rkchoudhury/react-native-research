import { Pet } from '@api/index';

export interface IPetService {
  fetchPetByStatus(): Promise<Pet[]>;
}
