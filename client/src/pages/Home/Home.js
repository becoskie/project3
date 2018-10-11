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


class Home extends Component {
  

  render() {
    return (
      <Container fluid>
        {/* <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>NYT Search</h1>
            </Jumbotron>
            <form>
              <h4>Topic</h4>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Topic"
              />
              <h4>Start Year</h4>
              <Input
                value={this.state.startYear}
                onChange={this.handleInputChange}
                name="startYear"
                placeholder="start year"
              />
              <h4>End Year</h4>
              <Input
                value={this.state.endYear}
                onChange={this.handleInputChange}
                name="endYear"
                placeholder="end year"
              />
              <FormBtn
                disabled={!(this.state.title && this.state.startYear && this.state.endYear)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>

          <Col size="md-6">
            <Jumbotron>
              <h1>Searched Articles</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <List>
                {this.state.articles.map(article => (
                  <Results
                      url={article.web_url}
                      title={article.headline.main}
                      date={article.pub_date}
                      key={article._id}
                      _id={article._id}
                      handleSaveButton = {this.handleSaveButton} 
                  />
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

        </Row>
        <Row>
          <Col size="md-12">
          <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.saved.length ? (
              <List>
                {this.state.saved.map(article => (
                  <Saved
                      url={article.url}
                      title={article.title}
                      date={article.date}
                      key={article._id}
                      _id={article._id}
                      handleDeleteButton = {this.handleDeleteButton}
                  />
                ))}
              </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row> */}
      </Container>
      
    );
  }
}

export default Home;
