require('dotenv').config();
const app = require('./app.js');
const { connectDb } = require('./Db/connect.js');

connectDb()
  .then(() => {
    app.listen(8000, () =>
      console.log(`Test Server is running on the port 8000`)
    );
  })
  .catch(err => console.log(err));
