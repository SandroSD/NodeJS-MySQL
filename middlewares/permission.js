require('dotenv').config();

const jwt = require('jsonwebtoken');

module.exports.hasPermission = (permissionsEndPoint) => (req, res, next) => {
    try {
        let token = req.header('Authorization');

        const { TOKEN_SECRETO } = process.env;
        
        token = token.replace('Bearer ', '');

        const { persona } = jwt.verify(token, TOKEN_SECRETO);

        const { role } = persona;

        permissionsEndPoint.forEach(permissionEndPoint => {
            const isPermissionIncluded = role.permissions.includes(permissionEndPoint);
            
            if(!isPermissionIncluded) {
                return res.status(401)
                            .json({
                                error: 'No tienes permisos suficientes para ejecutar esta acción.'
                            });
            }
        });

        next();
    } catch (error) {
        console.log(error);
        return res.status(400)
                    .json({
                        error: 'Ha ocurrido un error.'
                    });
    }
}