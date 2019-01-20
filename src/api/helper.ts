import { Response } from 'express';
import { API_PREFIX } from './api';

export class ApiHelper {
  static sendJson(res: Response, payload: object) {
    res.json(payload);
  }

  static prefix(subApiPrefix: string): string {
    return `/${API_PREFIX}/${subApiPrefix}/`;
  }
}
