import * as mongoose from 'mongoose';
const DATABASE_URI = 'mongodb://localhost/week-on';

export class Database {
  connect() {
    mongoose.connect(
      DATABASE_URI,
      { useNewUrlParser: true }
    );
    mongoose.connection.on(
      'error',
      console.error.bind(console, 'connection error:')
    );
    mongoose.connection.once('open', () => console.info('connected to db'));
  }
}
