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
import $ from 'jquery';

class Dashboard extends Component {

  constructor(props){
    super(props);
    this.state= {
      user:{},
      title: {},
      description: [],
      date: {},
      url: "",
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  //   const $newPitchInput = $("input.new-pitch");
  //   const $pitchContainer = $(".pitch-container");

  // $(document).on("click", "button.submit", insertPitch);
  // $(document).on("click", "button.up-vote", upVote);
  // $(document).on("click", "button.down-vote", downVote);
  // $(document).on("click", "button.comments", toggleComments);
  } 
  
  

  validatePitch(title){
    //this validates that there is something in the pitch form
    return{
      title: this.state.title === 0
    };
  }
  componentWillMount(){

  }

  //   handleChange = (event) => {
  //       this.setState(
  //           {title: event.target.value}
  //       );
  //       console.log(event.target.value)
  //
  //   }
  // handleSubmit = (e) => {
  //   // console.log("this works")
  //     e.preventDefault();
  //     const t = e.target.name;
  //     // console.log(this.state.title)
  //     this.setState({
  //         title: t
  //     })
  //     console.log(t)
  //
  // }

    handleChange = (event) => {
        this.setState({
            title: event.target.value,
            // description: event.target.value
        });
    }

    handleChange2 = (event) => {
        this.setState({
            // title: event.target.value,
            description: event.target.value
        });
    }

    handleSubmit = (event) => {
        // alert('A name was submitted: ' + this.state.title);
        event.preventDefault();
        this.setState({
            title: event.target.value
        })
        console.log(this.state)
    }

    pitchContainer = (props) => {
        let titleLength = Object.keys(this.state.title).length;
        let descriptionLength = Object.keys(this.state.description).length;
    }

  

  render() {
    return (
        <Container fluid>
        <Row>
        {/* <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150"> </a> */}
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <i className="fa fa-user" /> Welcome<h1 style={{fontWeight:"bolder", fontSize: "64px", color:"blue"}}>{this.state.username}</h1>
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
              onChange={this.handleChange}
              value={this.state.title}
            />
            <TextArea
              style={{height:"125px"}} 
              placeholder="Describe your project!"
              onChange={this.handleChange2}
              value={this.state.description}
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
          <Col size="md-8" id="pitches">{this.pitchContainer()}</Col>
          <Col size="md-2"></Col>
        </Row>
      </Container>
      
    );
  }
}

export default Dashboard;