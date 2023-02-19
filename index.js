const express = require('express');
const port= 8000;
const app = express();
const jwt = require('jsonwebtoken')

app.get('/', (req, res) => {
    res.json({message: "Welcome to your rest api" })
    // res.send('<h1>Welcome to Node js!!!!')
})

app.post('/tokenGeneration', (req, res) => {
   const user = {
    id: 1,
    username: 'Aug10GroupA',
    email: 'aug10a@coding.com'
   }
   jwt.sign(user, 'secret_key', function(err, token) {
    if(err){
        res.sendStatus(403);
    }
    else{
        res.json({token})
    }
  })
})


app.listen(port, function(err){
    if(err){
        console.log(`Error in starting server : ${err}`)
        return;
    }
    console.log(`Server is up and running on port : ${port}`)
})