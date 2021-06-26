import path from 'path';

const root = path.resolve(__dirname, '..');
const src = `${root}/src`;
const build = `${root}/dist`;
const assets = `${src}/assets`;

export default {
  paths: {
    src,
    build,
    assets,
  },
};
