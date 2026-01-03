import { useContext } from 'react';
import { ServiceIdentifier } from 'inversify';
import { InversifyContext } from '../providers/InversifyContext';

const useInjection = <T>(identifier: ServiceIdentifier<T>): T => {
  const container = useContext(InversifyContext);
  
  if (!container) {
    throw new Error(
      'Container not found in context. Make sure you are using the InversifyProvider.'
    );
  }

  return container.get<T>(identifier);
};

export default useInjection;
