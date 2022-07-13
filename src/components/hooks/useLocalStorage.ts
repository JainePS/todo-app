import { useState, useEffect } from "react";
import { ITodos } from '../AddTodoComponent';

function getStorageValue(key: string, defaultValue: any) {
  // getting stored value
  const saved: any = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}
const defaultValue = {};
export const useLocalStorage = (key: string, defaultValue?: ITodos) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
