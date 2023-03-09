import React from "react";
import PropTypes from "prop-types";
import { Col } from "reactstrap";

function Loading({ message }) {
  return (
    <Col style={{ marginTop: 300 }}>
      <div className="loading">
        <div className="loading-spinner"></div>
        <div className="loading-text">{message}</div>
      </div>
    </Col>
  );
}

Loading.propTypes = {
  message: PropTypes.string,
};

Loading.defaultProps = {
  message: "Loading...",
};

export default Loading;
