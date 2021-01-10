const express = require('express');
const server = express();
const cors = require('cors');
const port = 3001;

server.use(cors());
server.use(express.json());
const ProdutoRoutes = require('./src/routes/ProdutoRoutes');
server.use('/prod', ProdutoRoutes);



server.listen(port, () => console.log(`Servidor Inicializado na porta  ${port}`));
