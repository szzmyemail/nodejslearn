const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// 定义GraphQL类型和查询
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// 定义GraphQL解析器
const root = {
  hello: () => 'a'
};

// 启动GraphQL服务器
const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  root,
  graphiql: true
}));
app.listen(3000, () => console.log('Now browse to localhost:3000/graphql'));