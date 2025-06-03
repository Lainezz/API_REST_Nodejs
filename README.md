
# 📦 API_REST_Nodejs

A RESTful API built with Node.js and Express.js for managing an inventory system. This project supports full CRUD operations for products and includes basic session-based user authentication. Designed primarily for educational purposes, it serves as a foundational example for building REST APIs with MongoDB.

---

## 🚀 Features

- **Product Management**: Create, read, update, and delete products.
- **User Authentication**: Session-based login system.
- **MongoDB Integration**: Data persistence using MongoDB with Mongoose ODM.
- **CORS Enabled**: Cross-Origin Resource Sharing configured for broader accessibility.
- **Environment Configuration**: Manage environment variables using `dotenv`.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for data storage.
- **Mongoose**: ODM for MongoDB and Node.js.
- **UUID**: For generating unique identifiers.
- **Cookie-Parser**: Parse Cookie header and populate `req.cookies`.
- **CORS**: Enable Cross-Origin Resource Sharing.
- **Dotenv**: Load environment variables from a `.env` file.
- **Nodemon**: Monitor for changes and automatically restart the server during development.

---

## 📂 Project Structure

```
API_REST_Nodejs/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── app.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Lainezz/API_REST_Nodejs.git
   cd API_REST_Nodejs
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   ```

4. **Start the server**:

   - For development with automatic restarts:

     ```bash
     npm run dev
     ```

   - For production:

     ```bash
     npm start
     ```

---

## 📚 API Endpoints

### 🔐 Authentication

- **Login**

  - **URL**: `/login`
  - **Method**: `POST`
  - **Body Parameters**:

    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```

  - **Success Response**:

    - **Code**: `200 OK`
    - **Content**:

      ```json
      {
        "message": "Login successful"
      }
      ```

- **Logout**

  - **URL**: `/logout`
  - **Method**: `POST`
  - **Success Response**:

    - **Code**: `200 OK`
    - **Content**:

      ```json
      {
        "message": "Logout successful"
      }
      ```

### 📦 Products

- **Get All Products**

  - **URL**: `/productos`
  - **Method**: `GET`
  - **Success Response**:

    - **Code**: `200 OK`
    - **Content**:

      ```json
      [
        {
          "_id": "product_id",
          "name": "Product Name",
          "price": 100,
          "quantity": 10
        },
        ...
      ]
      ```

- **Get Product by ID**

  - **URL**: `/productos/:id`
  - **Method**: `GET`
  - **Success Response**:

    - **Code**: `200 OK`
    - **Content**:

      ```json
      {
        "_id": "product_id",
        "name": "Product Name",
        "price": 100,
        "quantity": 10
      }
      ```

- **Create New Product**

  - **URL**: `/productos`
  - **Method**: `POST`
  - **Body Parameters**:

    ```json
    {
      "name": "New Product",
      "price": 100,
      "quantity": 10
    }
    ```

  - **Success Response**:

    - **Code**: `201 Created`
    - **Content**:

      ```json
      {
        "message": "Product created successfully",
        "product": {
          "_id": "new_product_id",
          "name": "New Product",
          "price": 100,
          "quantity": 10
        }
      }
      ```

- **Update Product**

  - **URL**: `/productos/:id`
  - **Method**: `PUT`
  - **Body Parameters**:

    ```json
    {
      "name": "Updated Product",
      "price": 150,
      "quantity": 5
    }
    ```

  - **Success Response**:

    - **Code**: `200 OK`
    - **Content**:

      ```json
      {
        "message": "Product updated successfully",
        "product": {
          "_id": "product_id",
          "name": "Updated Product",
          "price": 150,
          "quantity": 5
        }
      }
      ```

- **Delete Product**

  - **URL**: `/productos/:id`
  - **Method**: `DELETE`
  - **Success Response**:

    - **Code**: `200 OK`
    - **Content**:

      ```json
      {
        "message": "Product deleted successfully"
      }
      ```

---

## 🧪 Sample Data

Sample data for testing can be found in the repository. You can use tools like Postman or Insomnia to interact with the API endpoints.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

- **Name**: Diego Linares Mojácar
- **Email**: diegolinaresmojacar@gmail.com

---

Feel free to contribute to this project by submitting issues or pull requests. Happy coding!
