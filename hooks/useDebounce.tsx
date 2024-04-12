"use client";
import React, { useState, useEffect } from "react";

interface IDebounce {
  value: string;
  delay: number;
}
export default function useDebounce({ value, delay }: IDebounce) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
