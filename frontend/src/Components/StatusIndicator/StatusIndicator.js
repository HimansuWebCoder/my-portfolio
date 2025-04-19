import React from 'react';
import './StatusIndicator.css'; // styles below

const StatusIndicator = ({ status }) => {
  const renderDot = () => {
    switch (status) {
      case 'completed':
        return <span className="dot completed">&#10003;</span>; // ✓ check mark
      case 'ongoing':
        return <span className="dot ongoing"></span>; // blinking dot
      case 'pending':
        return <span className="dot pending"></span>; // gray static dot
      default:
        return null;
    }
  };

  return (
    <div className="status-container">
      {renderDot()}
      <span className="label">{status.charAt(0).toUpperCase() + status.slice(1)}</span>
    </div>
  );
};

export default StatusIndicator;
