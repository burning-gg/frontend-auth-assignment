import jwt from 'jsonwebtoken'

const createAuthToken = payload => {
  const newToken = jwt.sign(payload, process.env.REACT_APP_JWT_SECRET_STRING, { expiresIn: 3600 })

  sessionStorage.setItem('token', newToken)

  return newToken;
}

export default createAuthToken