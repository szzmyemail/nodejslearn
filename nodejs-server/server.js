const express = require("express");
const app = express();

app.get('/', function(req, res) {
    res.send([1, 2, 3]);
});

app.get('/getdata', function(req, res) {
    res.send([{
        name: 'lily'
    }]);
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});
//postman get请求http://localhost:3000 返回[1, 2, 3]
