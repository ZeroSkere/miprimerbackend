import express from 'npm:express'

const app = express()


app.get('/', (req, res) => {

    res.send('Papi ando activo')
}
)

app.listen(3000, () => {

    console.log('Servidor activoo');

} )