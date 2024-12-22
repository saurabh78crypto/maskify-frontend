# Maskify - Frontend

## Overview

Maskify is a web application that allows users to upload an image, draw a mask using an interactive canvas, and then generate and view the masked image alongside the original. This project is built using React, Tailwind CSS, and various libraries for handling image upload and canvas drawing.

## Live Deployment

- [Live Demo](https://maskify-app.netlify.app/)

## How to Run Locally

To set up and run the Maskify project locally, follow these steps:

### Prerequisites
- Ensure you have [Node.js](https://nodejs.org/) (v14 or higher) and [npm](https://www.npmjs.com/) installed on your local machine.

### Steps to Run the Project
1. **Clone the repository**:
  ```bash
  git clone https://github.com/saurabh78crypto/maskify-frontend.git
  cd maskify-frontend
  ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the environment:** 
Create a `.env` file in the root of the project with the following content:
```js
REACT_APP_BASE_URL=http://localhost:8000
```
Make sure your backend server is running at `http://localhost:8000`.

4. **Start the development server:**
```bash
npm start
```

5. **Open your browser:** Navigate to `http://localhost:3000` to view the application.


### Libraries Used

- **React:** A JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for rapid development.
- **axios:** For HTTP requests to interact with the backend API.
- **notistack:** To display notifications in the application.
- **react-canvas-draw:** For interactive canvas functionalities.
- **react-icons:** For icons used within the app.