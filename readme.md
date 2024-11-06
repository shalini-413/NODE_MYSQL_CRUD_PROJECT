```markdown
# Node.js MySQL CRUD API

## Project Description
This project is a **REST API** for managing **student records**. It allows users to perform **CRUD operations** (Create, Read, Update, Delete) on student data stored in a MySQL database. This API is built using **Node.js**, **Express**, and **MySQL** with the **mysql2/promise** library for seamless asynchronous database interactions.

## Installation Instructions

To get this project up and running on your local machine, follow these steps:

### 1. Clone the Repository
Clone the project to your local machine using Git:
```bash
git clone https://github.com/shalini-413/NODE_MYSQL_CRUD_PROJECT.git
cd NODE_MYSQL_CRUD_PROJECT
```

### 2. Install Dependencies
Run the following command to install the required dependencies:
```bash
npm install
```

### 3. Set Up MySQL Database
- Create a MySQL database named `students_db`.
- Configure your MySQL database connection in the `config/db.js` file.

```js
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'your_password',
    database: 'students_db',
});
```

### 4. Start the Server
Start the application by running the following command:
```bash
node server.js
```

Your API will be live at `http://localhost:8000`.

## Tech Stack

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express**: Web framework for building APIs.
- **MySQL**: Relational database management system.
- **mysql2/promise**: MySQL client for Node.js with Promise-based API for asynchronous database interactions.

## API Usage Examples

The following routes are available:

### 1. **GET** `/api/v1/student/getall`
Retrieve all student records from the database.
```bash
GET /api/v1/student/getall
```

### 2. **GET** `/api/v1/student/get/:id`
Retrieve a specific student by their ID.
```bash
GET /api/v1/student/get/:id
```

### 3. **POST** `/api/v1/student/create`
Create a new student record.
- Request body: `name`, `roll_no`, `fees`, `medium`
```bash
POST /api/v1/student/create
```

### 4. **PUT** `/api/v1/student/update/:id`
Update an existing student’s information by ID.
- Request body: `name`, `roll_no`, `fees`, `medium`
```bash
PUT /api/v1/student/update/:id
```

### 5. **DELETE** `/api/v1/student/delete/:id`
Delete a student record by ID.
```bash
DELETE /api/v1/student/delete/:id
```

## Main Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on student records.
- **MySQL Integration**: Seamless interaction with a MySQL database using the `mysql2/promise` library.
- **Error Handling**: Proper error handling and response structure for each API endpoint.
- **Scalable**: Easily extendable to add more features in the future.

## How to Contribute

We welcome contributions to improve the project! Please refer to the [Contributing.md](Contributing.md) for detailed instructions on how to contribute.

## Contact Information

For any inquiries or feedback, feel free to reach out:

- **GitHub**: [shalini-413](https://github.com/shalini-413)
- **Email**: [shalinishalu462002@gmail.com](mailto:shalinishalu462002@gmail.com)

---

Thanks for checking out this project! We look forward to your contributions. Happy coding! 🎉
```

### How to Add This to Your Repository:
1. Open your project folder.
2. Create a `README.md` file in the root directory.
3. Paste the content above into the `README.md` file.
4. Commit and push the changes:
   ```bash
   git add README.md
   git commit -m "Add detailed README with project setup and usage"
   git push origin main
   ```

## Happy Coding!
