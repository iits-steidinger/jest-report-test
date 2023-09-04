import type {Config} from 'jest';

const config: Config = {
  preset: "ts-jest",
  reporters: [['github-actions', {silent: false}], 'summary'],

};

export default config;
