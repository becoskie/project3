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
                <Title><h1 style={{textAlign:"center"}}></h1>Our goals for You!</Title>
            </Col>
        </Row>
        <Row>
        <Col size="md-2">
        </Col>
            <Col size="md-8">
                <p style={{textAlign:"center",fontSize: 32}}>His wish stares across the younger conduct. His automobile exports the cabinet abstract opposite the passenger. The world parses an once shirt. The diagonal snail reckons beside the unpredictable space. A disgusting tangent drags the remainder around the allowed specialist.</p>
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

        {/* <section class="features19 cid-qIpf9Jg0yJ" id="features12-b"> */}

    
{/* <Grid>
  <Row>
    <Col xs={6} md={4}>
      <Image src="/thumbnail.png" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="/thumbnail.png" circle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="/thumbnail.png" thumbnail />
    </Col>
  </Row>
</Grid>
     */}
    {/* <div class="container">
        <h2 class="mbr-section-title align-left mbr-fonts-style mbr-bold display-2">
            <span style="font-weight: normal;">3. Read our blog to understand our philosophy</span></h2>

        
        <div class="row justify-content-center align-items-start">
            
            <div class="card px-3 py-4 col-md-4">
                <div class="card-wrapper flip-card">
                    <div class="card-img">
                        <img src="assets/images/nathan-dumlao-314125-1920x1280.jpg" alt="eCommerce Website Template Cafe" title="">
                        <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">Customer story</div>
                    </div>
                    <div class="card-box">
                        <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2"><span style="font-weight: normal;">Excellent coffee</span></h3>
                        <p class="mbr-card-text mbr-fonts-style align-center display-7">The coffee at eCommerce Website Template for Cafe is quite a deliciousness.</p>
                        <div class="mbr-section-btn align-center">
                            <a href="https://mobirise.com" class="btn btn-md btn-info display-4">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card px-3 py-4 col-md-4">
                <div class="card-wrapper flip-card">
                    <div class="card-img">
                        <img src="assets/images/redd-angelo-32872-1200x800.jpg" alt="eCommerce Website Template for Cafe" title="">
                        <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">
                             Outlook
                        </div>
                    </div>
                    <div class="card-box">
                        <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2"><span style="font-weight: normal;">Nice staff</span></h3>
                        <p class="mbr-card-text mbr-fonts-style align-center display-7">
                            The&nbsp;Cafe treats you with the best services with a smile.</p>
                        <div class="mbr-section-btn align-center">
                            <a href="https://mobirise.com" class="btn btn-md btn-info display-4">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card px-3 py-4 col-md-4">
                <div class="card-wrapper flip-card">
                    <div class="card-img">
                        <img src="assets/images/tim-arterbury-101472-1200x800.jpg" alt="eCommerce Website Template Cafe" title="">
                        <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">Kitchen stories</div>
                    </div>
                    <div class="card-box">
                        <h3 class="mbr-title mbr-fonts-style mbr-bold mbr-black align-center display-2"><span style="font-weight: normal;">Tasty delecacies&nbsp;</span></h3>
                        <p class="mbr-card-text mbr-fonts-style align-center display-7">
                            Featured&nbsp;delecacies cooked and served to excite you paired with a cup of coffee.</p>
                        <div class="mbr-section-btn align-center">
                            <a href="https://mobirise.com" class="btn btn-md btn-info display-4">Read More</a>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</section> */}
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
