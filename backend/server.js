const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config.env' });

const app = require('./app');

console.log(process.env.NODE_ENV);

let DB = '';

if (process.env.NODE_ENV === 'development') {
  DB = process.env.DATABASE_LOCAL;
} else if (process.env.NODE_ENV === 'production') {
  DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
}

console.log({ DB });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
    });

    console.log(`Database connected on: ${conn.connection.host}`.yellow.bgBlue);
  } catch (err) {
    console.log(`Error: ${err.message} ❌❌❌`.red);
    process.exit(1);
  }
};

connectDB();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App connected on port: ${port}`.cyan);
});
