const express = require('express')
const app = express()
const port = 3000
// const request = require('request')
const news = require('./tools/news')


const path =require('path')
const publicdirectory = path.join(__dirname,'../public')
app.use(express.static(publicdirectory))

app.set('view engine','hbs')
const viewpath=path.join(__dirname,'../templates/views')/////عشان مخليش الviewsاجباري ان اكتبها 
app.set('views',viewpath)

const hbs = require('hbs')
const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {

res.render('index') 

})
app.get('/news', (req, res) => {

    news((error, response) => {
        if (error) {
            return res.send({ error })
        }
        // console.log(response)
        
      
            res.render('news',{response}) 

       
    })
})
// 

// if you press yes you will go home

app.get('*', (req, res) => {
    res.render('404page', {
      title: '404page',
    });
  });

app.listen(port, () => {
    console.log('Listening on port 3000')
})