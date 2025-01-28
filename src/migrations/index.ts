import * as migration_20250128_025933 from './20250128_025933';

export const migrations = [
  {
    up: migration_20250128_025933.up,
    down: migration_20250128_025933.down,
    name: '20250128_025933'
  },
];
