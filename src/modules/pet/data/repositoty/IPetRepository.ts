import { Pet } from '@api/index';

export interface IPetRepository {
  getPetByStatus(): Promise<Pet[]>;
}
