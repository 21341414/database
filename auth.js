export default (req, res, next) => {
  const apiKey = 'kx-c00kie!-21341414';
  if (req.method === 'GET') return next();
  
  if (req.headers['x-api-key'] === apiKey) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};
