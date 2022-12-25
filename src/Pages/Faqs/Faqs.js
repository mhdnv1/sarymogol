import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './faqs.scss'

const Faqs = () => {
    return (
        <div className="faqs">
            <div className="faqs__bg">
                <h3>Faqs</h3>
            </div>
            <div className="container-fluid">
                <h2 className="text-center my-4">Frequently Asked Questions</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Why are your tours so expensive?</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>How many tours do you have?</Accordion.Header>
                        <Accordion.Body>
                        Currently we have more than 10 tours. You definitely will like them all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Why are your tours so expensive?</Accordion.Header>
                        <Accordion.Body>
                        Varius massa maecenas et id dictumst mattis. Donec fringilla ac parturient posuere id phasellus erat elementum nullam lacus cursus rhoncus parturient vitae praesent quisque nascetur molestie quis
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Why are your tours so expensive?</Accordion.Header>
                        <Accordion.Body>
                        Currently we have more than 10 tours. You definitely will like them all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Why are your tours so expensive?</Accordion.Header>
                        <Accordion.Body>
                        Currently we have more than 10 tours. You definitely will like them all!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Why are your tours so expensive?</Accordion.Header>
                        <Accordion.Body>
                        Currently we have more than 10 tours. You definitely will like them all!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default Faqs;
