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
import Form from "../../components/Form"

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state= {
      user:{},
      title: "",
      description: "",
      date: {},
      url: ""
    }
  }

  validatePitch(title){
    //this validates that there is something in the pitch form
    return{
      title: this.state.title === 0
    };
  }
  componentWillMount(){

  }
  handleSubmit(event){
    event.preventDefault()
    console.log("this works")
  }

  // api.
  

  render() {
    return (
        <Container fluid>
        <Row>
        {/* <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150"> </a> */}
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong><i className="fa fa-user" /> Welcome</strong>
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
            <FormBtn style={{height:"125px"}} onClick={this.handleSubmit}>Submit</FormBtn>
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
        <Row>
          <Col size="md-2"></Col>
          <Col size="md-8" id="pitches"></Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
      
    );
  }
}

export default Dashboard;
