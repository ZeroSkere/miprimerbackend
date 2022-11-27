import express from 'npm:express'

const app = express()


app.get('/', (req, res) => {

    res.send('Q fue mano')
}
)

app.listen(3000, () => {

    console.log('Q fue mano');

} )