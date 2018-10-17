import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Dashboard.css";
import Card from "../../components/Card";
import Title from "../../components/Title";
import getUser from "../../utils/api";

class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    }
  }

  componentDidMount(){
    console.log(this.props);
    getUser().then ( response => {
        console.log(response.data);
        if(response.data.user) {
          this.setState({
            username: response.data.user.username
          });
        }
        
    }

    )
  }

  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>
                  <i className="fa fa-newspaper-o" /> Welcome <h1 style={{fontWeight:"bolder", fontSize: "64px", color:"blue"}}>{this.state.username}</h1>
                </strong>
              </h1>
            </Jumbotron>
          </Col>    
        </Row>
        <Row>
            <Col size="md-12">
                <Title style={{textAlign:"center"}}>Your Projects</Title>
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
          <Title style={{textAlign:"center", backgroundColor:"lightgrey", padding:"25px"}}>
          Make A Project Suggestion
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
          <Title style={{textAlign:"center", backgroundColor:"lightgrey", padding:"25px"}}>
          Vote on a Project
          </Title>
          </Col>
        <Col size="md-2"></Col>
        </Row>
      </Container>
      
    );
  }
}

export default Dashboard;
