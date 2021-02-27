const express = require('express');
const morgan = require('morgan');
const bp = require('body-parser');
const routes = require('./routes')
const path = require('path');
const fs = require('fs');
const cors = require('cors');
//SETTING
const app = express();
app.set('port', process.env.PORT || 8080);


//MIDLEWARE
app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(routes)




//listening
app.listen(app.get('port'), () => {
    console.log('running server for port ' + app.get('port'))
});







