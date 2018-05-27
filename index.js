var express = require('express');

app = express();
app.get('/v1/getDay',function(req, res)
    {
    res.send (
       { 
        message: 'Date generate!'
       })
    });

app.listen(3000,function(){
    console.log('Listening on port 3000.');
});