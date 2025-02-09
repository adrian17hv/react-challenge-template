# RealEstate - Real Estate Listings App

Welcome to **RealEstate**, a web application designed to display real estate listings with an infinite scrolling experience. The app fetches house data from an API, handles errors gracefully, and provides a seamless browsing experience for users.


- [Installation](#installation)
- [Usage](#usage)
- [Technical Choices](#technical-choices)

## Installation

To get started, ensure you have the correct version of Node.js installed and follow these steps:

### Step 0: Install and Use NVM (Node Version Manager)

1. **Install NVM**  
   NVM allows you to install and switch between multiple versions of Node.js. Follow the official [NVM GitHub page](https://github.com/nvm-sh/nvm) for installation instructions based on your platform.

2. **Install Node.js**  
   After installing NVM, use it to install the required Node.js version:

   ```bash
   nvm install
   ```

3. **Use the Installed Node.js Version**  
   Switch to the installed version:

   ```bash
   nvm use
   ```

4. **Verify Node.js Installation**  
   Ensure that the correct version of Node.js is active:

   ```bash
   node -v
   ```

### Step 1: Install Dependencies

Install the required dependencies using Yarn:

```bash
yarn install
```

This will install all the necessary packages defined in `package.json`.

### Step 2: Start the Application

To start the development server, run:

```bash
yarn dev
```

This will launch the application on `http://localhost:5173`.

## Example video

https://github.com/user-attachments/assets/ab870405-a6e5-4d41-ac63-870358e3c944

## Usage

Once the app is running, you can browse through an endless list of property listings. The key features include:

- **Infinite Scrolling**: Automatically loads more properties as you scroll down.
- **Error Handling**: Handles API failures and retries failed requests.
- **Dark Theme**: A smooth and visually appealing UI.

## Technical Choices

In this project, several key technical choices were made to enhance performance, user experience, and maintainability:

### **React with Vite**
- The project is built using **React** with **Vite** for a fast and optimized development experience.

### **Axios with Retries**
- API requests are handled using **Axios**, with automatic retries implemented using **axios-retry** to ensure reliability even when the API fails intermittently.

### **Styled Components**
- The UI is designed using **Styled Components**, making it easy to manage theming and component-based styling in a modular way.

### **Intersection Observer API**
- The infinite scrolling functionality is implemented using the **Intersection Observer API**, which provides better performance compared to traditional event listeners.