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
import Wrapper from "../../components/Wrapper"

class Home extends Component {
  

  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>
                  <i className="fa fa-newspaper-o" /> Login or Signup to meet others like you!
                </strong>
              </h1>
            </Jumbotron>
          </Col>    
        </Row>
        <Row>
            <Col size="md-12">
                <Title><h1 style={{textAlign:"center"}}></h1>Our goals for You!</Title>
            </Col>
        </Row>
        <Row>
        <Col size="md-2">
        </Col>
            <Col size="md-8">
                <p style={{textAlign:"center",fontSize: 32}}>With our Boot Camp winding down and future employment on the horizon, we decided to create an app that would provide us with a place to continue our education and coding practice with fellow classmates and those wishing to grow their skills.</p>
                <p style={{textAlign:"center",fontSize: 32}}>After Class provides that opportunity for users to login and pick the projects or courses that they would like to be involved with.  The user will also be able to vote on a project that they are interested in building with fellow collaborators.</p>
                <p style={{textAlign:"center",fontSize: 32}}>The group will schedule ongoing practice lessons to enhance their knowledge base in areas such as HTML, CSS, Javascript, AJAX, JQuery, etc.</p>
                <p style={{textAlign:"center",fontSize: 32}}>Project meet up locations will be based on group attendee suggestions.  </p>
            </Col>
            <Col size="md-2">
        </Col>
        </Row>
        <br></br>
        <br></br>
        <Row>
            <Col size="md-12">
                <Title><h2 style={{textAlign:"center"}}>Join these Projects!</h2></Title>
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
          Make A Project Suggestions for what you want to cover!</h2>
          </Title>
          </Col>
        <Col size="md-2"></Col>
        </Row>
        
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8">
          <form>
            <Input 
            style={{textAlign:"center"}} 
              placeholder="Title of project you would like to cover!"
            />
            <TextArea
              style={{height:"125px", textAlign:"center"}} 
              placeholder="Describe your project to all of our users to get more votes!"
            />
          </form>
          </Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
      
    );
  }
}

export default Home;
