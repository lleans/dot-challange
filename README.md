# 🚀 Quiz App

A modern, responsive quiz application built with React, designed to deliver an engaging and seamless quiz-taking experience. This project was developed as part of an internship challenge to demonstrate technical skills and adherence to project requirements.

## 📝 Features

- **User Authentication:** Secure login functionality for personalized quiz sessions.
- **Dynamic Questions:** Fetches quiz questions from the [Open Trivia Database API](https://opentdb.com/).
- **Single Question Display:** Displays one question per page, transitioning seamlessly after each answer.
- **Timer Integration:** Limits the quiz duration; automatically submits answers and displays results when time runs out.
- **Progress & Results:** Tracks the number of questions answered, correctly/incorrectly, and displays the results at the end.
- **Resume Functionality:** Utilizes localStorage to save and resume progress if the browser is closed.
- **Responsive Design:** Fully optimized for desktop and mobile users.

---

## ⚙️ Setup Instructions

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the Repository

```bash
git clone https://github.com/lleans/dot-challange.git
cd dot-challange
```

### Step 2: Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Step 3: Configure Firebase

1. Create a new Firebase project on the [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration in the project.

### Step 4: Start the Development Server

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser to see the app in action.

---

## 🌐 Deployment

The Quiz App is deployed using **Cloudflare Pages** for fast and secure hosting.  
You can access the live version here: [Quiz App Live](https://dot-challange.lleans.dev).

---

## 🛠️ Tech Stack & Tools

### Core Technologies

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast build tool for modern web projects.
- **TypeScript**: Enhances JavaScript with static typing.
- **Tailwind CSS**: Utility-first CSS framework for styling.

### Additional Libraries

- **ShadCN**: Prebuilt components for UI consistency.
- **Lucide Icon**: Icon pack for a modern UI.
- **React Hook Form**: Simplifies form handling and validation.
- **Zod**: Schema validation for form data.
- **React Router**: Handles client-side routing.
- **Axios**: HTTP client for API communication.
- **Firebase**: Authentication and database services.

### Development Tools

- **ESLint**: Linter for maintaining code quality.
- **Prettier**: Code formatter for consistent styling.
- **TailwindCSS Animate**: Animation utilities.
- **TypeScript ESLint**: TypeScript-compatible linting rules.

---

## 📦 Dependencies

**Dependencies:**

```json
{
  "@hookform/resolvers": "^3.9.1",
  "@radix-ui/react-dropdown-menu": "^2.1.2",
  "@radix-ui/react-label": "^2.1.1",
  "@radix-ui/react-separator": "^1.1.0",
  "@radix-ui/react-slot": "^1.1.1",
  "@radix-ui/react-toast": "^1.2.2",
  "axios": "^1.7.9",
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1",
  "firebase": "^11.1.0",
  "lucide-react": "^0.468.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-hook-form": "^7.54.1",
  "react-router-dom": "^7.0.2",
  "tailwind-merge": "^2.5.5",
  "tailwindcss-animate": "^1.0.7",
  "zod": "^3.24.1"
}
```

**DevDependencies:**

```json
{
  "@eslint/js": "^9.15.0",
  "@types/node": "^22.10.2",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "eslint": "^9.15.0",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.12.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.16",
  "typescript": "~5.6.2",
  "typescript-eslint": "^8.15.0",
  "vite": "^6.0.1"
}
```

---

## 🎥 Demo

Check out the demo video of the app: [Demo Link](#)  
_Presented using [Loom](https://www.loom.com/)._
