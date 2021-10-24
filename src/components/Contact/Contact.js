import React from 'react';
import { Form, Row , Col , FloatingLabel} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    return (
        <div>
            <Form>
                <h2>Contact Us</h2>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>

            <Form.Group className="mb-2" controlId="formGridAddress1">
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-2" controlId="formGridAddress2">
                <Form.Control placeholder="Apartment or floor" />
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '200px' }}
                />
            </FloatingLabel>

            <Button variant="success" type="submit">
                Submit
            </Button>
</Form>
        </div>
    );
};

export default Contact;