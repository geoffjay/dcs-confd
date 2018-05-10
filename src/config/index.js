const {
  MONGODB_URI,
  NODE_ENV,
  ENGINE_API_KEY,
  PORT,
  HTTP_REDIRECT_PORT,
  TLS_CERT,
  TLS_KEY,
} = process.env

export default {
  env: NODE_ENV || 'development',
  database: {
    uri: MONGODB_URI || 'mongodb://localhost:27017/dcs'
  },
  server: {
    apiKey: ENGINE_API_KEY || 'service:geoffjay-9234:nl7TUUW3IQwmHVfuYAzLng',
    port: PORT || 5000,
    redirectPort: HTTP_REDIRECT_PORT || 8080
  },
  tls: {
    cert: TLS_CERT || 'src/ssl/cert.pem',
    key: TLS_KEY || 'src/ssl/key.pem',
  }
}
