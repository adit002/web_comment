let express = require('express')
let app = express()

app.use(express.static(__dirname+'/dist/suitmedia'));

app.get('/*' , (req,resp)=> {
    resp.sendFile(__dirname+'/dist/suitmedia/index.html')
})

app.listen(process.env.PORT || 8080);
