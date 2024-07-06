# Todo App with Firebase

**Todo App** is a modern mobile application designed to help users manage their tasks efficiently. Built with React Native and organized using a modular folder structure, the app ensures a clean and scalable codebase. The integration with Firebase allows for real-time data synchronization and persistent storage, enhancing the overall user experience.

<p align="center">
  <img src="https://firebasestorage.googleapis.com/v0/b/food-app-9e90b.appspot.com/o/Chatgpt%2Fchat_blank.png?alt=media&token=90cf5866-c8ff-4e77-bc4f-918206028ea8" alt="Chat Screen" width="200" style="margin-right: 10px;" />
  <img src="https://firebasestorage.googleapis.com/v0/b/food-app-9e90b.appspot.com/o/Chatgpt%2Fchat_typoing.png?alt=media&token=a6f26efe-d460-46ab-bb12-2b3fab8512f5" alt="Chat Send" width="200" style="margin-right: 10px;" />
  <img src="https://firebasestorage.googleapis.com/v0/b/food-app-9e90b.appspot.com/o/Chatgpt%2Fchat.png?alt=media&token=6148e098-aceb-4e0c-a0b5-a06343f5eb25" alt="Ai response" width="200" style="margin-right: 10px;" />
</p>

## Features

**Todo App** offers a comprehensive set of features to help users keep track of their tasks:
- **Add Tasks:** Easily add new tasks to your todo list.
- **Complete Tasks:** Mark tasks as completed to keep track of your progress. Completed tasks are shown with a check mark and a line through the text.
- **Delete Tasks:** Remove tasks that are no longer needed.
- **Real-time Sync:** All tasks are stored in Firebase, providing real-time synchronization across devices.
- **User-friendly Interface:** Designed with an intuitive UI to make managing tasks simple and enjoyable.

## Technologies Used

- Frontend: React Native
- State Management: React Hooks
- Networking: Firebase Firestore for data storage and synchronization

## Folder Structure

The project is organized using the following modular folder structure to maintain clean and scalable code:

```bash
/src
  /components
    /Header.tsx
    /TodoInput.tsx
    /TodoItem.tsx
  /config
    /firebaseConfig.ts
  /services
    /firestore.ts
  /types
    /Todo.ts
/App.tsx

```

## Getting Started

To get started with Todo app, follow these steps:

1. Clone the repository:
    ```bash
    git clone git@github.com:Rabinagurung/react-native-lab2.git
    ```
2. install dependencies
   ```bash
   cd react-native-lab2
   npm install

   ```
3. Setup Firebase:
 - Create a Firebase project in the Firebase console.
 - Obtain your Firebase configuration details.
 - Update a firebaseConfig.ts file in the src/config directory and add your configuration:
    ```Typescript
      // Import the functions you need from the SDKs you need
    import { initializeApp } from 'firebase/app';
    import { getFirestore } from 'firebase/firestore';
    import { fbConfig } from './config';

    const firebaseConfig = {
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID',
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const db = getFirestore(app);
  
    ```
4. Build and Run:
  ```bash
    npm start
  ```

