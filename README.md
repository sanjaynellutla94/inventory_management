### Installing
```
> npm install
```

### Environment Config Setup

Update below properties from env variables or create .env file and add below properties.
```
### 
APP_PORT=8000
AUTH_SECRET=secret
MQ_PROTOCOL=amqp
MQ_HOST=localhost
MQ_USERNAME=guest
MQ_PASSWORD=****
MQ_EXCHANGE=users_exchange
MQ_QUEUE=hms_user_management
TENANT_ID=1
SERVICE_NAME=USER_MANAGEMENT
TENANTS_URL=${TENANTS_SERVICE_URL}
TENANTS_SECRET=secret
```

### Starting the application
```
> npm start
```