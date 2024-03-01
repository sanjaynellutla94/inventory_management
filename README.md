# Project Description

This project involves designing data models and building CRUD APIs based on the assignment document and raw data provided. Additionally, an API has been implemented to fetch SKU data using parameters such as `locationName`, `departmentName`, `categoryName`, and `subCategoryName`.

### Tasks

1. **Pre-load Data:**
   - Logical data model design is implemented and can be found in the `models` and `seeders` folders.

2. **CRUD APIs:**
   - CRUD APIs have been developed around the designed models. For reference, please check `src/config/urls.js`.

3. **SKU Metadata API:**
   - An API is provided to fetch SKU data based on parameters (`locationName`, `departmentName`, `categoryName`, `subCategoryName`). The endpoint is `/api/v1/skus/metadata`.

#### Note:
This project doesnt have unit/integration test cases written, and setup is mostly for development environments, i have not provided setup for production.

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

### Starting the application using docker
```
> npm run docker:build (Automated npm script for below command)
```
```
> docker build -t inventory_management .
```


```
> npm run docker:run(app will run on Port:8000)(Automated npm script for below command)
```
```
> docker run -p 8000:8000 inventory_management
```
