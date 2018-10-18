import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Dashboard.css";
import Card from "../../components/Card"
import Title from "../../components/Title"
import Wrapper from "../../components/Wrapper"
import Form from "../../components/Form"
import $ from 'jquery';
import getUser from "../../utils/api";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      title: "",
      description: [],
      date: {},
      url: "",
    }
  }

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
          <Title style={{textAlign:"center", backgroundColor:"lightgrey", padding:"25px"}}>
          Vote on a Project
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
