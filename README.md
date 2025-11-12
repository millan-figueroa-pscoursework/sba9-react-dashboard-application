### SBA 9: React Fundmentals

# React Task Manager App

## Overview

The Task Manager app is a simple React and TypeScript project that lets users create, edit, delete, filter, and sort tasks. It saves tasks to localStorage so they stay after refreshing the page. The app was built to demonstrate understanding of React components, state management, TypeScript integration, and form handling.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite

### Clone the repository:

```
git clone <https://github.com/millan-figueroa-pscoursework/sba9-react-dashboard-application.git>
```

### Navigate to the project folder:

```
cd task-manager
```

### Install dependencies:

```
npm install
```

### Start the development server:

```
npm run dev
```

Open your browser and go to the URL shown in the terminal (usually http://localhost:5173).<br><br><br>

## Reflection Questions

### How you implemented React and TypeScript features

I used React functional components with TypeScript to make sure my props and state were clear and typed correctly. I learned how to define interfaces for components and how to use useState and useEffect for managing state and side effects. I also learned about using id: crypto.randomUUID() to generate unique IDs for each task without needing any extra libraries.

### The challenges you encountered and how you overcame them

Off the top this project was overwhelming because of all the moving parts but after working on the last 3 labs I have developed a routine that helped me work faster and more efficiently. I also re-used some of the logic from my lab 9.3 task management app and integrated it with different components. One challenge was figuring out how to keep data saved after refreshing the page, fixed by using localStorage and loading tasks from it when the app starts. I also struggled at first with knowing what logic to move into taskUtils and how to properly type everything, but I figured it out by focusing on keeping only pure, reusable functions in the utils file. I also had an issue with dropdowns flashing, which I believe can be solved by adding a loading state.

### Your approach to component composition and state management

The folder structure already had components broken up, so I focused on connecting them with props and shared state. Initially all everything was in App but I moved and managed the main task data in the Dashboard and passed functions to child components to update or display that data, following a similar pattern that I used in labs 9.2-9.3. This helped keep the logic in one place while keeping the components simple and easy to understand.
