import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';

export default function Forecast() {
  return (
    <Accordion className="mx-auto p-0 shadow" defaultActiveKey="0">
      <Accordion.Item className="pt-0" eventKey="0">
        <Accordion.Header className="p-0">Five Day Forecast</Accordion.Header>
        <Accordion.Body >
          <Row>
            <Col>
              <ul>
                <li className="Weather-forecast">
                  <div className="d-flex justify-content-between">
                    <div>
                      Saturday 🌤
                    </div>
                    <div>
                      <strong>67º</strong> | 56º
                    </div>
                  </div>
                </li>
                <li className="Weather-details-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      Sunday ☀️
                    </div>
                    <div>
                      <strong>69º</strong> | 50º
                    </div>
                  </div>
                </li>
                <li className="Weather-details-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      Monday ☀️
                    </div>
                    <div>
                      <strong>70º</strong> | 63º
                    </div>
                  </div>
                </li>
                <li className="Weather-details-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      Tuesday 🌤
                    </div>
                    <div>
                      <strong>60º</strong> | 53º
                    </div>
                  </div>
                </li>
                <li className="Weather-details-item">
                  <div className="d-flex justify-content-between">
                    <div>
                      Wednesday ☀️
                    </div>
                    <div>
                      <strong>70º</strong> | 63º
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>

  );
}
