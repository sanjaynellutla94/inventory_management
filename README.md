### Project Description

Considering assignment document and the raw data provided in that, i have designed the Data models and built CRUD API's arround it and with a API requested to fetch sku data based on (locationName, departmentName, categoryName, subCategoryName) as parameters.

Tasks:
1 - Pre load the data provided with logical data model Design(models and seeders folder)
2 - Create CRUD APIs arround the models designed(Please refer src/config/urls.js)
3 - API to fetch sku data based on (locationName, departmentName, categoryName, subCategoryName) as parameters(/api/v1/skus/metadata)

### Environment Config Setup

Update below properties from env variables or create .env file and add below properties.
```
### 
MYSQL_ROOT_PASSWORD(with docker-compose)=root
NODE_ENV=development

DB_USER=root
DB_PASSWORD=root
DB_NAME=inventory
DB_HOST=mysql_inventory(for docker-compose)/localhost/any host
DB_PORT=3306
DB_DIALECT=mysql

AUTH_SECRET=secret
APP_PORT=8000

DEBUG_PORT=9239
```

### Starting the application using system's node runtime

```
> npm install
```

```
> npm run seed (For data load from ./meta-data.json and sku.json)
```

```
> npm run dev
```

### Starting the application using docker-compose (MySQL is pre configured)
```
> docker-compose up (docker-compose takes care of data load from ./meta-data.json and sku.json)
```