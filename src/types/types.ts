/**
 * 'Symbol.for':  creates symbols that can be used to represent services or repositories in application.
 * It is mainly use JS to define and identify services, dependencies, or keys without the risk of name collisions.
 */
const ACCOUNT_TYPES = {
  IAccountRepository: Symbol.for('IAccountRepository'),
  IAccountDetailsRepository: Symbol.for('IAccountDetailsRepository'),
  IAccountBalanceRepository: Symbol.for('IAccountBalanceRepository'),

  IAccountDetailsService: Symbol.for('IAccountDetailsService'),
  IAccountBalanceService: Symbol.for('IAccountBalanceService'),
  IAccountService: Symbol.for('IAccountService'),

  IFetchAccountUseCase: Symbol.for('IFetchAccountUseCase'),
  IFetchAccountDetailsUseCase: Symbol.for('IFetchAccountDetailsUseCase'),
  IFetchAccountBalanceUseCase: Symbol.for('IFetchAccountBalanceUseCase'),

  IGreetingService: Symbol.for('IGreetingService'),
  IMyAccountService: Symbol.for('IMyAccountService'),
};

const PET_TYPES = {
  IPetRepository: Symbol.for('IPetRepository'),

  IPetService: Symbol.for('IPetService'),

  IGetPetUseCase: Symbol.for('IGetPetUseCase'),
  IPetViewModel: Symbol.for('IPetViewModel'),
  IPetStoreUseCase: Symbol.for('IPetStoreUseCase'),
};

export { ACCOUNT_TYPES, PET_TYPES };
