import type { Config } from '../../config/types.js';
import type { Plugin } from '../../plugin/types.js';
import { createMockMiddleware } from './create-mock-middleware.js';
import { getMockData } from './get-mock-data.js';
import type { MockOptions } from './types.js';

export function mock(opts: MockOptions): Plugin {
  return {
    name: 'mock',
    configureServer(server) {
      const mocks = getMockData(opts);
      server.middlewares.use(
        createMockMiddleware({
          mocks,
          config: this.config as Config,
        }),
      );
    },
  };
}
