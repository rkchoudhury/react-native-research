import { Pet } from "../models/Pet";

export interface IGetPetUseCase {
  getPetByStatus(): Promise<Pet[]>;
}
