import { inject, decorate, Container } from 'inversify';
import { PET_TYPES } from '../types/types';
import { PetService } from '@src/modules/pet/data/services/remote/impl/PetService';
import { IPetService } from '@src/modules/pet/data/services/remote/IPetApiService';
import { IGetPetUseCase } from '@src/modules/pet/domain/usecase/IGetPetUseCase';
import { GetPetUseCase } from '@src/modules/pet/domain/usecase/impl/GetPetUseCase';
import PetRepository from '@src/modules/pet/data/repositoty/impl/PetRepository';
import { IPetRepository } from '@src/modules/pet/data/repositoty/IPetRepository';

const InjectContainer = new Container();

console.log("InjectContainer Instance:", InjectContainer);

//Binding
decorate(inject(PET_TYPES.IPetRepository), GetPetUseCase, 0);
decorate(inject(PET_TYPES.IPetService), PetRepository, 0);

/**
 * InjectContainer: is an instance of Container, which is the IoC container provided by InversifyJS.
 */

/**
 * This binding tells the container that whenever someone
 * asks for an IPetRepository, it should provide an instance of PetRepository and so on.
 */
InjectContainer.bind<IPetRepository>(PET_TYPES.IPetRepository).to(PetRepository);
InjectContainer.bind<IPetService>(PET_TYPES.IPetService).to(PetService);
InjectContainer.bind<IGetPetUseCase>(PET_TYPES.IGetPetUseCase).to(GetPetUseCase);
// InjectContainer.bind<IGetPetStoreUseCase>(PET_TYPES.IPetStoreUseCase).to(GetPetStoreUseCase);

/**
 * Decorators (@injectable(), @inject()):  decorators provide essential
 * type information and injection instructions to InversifyJS.
 * They annotate classes and their dependencies, allowing the IoC
 * container (Container in InversifyJS) to manage and inject dependencies automatically.
 */
// decorate(inject(PET_TYPES.IPetRepository), GetPetUseCase, 0);
// decorate(inject(PET_TYPES.IPetService), PetRepository, 0);

console.log("InjectContainer Instance initiated:", InjectContainer);

export { InjectContainer };
