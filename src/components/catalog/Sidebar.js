import React, { Component } from 'react';

export class Sidebar extends Component {
  render() {
    return (
      <div className="collapse text-light" id="navbarToggleExternalContent">
        <div className="bg-primary p-4">
          <h5 className="text-white h4">Отфильтровыть</h5>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Test tag 1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Test tag 2
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
