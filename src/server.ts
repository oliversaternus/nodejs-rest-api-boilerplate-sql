import { createServer } from 'http';
import { app } from './app';
import { init } from './database/init';

const port = process.env.PORT || 5000;

(async () => {

  await init({ force: true });

  createServer(app)
    .listen(port, () => console.log(`Server listen on port ${port}`));

})();

