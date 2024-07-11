# MERN Odyssey

**MERN Odyssey** is a modern blogging platform built with the MERN stack. Explore articles, read content, and interact with a vibrant community through comments and discussions.

## Technologies Used

- **MongoDB:** NoSQL database for storing articles and comments.
- **Express.js:** Web framework for Node.js for API and server-side logic.
- **React:** JavaScript library for building user interfaces.
- **Node.js:** JavaScript runtime for server-side code execution.
- **Axios:** HTTP client for making API requests.

## Features

- **Read and Explore Articles:** Browse through various articles and read engaging content.
- **Comment on Articles:** Share your thoughts and interact with the community.
- **Discover Related Content:** Find and explore articles on similar topics.

## Installation

### Prerequisites

- **[Node.js](https://nodejs.org/)** (LTS version)
- **[MongoDB](https://www.mongodb.com/try/download/community)**

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/kalyankarsatish1234/MERN-Odyssey.git
   cd MERN-Odyssey
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the `backend` directory:

   ```env
   MONGODB_URI=mongodb://localhost:27017/mern-odyssey
   PORT=7000
   ```

   Run the backend server:

   ```bash
   npm start
   ```

3. **Frontend Setup:**

   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

   Access the app at `http://localhost:5173`.

## Commands

| Command                           | Description                                           |
|-----------------------------------|-------------------------------------------------------|
| `git clone <repo>`                 | Clone the repository.                               |
| `npm install`                      | Install dependencies for backend or frontend.       |
| `npm start`                        | Start the backend server.                            |
| `npm run dev`                      | Start the React development server.                 |
| `npm run build`                    | Build the React app for production.                 |



## Contributing

1. **Fork the repository.**
2. **Create a feature branch.**
3. **Commit your changes.**
4. **Push to the branch.**
5. **Open a pull request.**


## Contact

For questions or feedback, reach out to **satishkalyankar06@gmail.com**.

