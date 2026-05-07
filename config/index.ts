import type { FormConfig } from '@/lib/types';
import broadcastersConfig from './broadcasters';
import agenciesConfig from './agencies';
import suppliersConfig from './suppliers';

// Keys must match the URL slugs: /broadcasters, /agencies, /technology-suppliers
export const formConfigs: Record<string, FormConfig> = {
  [broadcastersConfig.formType]: broadcastersConfig,
  [agenciesConfig.formType]: agenciesConfig,
  [suppliersConfig.formType]: suppliersConfig,
};
