import './App.css';
import { AppErrorBoundary } from './AppErrorBoundary';
import ClickCounter from './ClickCounter';
import { DatePicker } from 'antd';
import React from 'react';
import { Hello } from './Hello';

export function App() {
  return (
    <AppErrorBoundary>
      <h4>Hello from app</h4>
      <ClickCounter />
      <DatePicker />
      <Hello />
    </AppErrorBoundary>
  );
}
