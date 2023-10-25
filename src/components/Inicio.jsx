import React from "react";
import '../inicio.css';
// dependencia de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// dependecias de react-bootstrap componetes 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
// img
import portada from '../imagenes';
function Inicio(){
    return (
      <main>
     
    <section >
      <div >
    <Card className="bg-dark text-white">
      <Card.Img class="img-fluid" id="imgPortada" src={portada.img3} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
    </section>

      <section>
        <div className="flex flex-col items-center text-center mobile:space-y-1 tablet:space-y-2 desktop:space-y-3">
       <div className="titulo">
      <p className="text-3xl md:text-4xl font-bold font-display leading-tight"><samp>Inspírate con nuestras tendencias</samp> </p>
      <p className="text-lg font-display max-w-5xl text-puma-grey-100 "><samp> y crea tu propio estilo.</samp> </p>
      </div>      
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://source.unsplash.com/600x700/?/hombre" />
        <Card.Body>
          <Card.Title>Catalogo hombre</Card.Title>
          <Card.Text>
          <Button variant="dark">Ver mas</Button>
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="https://source.unsplash.com/600x700/?/mujer" />
        <Card.Body>
          <Card.Title>Catalogo mujer</Card.Title>
          <Card.Text>
          <Button variant="dark">Ver mas</Button>
          </Card.Text>
        </Card.Body>
      </Card>

    </CardGroup>

        </div>
      </section>
    
    </main>
      );
}


export default Inicio ;