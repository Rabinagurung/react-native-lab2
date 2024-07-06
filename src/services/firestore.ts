import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { Todo } from '../types/Todo';

export const addTodo = async ({
  text,
  isCompleted
}: {
  text: string;
  isCompleted: boolean;
}) => {
  const docRef = await addDoc(collection(db, 'todos'), {
    text: text,
    isCompleted: isCompleted
  });
  return docRef.id;
};

export const removeTodo = async (id: string) => {
  await deleteDoc(doc(db, 'todos', id));
};

export const toggleTodo = async (id: string, isCompleted: boolean) => {
  await updateDoc(doc(db, 'todos', id), { isCompleted });
};

export const getTodos = async () => {
  const querySnapshot = await getDocs(collection(db, 'todos'));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as Todo[];
};
