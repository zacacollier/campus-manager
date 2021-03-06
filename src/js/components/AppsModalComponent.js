import * as React from 'react';
import {
  Modal, Button, Row, Col, FormGroup, ControlLabel, FormControl, Checkbox,
  InputGroup, Alert
} from 'react-bootstrap';
const FontAwesome = require('react-fontawesome');

module.exports = React.createBackboneClass({
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Apps</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={4} className="text-center">
              <a className="btn btn-white" href="https://chat.austincodingacademy.com" target="blank">
                <FontAwesome name="rocket" fixedWidth={true} size="3x" />
                <br />
                &nbsp;Chat
              </a>
            </Col>
            <Col xs={4} className="text-center">
              <a className="btn btn-white" href="https://calendar.austincodingacademy.com" target="blank">
                <FontAwesome name="calendar" fixedWidth={true} size="3x" />
                <br />
                &nbsp;Calendar
              </a>
            </Col>
            <Col xs={4} className="text-center">
              <a className="btn btn-white" href="https://jobs.austincodingacademy.com" target="blank">
                <FontAwesome name="usd" fixedWidth={true} size="3x" />
                <br />
                &nbsp;Jobs
              </a>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col xs={4} className="text-center">
              <a className="btn btn-white" href="https://discourse.austincodingacademy.com" target="blank">
                <FontAwesome name="group" fixedWidth={true} size="3x" />
                <br />
                &nbsp;Discourse
              </a>
            </Col>
            <Col xs={4} className="text-center">
              <a className="btn btn-white" href="https://student.austincodingacademy.com" target="blank">
                <FontAwesome name="book" fixedWidth={true} size="3x" />
                <br />
                &nbsp;Handbook
              </a>
            </Col>
            <Col xs={4} className="text-center">
              <a className="btn btn-white" href="https://jitsi.austincodingacademy.com" target="blank">
                <FontAwesome name="video-camera" fixedWidth={true} size="3x" />
                <br />
                &nbsp;Jitsi
              </a>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
});
