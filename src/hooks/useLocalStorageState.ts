import { useEffect, useState } from "react";

export function useLocalStorageState<T>(key: string, initialValue: T): [T, (v: T) => void] {
  const [internalValue, setIntervalValue] = useState<T>(initialValue);

  const setValue = (v: T) => {
    setIntervalValue(v);
    if (v === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(v));
    }
  };

  useEffect(() => {
    const readValue = localStorage.getItem(key);
    setIntervalValue(readValue === null ? initialValue : JSON.parse(readValue) as T);
  }, [key, initialValue]);

  return [
    internalValue,
    setValue,
  ];
}
