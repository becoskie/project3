import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Dashboard.css";
import Card from "../../components/Card"
import Title from "../../components/Title"

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
                name=""
                description=""
              />
            </Col>
            <Col size="md-2">
                <Card
                name=""
              />
            </Col>
            <Col size="md-2">
                <Card
                name=""
              />
            </Col>

            <Col size="md-2">
                <Card
                
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
