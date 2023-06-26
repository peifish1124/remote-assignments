const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello, My Server!')
})

app.get('/data', (req, res) => {
    const number = req.query.number;
    var result;
    if(typeof number == 'undefined'){
        result = 'Lack of Parameter';
    }else if(isNaN(number)){
        result = 'Wrong Parameter';
    }else{
        result = (1 + Number(number)) * Number(number) / 2;
    }
    res.send(`${result}`);
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})


// Question: Think about what will happen when N is very large?
// A: 如果單純用迴圈加法計算，前端頁面需花較多時間來等候後端運算結果，所以可以用數學概念，(1+N)*N/2