const express = require('express')
const path = require('path')
const app = express();

const defaulthPath = path.join(__dirname,'..','build');

app.use(express.static(defaulthPath));


app.get('*', (req, res) => {
    res.sendFile(path.join(defaulthPath,'index.html'))
})
const PORT = process.env.PORT || 8008
app.listen(PORT , () => console.log('Front end server is up'))


