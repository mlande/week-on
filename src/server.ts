import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import * as errorHandler from 'errorhandler';
import { Database } from './database';
import { Api } from './api/api';

export class Server {
  public app: express.Application;

  public static bootstrap(db: Database, api: Api): Server {
    return new Server(db, api);
  }

  constructor(private db: Database, private api: Api) {
    this.app = express();
    this.config();
    this.db.connect();
    this.api.expose(this.app);
  }

  private config() {
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(logger('dev'));
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(cookieParser('S3CR3T'));

    // catch 404 and forward to error handler
    this.app.use(function(
      err: any,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) {
      err.status = 404;
      next(err);
    });
    this.app.use(errorHandler());
  }
}
