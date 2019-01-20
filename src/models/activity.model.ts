import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  name: String
});

export const ActivityModel = model('activity', activitySchema);
