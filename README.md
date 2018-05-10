# OpenDCS Centralized Configuration Service

_Maybe_

## Setup SSL for HTTPS

```sh
openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out src/ssl/cert.pem -keyout src/ssl/key.pem
```
