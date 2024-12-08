import { memo } from "react";
import {Card} from "react-bootstrap"
import { Link } from "react-router-dom"
import "./card.css"


const CardComp = ({image,heading,text,navigate}) => {
  return (
    <Card id="cardContainer" style={{ width: '100%', textAlign:"center" }}>
      <Card.Img id="cardImg" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{heading}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
        <Link to={navigate} style={{cursor:"pointer" ,fontSize:"large", textDecoration:"none", color:"#0072CE !important", fontWeight:"600"}}>Read More</Link>
      </Card.Body>
    </Card>
  )
}

export default memo(CardComp)