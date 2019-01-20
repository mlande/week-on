import { Router, Application } from 'express';
import { ActivityApi, ACTIVITY_PREFIX } from './activity.api';
import { ApiHelper as Helper } from './helper';

export const API_PREFIX = 'api';

export class Api {
  public expose(app: Application) {
    console.log('expose', Helper.prefix(ACTIVITY_PREFIX));
    app.use(Helper.prefix(ACTIVITY_PREFIX), ActivityApi.wireTo(Router()));
  }
}
