import { Card, Col, Container, Form, Row } from "react-bootstrap"
import React from 'react'
import { v4 as uuidv4 } from 'uuid';
function Gallery({actorsData}){
    const[valueName,setvalueName] = React.useState("");
    const showTypedActor = (event) =>{
        setvalueName (event.target.value)
    }

    const carCard = actorsData
    .filter(actor => 
        actor.fName.toLowerCase().includes(valueName.toLowerCase())||actor.lName.toLowerCase().includes(valueName.toLowerCase())
    )
    
    
    
    .map ( actor => {
        return(
    <Col xs={6} md={4} key={uuidv4()}>
    <Card >
    <Card.Img variant="top" src={actor.imgUrl} alt = {`${actor.fName} ${actor.lName}`} />
        <Card.Body>
        <Card.Title>{actor.lName} {actor.fName}</Card.Title>
        <Card.Text>
                age: {actor.age()}
        </Card.Text>
        <Card.Text>
                <a href={actor.imdbLink} target="_blank" rel="noreferrer">IMdb</a>
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
        )
    })
 
    return(
    <Container>
    <Row>
        <input type="text" value={valueName} onChange={showTypedActor}/>
        <Form.Control as="select">
            <option>Sort</option>
        </Form.Control>
    </Row>
    <Row>
        
        {carCard}
        
    </Row>
    </Container>
    )

}
export default Gallery