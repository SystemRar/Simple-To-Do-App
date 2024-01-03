import React from 'react';
import './AppInfo.css';

interface AppInfoProps {
  employees: number;
  increased: number;
}

function AppInfo({ employees, increased }: AppInfoProps) {
  return (
    <div className="app-info">
      <h1>Task manager</h1>
      <h2>
        Total number of tasks:
        {' '}
        {employees}
      </h2>
      <h2>
        Urgent tasks:
        {' '}
        {increased}
      </h2>
    </div>
  );
}

export default AppInfo;
