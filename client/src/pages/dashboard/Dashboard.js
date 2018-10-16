import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Results from "../../components/Results";
import Saved from "../../components/Saved";
import "./Dashboard.css";
import Card from "../../components/Card"
import Title from "../../components/Title"
import Wrapper from "../../components/Wrapper"

class Dashboard extends Component {
  

  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>
                  <i className="fa fa-newspaper-o" /> Welcome
                </strong>
              </h1>
            </Jumbotron>
          </Col>    
        </Row>
        <Row>
            <Col size="md-12">
                <Title><h2 style={{textAlign:"center"}}>Your Projects</h2></Title>
            </Col>
        </Row>
        <Row>
        
            <Col size="md-2"></Col>
            <Col size="md-2">
            <Card
                name="CSS"
                description="Would like to go deeper."
                image="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
              />
            </Col>
            <Col size="md-2">
                <Card
                 name="ES6"
                 description="Breaking habits."
                 image="https://cdn-images-1.medium.com/max/1200/1*SL4sWHdjGR3vo0x5ta3xfw.jpeg"
              />
            </Col>
            <Col size="md-2">
                <Card
                name="Testing"
                description="Pretty important."
                image="https://mherman.org/assets/img/blog/mocha-chaijs.png"
              />
            </Col>

            <Col size="md-2">
            <Card
                name="Java"
                description="Start from scratch."
                image="https://cdn-images-1.medium.com/max/960/1*ZGEUEy_SifxtHG-CSAWsZA.png"
              />
            </Col>

            <Col size="md-2"></Col>
        
        </Row>
        <br></br><br></br>
        <Row>
        <Col size="md-2"></Col>
          <Col size="md-8">
          <Title>
          <h2 style={{textAlign:"center", backgroundColor:"lightgrey", padding:"25px"}}>
          Make A Project Suggestion</h2>
          </Title>
          </Col>
        <Col size="md-2"></Col>
        </Row>
        
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
          <form>
            <Input 
              placeholder="Title of project!"
            />
            <TextArea
              style={{height:"125px"}} 
              placeholder="Describe your project!"
            />
            <FormBtn style={{height:"125px"}}>Submit</FormBtn>
          </form>
          </Col>
          <Col size="md-2"></Col>
        </Row>
        <br></br>
        <Row>
        <Col size="md-2"></Col>
          <Col size="md-8">
          <Title>
          <h2 style={{textAlign:"center", backgroundColor:"lightgrey", padding:"25px"}}>
          Vote on a Project</h2>
          </Title>
          </Col>
        <Col size="md-2"></Col>
        </Row>
      </Container>
      
    );
  }
}

export default Dashboard;
