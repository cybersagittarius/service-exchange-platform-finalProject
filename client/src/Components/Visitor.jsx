import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Visitor() {
    const cardStyle = {
        width:'18rem',
        margin:'1rem 1.5rem',
        borderRadius:'10px',
        boxShadow:'0 5px 15px rgba(0,0,0,0.3)',
        cursor:'pointer'
    }
    console.log("Hello there")
    return (
        <>
        <div id="visitor">
        <div className="title">
           <h3>Show Case</h3> 
       <Link to="/register">
           <Button variant="outline-danger" block className=" visitor"> Join</Button>
       </Link>
       </div>
       <div className="underline"></div>

        <div className="showCase">
        <Card style={cardStyle}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Oliver Smith</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt beatae accusantium accusamus ratione recusandae aspernatur molestias, commodi dicta exercitationem.
    </Card.Text>
    <Link to="/notfound">
    <Button variant="outline-danger" block>More Info</Button>
    </Link>
  </Card.Body>
</Card>
   <Card style={cardStyle}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Charlotte Johnson</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt beatae accusantium accusamus ratione recusandae aspernatur molestias, commodi dicta exercitationem.
    </Card.Text>
    <Link to="/notfound">
    <Button variant="outline-danger" block>More Info</Button>
    </Link>
  </Card.Body>
</Card>
   <Card style={cardStyle}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Liam Williams</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt beatae accusantium accusamus ratione recusandae aspernatur molestias, commodi dicta exercitationem.
    </Card.Text>
    <Link to="/notfound">
    <Button variant="outline-danger" block>More Info</Button>
    </Link>
  </Card.Body>
</Card>
       <Card style={cardStyle}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Emma Brown</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt beatae accusantium accusamus ratione recusandae aspernatur molestias, commodi dicta exercitationem.
    </Card.Text>
    <Link to="/notfound">
    <Button variant="outline-danger" block>More Info</Button>
    </Link>
  </Card.Body>
</Card>
   <Card style={cardStyle}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>David Garcia</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt beatae accusantium accusamus ratione recusandae aspernatur molestias, commodi dicta exercitationem.
    </Card.Text>
    <Link to="/notfound">
    <Button variant="outline-danger" block>More Info</Button>
    </Link>
  </Card.Body>
</Card>
   <Card style={cardStyle}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Nora Davis</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui sunt beatae accusantium accusamus ratione recusandae aspernatur molestias, commodi dicta exercitationem.
    </Card.Text>
    <Link to="/notfound">
    <Button variant="outline-danger" block>More Info</Button>
    </Link>
  </Card.Body>
</Card>
</div>
 </div>
</>
    )
}

export default Visitor
