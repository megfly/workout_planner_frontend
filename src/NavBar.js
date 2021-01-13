import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap'

export default function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">My Workout Planner</Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/workouts">Workouts</Nav.Link>
        <Nav.Link href="/exercises">Exercises</Nav.Link>
        <Nav.Link href="/workouts/new">New Workout</Nav.Link>
 
        </Nav>
        <Nav>
        {/* <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </div>
    )
}


