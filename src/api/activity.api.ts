import { Router, NextFunction, Request, Response } from 'express';
import { ActivityModel } from '../models/activity.model';
import { ApiHelper as Helper } from './helper';

export const ACTIVITY_PREFIX = 'activity';

export class ActivityApi {
  static wireTo(router: Router): Router {
    router.get('/', (req: Request, res: Response, next: NextFunction) =>
      ActivityApi.createOne(req, res, next)
    );
    return router;
  }

  static createOne(req: Request, res: Response, next: NextFunction) {
    ActivityModel.create({
      name: 'what'
    }).then(activity => Helper.sendJson(res, activity));
  }
}
