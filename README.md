# MongoVerse

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Description

MongoVerse is a NoSQL-backed social network API that enables users to share their thoughts, react to friends' thoughts, and create a friend list. Built with MongoDB for its robust handling of large amounts of unstructured data, it uses Express.js for routing and the Mongoose ODM for data modeling and validation.

## Installation

1. Ensure MongoDB is installed and running on your local machine.
2. Clone the MongoVerse repository to your local machine.
3. Navigate to the MongoVerse project directory.
4. Run `npm install` to install all required dependencies.
5. Run `npm start` to initiate the server.

## Usage

With the server running, you can use API testing tools like Insomnia or Postman to send requests to the API endpoints. This API allows for the creation, updating, and deletion of user profiles and thoughts, as well as adding and removing friends and reactions.

## API Endpoints

The MongoVerse API provides the following endpoints:

### Users

- **GET all users**: `http://localhost:3000/api/users`
- **GET a single user by ID**: `http://localhost:3000/api/users/:userId`
- **POST a new user**: `http://localhost:3000/api/users`
  - Body: `{"username": "user1", "email": "user1@example.com"}`
- **PUT update a user by ID**: `http://localhost:3000/api/users/:userId`
- **DELETE a user by ID**: `http://localhost:3000/api/users/:userId`
- **POST add a friend**: `http://localhost:3000/api/users/:userId/friends/:friendId`
- **DELETE remove a friend**: `http://localhost:3000/api/users/:userId/friends/:friendId`

### Thoughts

- **GET all thoughts**: `http://localhost:3000/api/thoughts`
- **GET a single thought by ID**: `http://localhost:3000/api/thoughts/:thoughtId`
- **POST a new thought**: `http://localhost:3000/api/thoughts`
  - Body: `{"thoughtText": "Here's a cool thought...", "username": "user1", "userId": "<User_Id>"}`
- **PUT update a thought by ID**: `http://localhost:3000/api/thoughts/:thoughtId`
- **DELETE a thought by ID**: `http://localhost:3000/api/thoughts/:thoughtId`

### Reactions

- **POST add a reaction to a thought**: `http://localhost:3000/api/thoughts/:thoughtId/reactions`
- **DELETE remove a reaction from a thought**: `http://localhost:3000/api/thoughts/:thoughtId/reactions/:reactionId`

## Testing

To test the MongoVerse API endpoints, you can use API testing tools like Insomnia or Postman. For detailed instructions, please refer to the [Testing](#testing) section.

## Contributing

Interested in contributing to MongoVerse? Here's how you can:

1. Fork the project.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

MongoVerse is open source and available under the [MIT License](LICENSE).
