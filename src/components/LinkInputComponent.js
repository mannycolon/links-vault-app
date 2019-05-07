import React from 'react';
import PropTypes from 'prop-types'

const LinkInputComponent = ({
  urlValue,
  handleUrlSubmit,
  handleUrlChange
}) => {
  return (
    <form onSubmit={handleUrlSubmit}>
      <label>
        New url:
        <input type="text" value={urlValue} onChange={handleUrlChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

LinkInputComponent.propTypes = {
  urlValue: PropTypes.string.isRequired,
  handleUrlSubmit: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
}

export default LinkInputComponent;