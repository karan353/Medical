import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Appointment = () => {
  return (
    <section id="appointment">
      <Container>
        <div className="text-center my-5">
          <h2>Make an Appointment</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <form action="" method="post" role="form">
          <Row>
            <Col md={4} className="form-group mt-3 mt-md-0">
              <input
                type="text"
                name="name"
                className="form-control shadow-none"
                id="name"
                placeholder="Your Name"
                required
              />
            </Col>
            <Col md={4} className="form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control shadow-none"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </Col>
            <Col md={4} className="form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control shadow-none"
                name="phone"
                id="phone"
                placeholder="Your Phone"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col md={4} className="form-group mt-3">
              <input
                type="datetime"
                name="date"
                className="form-control shadow-none datepicker"
                id="date"
                placeholder="Appointment Date"
                required
              />
            </Col>
            <Col md={4} className="form-group mt-3">
              <select
                name="department"
                id="department"
                className="form-select shadow-none"
              >
                <option value="">Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>
            </Col>
            <Col md={4} className="form-group mt-3">
              <select
                name="doctor"
                id="doctor"
                className="form-select shadow-none"
              >
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
            </Col>
          </Row>

          <div className="text-center">
            <Button type="submit" className="m-3 btn-get-started scrollto">
              Make an Appointment
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Appointment;
