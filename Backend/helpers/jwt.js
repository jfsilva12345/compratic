const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {
    return new Promise((resolve, reject) => {

        const payload = {uid, name};
        jwt.sign(payload, process.env.PASS_SEC, {
            expiresIn: '100d'
        }, (err, token) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar el token')
            }

            resolve(token);
        })

    });
}

module.exports = {
    generarJWT
}
