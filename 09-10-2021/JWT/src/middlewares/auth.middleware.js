import jwt from 'jsonwebtoken'

export async function isAuth(req, res,next) {
  try {
    const token = req.get('Authorization')
    const verify = await jwt.verify(token, process.env.PRIVATE_KEY)
    req.user = verify.user
    next()
  } catch (error) {
    res.status(401).send(error.message)
  }
}