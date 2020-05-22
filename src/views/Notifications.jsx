import React, {useState} from "react";

import NotificationAlert from "react-notification-alert";

import {
  Alert,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Row,
  Col,
  Button
} from "reactstrap";


import PanelHeader from "components/PanelHeader/PanelHeader.jsx";
import { useRef } from "react";

const Notifications = () => {
  const [visible, setVisible] = useState(true)

  const onDismiss = () => {
    setVisible(false)
  }

  const notificationAlert = useRef();

  const notify = place => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    let options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "now-ui-icons ui-1_bell-53",
      autoDismiss: 7
    };
    notificationAlert.current.notificationAlert(options);
  }
    return (
      <>
      <PanelHeader
        content={
          <div className="header text-center">
            <h2 className="title">Notifications</h2>
            <p className="category">
              Please Checkout{" "}
              <a
                href="https://github.com/creativetimofficial/react-notification-alert"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Full Documentation
              </a>
              .
            </p>
          </div>
        }
      />
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notifications Style</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert color="info">
                  <span>This is a plain notification</span>
                </Alert>
                <Alert
                  color="info"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span>This is a notification with close button.</span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon.
                  </span>
                </Alert>
                <Alert
                  color="info"
                  className="alert-with-icon"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span
                    data-notify="icon"
                    className="now-ui-icons ui-1_bell-53"
                  />
                  <span data-notify="message">
                    This is a notification with close button and icon and have
                    many lines. You can see that the icon and the close button
                    are always vertically aligned. This is a beautiful
                    notification. So you don't have to worry about the style.
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Notification states</CardTitle>
              </CardHeader>
              <CardBody>
                <Alert
                  color="primary"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span>
                    <b> Primary - </b> This is a regular notification made
                    with color="primary"
                  </span>
                </Alert>
                <Alert
                  color="info"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span>
                    <b> Info - </b> This is a regular notification made with
                    color="info"
                  </span>
                </Alert>
                <Alert
                  color="success"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span>
                    <b> Success - </b> This is a regular notification made
                    with color="success"
                  </span>
                </Alert>
                <Alert
                  color="warning"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span>
                    <b> Warning - </b> This is a regular notification made
                    with color="warning"
                  </span>
                </Alert>
                <Alert
                  color="danger"
                  isOpen={visible}
                  toggle={() => onDismiss}
                >
                  <span>
                    <b> Danger - </b> This is a regular notification made with
                    color="danger"
                  </span>
                </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={12} xs={12}>
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col md={6} className="ml-auto mr-auto text-center">
                      <CardTitle tag="h4">
                        Notifications Places
                        <p className="category">
                          Click to view notifications
                        </p>
                      </CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tl")}
                          >
                            Top Left
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tc")}
                          >
                            Top Center
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("tr")}
                          >
                            Top Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={8} xs={12} className="ml-auto mr-auto">
                      <Row>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("bl")}
                          >
                            Bottom Left
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("bc")}
                          >
                            Bottom Center
                          </Button>
                        </Col>
                        <Col md={4} xs={12}>
                          <Button
                            color="primary"
                            block
                            onClick={() => notify("br")}
                          >
                            Bottom Right
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
    )
}


export default Notifications;
