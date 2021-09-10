import { ConnectionOptions as TypeORMConnectionOptions } from 'typeorm';
interface SeedingOptions {
  factories: string[];
  seeds: string[];
}
export declare type ConnectionOptions = TypeORMConnectionOptions & SeedingOptions;
export interface ConfigureOption {
  root?: string;
  configName?: string;
  connection?: string;
}
export declare const getConnectionOptions: () => Promise<ConnectionOptions>;
export {};
