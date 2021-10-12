export function auth(req, res, next) {
  if (req.session.user === 'user' && req.session.admin) {
    next()
  }
  return res.status(401).send('No autorizado')
}