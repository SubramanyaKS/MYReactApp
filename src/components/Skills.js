import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
export default function Skills() {
    return (
        <>
        <section className="skills py-5">
            <div className="container-fluid ">
            <h2 className="text-center"> &nbsp; Skills.</h2><br /><br></br>
                
            
                            <Card style={{ width: "10rem" }}>
                
                                <Card.Body>
                                <Card.Img  src="./images/css3.png" />
                                <Card.Img  src="./images/html.png" />
                                <Card.Img src="./images/javascript.png" />
                                </Card.Body>
                            </Card>
                        
                
                 </div>
        </section>
        </>
    );

}