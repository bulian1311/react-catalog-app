import React from 'react';

const AlertTemplate = ({ message, options, style, close }) => {
  return (
    <div>
      {options.type === 'info' && (
        <div className="alert alert-primary mt-5">
          <i className="fas fa-info fa-lg mr-2" />
          <b>{message}</b>
        </div>
      )}

      {options.type === 'success' && (
        <div className="alert alert-success mt-5">
          <i className="fas fa-check fa-lg mr-2" />
          <b>{message}</b>
        </div>
      )}

      {options.type === 'error' && (
        <div className="alert alert-danger mt-5">
          <i className="fas fa-times fa-lg mr-2" />
          <b>{message}</b>
        </div>
      )}
    </div>
  );
};

export default AlertTemplate;
