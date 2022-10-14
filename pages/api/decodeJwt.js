const jwt = require('jsonwebtoken')

async function decodeJwt(token){

    //const header = req.headers;          
        
    const chaveDecodificada = await jwt.decode(token);
    const acesso = await chaveDecodificada.autorizacao

    return acesso
}

module.exports = decodeJwt