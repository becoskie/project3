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
import "./Home.css";
import Card from "../../components/Card"
import Title from "../../components/Title"

class Home extends Component {
  

  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-12">
          <div class="jumbotron">
      <div class="container">
        <h1 class="display-3">Hello, world!</h1>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">LOGIN or SIGNUP &raquo;</a></p>
      </div>
    </div>
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

export default Home;
