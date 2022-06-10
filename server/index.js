const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const { connectDB } = require('./config/db');
const schema = require('./schema');
const app = express();

const port = process.env.PORT || 5000;

//  connect DB
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
  })
);

app.listen(
  port,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`)
);
