# Molecular AOP Visualization App

Cytoscape-based visualization app for molecular Adverse Outcome Pathways (AOPs).

## Project structure

- **`/js/tables`**: Contains scripts for managing tables (e.g., node and edge tables).
- **`/js/aop`**: Contains scripts for Cytoscape network styling and elements.
- **`/js/cytoscape.min.js`**: Minified Cytoscape.js, needed to use the library.
- **`index.html`**: The main entry point for the app.

## Getting started

1. Fork or create a branch. Open `index.html` in a browser to view the app.
2. Modify the JavaScript files to complete the functionality according to the issue tracker.
3. Can you think about new functionalities? Write your own issues and implement them.

## Guidelines

To ensure your code is reusable, maintainable, and easy to understand, please follow these best practices:

### 1. Write reusable functions

- **Why?** Reusable functions make your code easier to test, debug, and integrate into other projects.
- **How?** Break down your code into small, well-defined functions that perform a single task. Avoid embedding logic directly in event handlers or deeply nested blocks (i.e., write your functions separately).

### 2. Use clear and relevant names

- **Why?** Descriptive names make your code self-documenting and easier for others to understand.
- **How?** Use meaningful names for variables, functions, and components. Avoid abbreviations unless they are widely understood.

### 3. Document your code

- **Why?** Documentation helps others (and your future self) understand the purpose and usage of your code.
- **How?** Add comments to explain complex logic, and use docstrings or JSDoc-style comments for functions and modules. Include examples where applicable.

### 4. Be modular and keep it simple

- **Why?** Modular code is easier to maintain, test, and extend.
- **How?** Organize your code into separate scripts to encapsulate specific functionality. Avoid writing long, confusing scripts.

### 5. Use version control

- **Why?** Clear commit messages and logical commits make it easier to track changes and collaborate.
- **How?** Write descriptive commit messages and commit frequently. Use branches for new features or fixes, addressing the issues in the tracker.
