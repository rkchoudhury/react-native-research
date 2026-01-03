import { inject, decorate } from 'inversify';
import { InjectContainer } from './core';

import { PET_TYPES } from '../types/types';
// import { IPetRepository } from '../modules/sub-module1/data/repository/IPetRepository';
// import PetRepository from '../modules/sub-module1/data/repository/impl/PetRepository';
// import { GetPetUseCase } from '../modules/sub-module1/domain/usecase/impl/GetPetUseCase';
// import { IGetPetUseCase } from '../modules/sub-module1/domain/usecase/IGetPetUseCase';
// import { IGetPetStoreUseCase } from '../modules/sub-module1/domain/usecase';
// import { GetPetStoreUseCase } from '../modules/sub-module1/domain/usecase/impl/GetPetStoreUseCase';
import { PetService } from '@src/modules/pet/data/services/remote/impl/PetService';
import { IPetService } from '@src/modules/pet/data/services/remote/IPetApiService';

//Binding

/**
 * InjectContainer: is an instance of Container, which is the IoC container provided by InversifyJS.
 */

/**
 * This binding tells the container that whenever someone
 * asks for an IPetRepository, it should provide an instance of PetRepository and so on.
 */
// InjectContainer.bind<IPetRepository>(PET_TYPES.IPetRepository).to(PetRepository);
InjectContainer.bind<IPetService>(PET_TYPES.IPetService).to(PetService);
// InjectContainer.bind<IGetPetUseCase>(PET_TYPES.IGetPetUseCase).to(GetPetUseCase);
// InjectContainer.bind<IGetPetStoreUseCase>(PET_TYPES.IPetStoreUseCase).to(GetPetStoreUseCase);

/**
 * Decorators (@injectable(), @inject()):  decorators provide essential
 * type information and injection instructions to InversifyJS.
 * They annotate classes and their dependencies, allowing the IoC
 * container (Container in InversifyJS) to manage and inject dependencies automatically.
 */
// decorate(inject(PET_TYPES.IPetRepository), GetPetUseCase, 0);
// decorate(inject(PET_TYPES.IPetService), PetRepository, 0);

export { InjectContainer };
