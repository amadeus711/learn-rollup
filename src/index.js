// // 导入模块成员
// import { camelCase } from 'lodash-es';
// import { log } from './logger';
// import messages from './messages';
// import { name, version } from '../package.json';
// import cjs from './cjs-module';

// // 使用模块成员
// const msg = messages.hi;

// log(msg);

// log(name);

// log(version);

// log(camelCase('hello word'));

// log(cjs);

// import('./logger').then(({ log }) => {
//   log('code splitting~');
// });

import fetchApi from './fetch';
import { log } from './logger';

fetchApi('/posts').then((data) => {
  data.forEach((item) => {
    log(item);
  });
});
