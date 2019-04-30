const express = require('express');
const app = express();

app.use(express.static('public'));

const  counter = {
  count: 0
}


app.get('/count', function(req, res){
  res.send(counter);
});

app.post('/count', function(req, res){
  counter.count = counter.count +1;
  res.send(counter);
})


app.listen(3000, function(){
  console.log('server in ascolto sulla porta 3000');
});