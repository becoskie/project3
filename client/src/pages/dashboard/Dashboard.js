import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Dashboard.css";
import Card from "../../components/Card";
import Title from "../../components/Title";
import getUser from "../../utils/api";
import API from "../../utils/pitchApi";
import PitchContainer from "../../components/PitchContainer"

class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      title: "",
      description: "",
      date: {},
      url: "",
      titlesAndDescriptions: []
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
        title: event.target.value,
        description: event.target.value,
        titlesAndDescriptions: [...this.state.titlesAndDescriptions].concat({title: this.state.title, description: this.state.description, upVote: 0, downVote: 0})
    })
    const userInput = {
      title: this.state.title,
      description:this.state.description,
      username:this.state.username
    };
    console.log(userInput)
    API.savePitch(userInput);
}

// //this is the code that needs to be finished 
// handleUpVote = (event) => {
//   console.log(event.target);
//   const arrayIndex = parseInt(event.target.getAttribute("data-index"))
//   const newtitlesAndDescriptions = this.state.titlesAndDescriptions
//   newtitlesAndDescriptions[arrayIndex] = this.state.titlesAndDescriptions
//   this.setState({

//   })

// }

pitchContainer = (props) => {
    let titleLength = Object.keys(this.state.title).value;
    let descriptionLength = Object.keys(this.state.description).value;
}


  render() {
    return (
        <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                <strong>
                  <i className="fa fa-user" /> Welcome <h1 style={{fontWeight:"bolder", fontSize: "64px", color:"blue"}}>{this.state.username}</h1>
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
          <form action="POST">
            <Input
              // className="new-pitch"
              placeholder="Title of project!"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <TextArea
              // className="new-pitch"
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
        {/* <Row>
          <Col size="md-2"></Col>
          <Col size="md-8" id="pitches">{this.pitchContainer()}</Col>
          <Col size="md-2"></Col>
        </Row> */}
        <Row>
        <Col size="md-2"></Col>
        <Col size="md-8" id="pitch-container" style={{textAlign:"center"}}>{this.state.titlesAndDescriptions.map((pair, index )=> {
        return <PitchContainer title={pair.title} handleUpVote={this.handleUpVote} upVote={pair.upVote} index={index} description={pair.description} downVote={pair.downVote}/>})}</Col>
        <Col size="md-2"></Col>
        </Row>
        <br></br><br></br><br></br>
      </Container>
      
    );
  }
}

export default Dashboard;
