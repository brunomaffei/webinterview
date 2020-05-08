import React from 'react';
import {Form, Col, Row} from 'react-bootstrap'
import '../styles/styles.css'

const Contact = () => {

  return(
    <div className="imgcontact mb-6">
    <img src="http://cdainterview.com/resources/contact-us.png" alt="Contact" class="center">
    </img>
    <div className="container-fluid col-md-6 .col-md-offset-3">
    <h6>BeMo Academic Consulting Inc.</h6>
    <br>
    </br>
    <h8><u>Toll Free:</u> 1-855-900-BeMo (2366)</h8>
    <br>
    </br>
    <h8><u>Email: </u>info@bemoacademicconsulting.com</h8>
    <br>
    </br>
    <br>
    </br>
    <Form>
    <Form.Group controlId="exampleForm.ControlInput1">
     <Form.Label>NAME: *</Form.Label>
     <Form.Control type="text" placeholder="Name">
     </Form.Control>
    </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>EMAIL ADDRESS: *</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>HOW CAN WE HELP YOU? *</Form.Label>
    <Form.Control as="textarea" rows="4" />
  </Form.Group>
</Form>
<Form>
  <Row>
    <Col>
    <button class="btnForm">Reset</button>
    </Col>
    <Col>
     <button class="btnForm">Submit</button>
    </Col>
  </Row>
</Form>
<br>
</br>
<br>
</br>

<span style={{fontsize:15, color: "#000", textalign: "center!important" }}><u>Note:</u> If you are having difficulties with our contact us form above, send us an email to info@bemoacademicconsulting.com (copy & paste the email address)<br></br></span>
<br></br>
</div>
</div>
  )
}

export default Contact
