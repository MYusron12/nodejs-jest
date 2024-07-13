# Node.js Jest Example

This repository contains a simple Node.js project with unit tests using Jest. It demonstrates how to set up Jest for testing JavaScript functions in a Node.js environment.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/MYusron12/nodejs-jest.git
cd nodejs-jest
```

2. Install the project dependencies:

```bash
npm install
```

### Running Tests

To run the tests, use the following command:

```bash
npm test
```

Jest will automatically find and run the test files, displaying the results in the terminal.

### Project Structure

The project structure is as follows:

```
nodejs-jest/
├── node_modules/
├── babel.config.js
├── package.json
├── src/
│   └── math.js
└── test/
    └── math.test.js
```

- **babel.config.js**: Babel configuration file for transpiling JavaScript.
- **package.json**: Contains project metadata and dependencies.
- **src/**: Contains the source code files.
  - **math.js**: Contains the functions to be tested.
- **test/**: Contains the test files.
  - **math.test.js**: Contains the Jest test cases for the functions in `math.js`.

### Functions

The `src/math.js` file contains the following functions:

- `sum(a, b)`: Returns the sum of `a` and `b`.
- `multiply(a, b)`: Returns the product of `a` and `b`.
- `divide(a, b)`: Returns the result of dividing `a` by `b`. Throws an error if `b` is `0`.
- `subtract(a, b)`: Returns the result of subtracting `b` from `a`.

### Tests

The `test/math.test.js` file contains test cases for the functions in `math.js` using Jest. Each function has corresponding tests to ensure they work correctly.

### Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are always welcome!

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
