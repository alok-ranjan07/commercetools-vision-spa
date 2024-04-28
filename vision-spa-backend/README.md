1. npm install
2. add .env file in root directory of the project
3. format of env file:

```
# Port and Host address
PORT=
HOSTNAME=

# Api Credentials(create SPA api client)
CTP_PROJECT_KEY=
CTP_CLIENT_SECRET=
CTP_CLIENT_ID=
CTP_AUTH_URL=
CTP_API_URL=
CTP_SCOPES=

# Guest User Credentials(create api client with readonly access)
CTP_GUEST_CLIENT_SECRET=
CTP_GUEST_CLIENT_ID=
CTP_GUEST_SCOPES=

# Service URLs
LoginService=
```

4. create commercetool client from merchant center
5. copy the credentials to your .env file
