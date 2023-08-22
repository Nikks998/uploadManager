module.exports = {
    index: (req, res) => {
        return res.render('productsMultipleImages')
    },
    add: (req, res) => {
        return res.render('producsAddMultipleImages')
    },
    create: (req, res) => {
        return res.send(req.body)
    },
    edit: (req, res) => {
        return res.send('productsEditMultipleImages')
    },
    update: (req, res) => {
        return res.send(req.body)
    },
    remove: (req, res) => {
        return res.send('Producto Eliminado')
    }
}