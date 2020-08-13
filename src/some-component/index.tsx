import React from 'react';

export interface SomeComponentProps {
  text: string;
}

export function SomeComponent({text}: SomeComponentProps) {
  return (
    <div>👋 {text}</div>
  );
}