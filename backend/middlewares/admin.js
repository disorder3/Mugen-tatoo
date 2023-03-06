const jwt = require('jsonwebtoken')

const adminAuth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.sendStatus(401)
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(!decoded?.isAdmin){
        return res.sendStatus(403)
    }

    next()
}


module.exports = { adminAuth }