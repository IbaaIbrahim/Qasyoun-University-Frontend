'use client';
import { useEffect, useRef, useState } from "react";

type CounterProps = {
  min: number;
  max: number;
  cls?: string;
  decimals?: number;
};

export default function CounterItem({ min, max, cls = 'purecounter', decimals = 0 }: CounterProps) {
  const [counted, setCounted] = useState<number>(min);
  const targetElement = useRef<HTMLSpanElement>(null); // Add type annotation for useRef

  const startCountup = () => {
    const step = (max - min) / 20;
    const intervalId = setInterval(() => {
      setCounted((pre) => {
        const tempCount = pre + step;
        if (tempCount >= max) {
          clearInterval(intervalId);
          return max;
        } else {
          return tempCount;
        }
      });
    }, 70);
  };

  useEffect(() => {
    function handleIntersection(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCounted(min);
          startCountup();
        }
      });
    }

    // Options for the Intersection Observer
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px", 
      threshold: 0.5,
    };

    // Create an Intersection Observer and pass in the callback function and options
    const observer = new IntersectionObserver(handleIntersection, options);

    // Start observing the target element
    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      setCounted(min);
      observer.disconnect(); // Disconnect the observer when component unmounts
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={targetElement} className={cls}>
      {decimals > 0 ? counted.toFixed(decimals) : Math.floor(counted)}
    </span>
  );
}
