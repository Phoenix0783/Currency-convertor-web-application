const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/meme', (req, res) => {
  res.render('meme')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})