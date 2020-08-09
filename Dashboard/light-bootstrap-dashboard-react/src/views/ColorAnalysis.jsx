import React, { Component } from "react";
import { SketchPicker } from "react-color";
import {
  Grid,
  Row,
  Col,
  Table,
  Modal,
  Button as Btn,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
 

class ColorAnalysis extends Component {
    state = {
      Color: {
        color1: {
          r: 0,
          g: 0,
          b: 0,
        },
        color2: {
          r: 0,
          g: 0,
          b: 0,
        }
      },
      list: [],
      show: false,
      i:"length",
    };

 
  handleChangeComplete = (color) => {
    let v = this.state.Color;
    v.color1.r = color.rgb.r;
    v.color1.g = color.rgb.g;
    v.color1.b = color.rgb.b;
    console.log(v);
    this.setState({ Color: v });
  };
  handleChangeComplete2 = (color) => {
    let v = this.state.Color;
    v.color2.r = color.rgb.r;
    v.color2.g = color.rgb.g;
    v.color2.b = color.rgb.b;
    this.setState({ Color: v });
  };

  handleClose = (event)=> {
    this.setState({ show: false });
  }


  postcolors = (event) =>{
    console.log(this.state.Color);
 
    let res = this.state.Color;
    

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    

    var raw = JSON.stringify(this.state.Color);

    var requestOptions = {
      method: "POST",
      mode:"cors",
      crossDomain: true,
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/color", requestOptions)
      .then((response) => response.json())
      .then((result) => this.setState({list:result}))
      .catch((error) => console.log("error", error));
  }

  render() {
    
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4}>
              <h2 className="category">Color 1</h2>
              <SketchPicker
                color={this.state.Color.color1}
                onChangeComplete={this.handleChangeComplete}
              />
            </Col>
            <Col lg={4}>
              <h2 className="category">Color 2</h2>
              <SketchPicker
                color={this.state.Color.color2}
                onChangeComplete={this.handleChangeComplete2}
              />
            </Col>
            <Col lg={4}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "180px",
                }}>
                <Button bsStyle="success" onClick={this.postcolors}>
                  Get Combinations
                </Button>
              </div>
            </Col>
          </Row>
          <Row>
            <div style={{ padding: "20px" }}>
              <h3>Trending</h3>
              <Table responsive striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Color 1</th>
                    <th>Color 2</th>
                    <th>Color 3</th>
                    <th>Desc</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {this.state.list.map((obj,i) => {
                    return (
                      <tr>
                        <td>{i + 1}</td>
                        <td>
                          <div
                            style={{
                              height: "30px",
                              width: "150px",
                              backgroundColor: `rgb(${obj.color1.r},${obj.color1.g},${obj.color1.b}`,
                            }}></div>
                        </td>
                        <td>
                          <div
                            style={{
                              height: "30px",
                              width: "150px",
                              backgroundColor: `rgb(${obj.color2.r},${obj.color2.g},${obj.color2.b}`,
                            }}></div>
                        </td>
                        <td>
                          <div
                            style={{
                              height: "30px",
                              width: "150px",
                              backgroundColor: `rgb(${obj.color3.r},${obj.color3.g},${obj.color3.b}`,
                            }}></div>
                        </td>
                        <td>
                          <Button onClick={this.handleShow = () => { this.setState({ show: true, i:i});} }>
                            view image
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Modal bsSize="medium" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div style={{ paddingLeft: "72px" }}>
                    <img src={`http://127.0.0.1:8000/${this.state.list[this.state.i].image}`} />
                    <p>
                      Pattern : {this.state.list[this.state.i].pattern} <br />
                                  Average Rating : {this.state.list[this.state.i].avg_rating} <br />
                                  Number of reviews : {this.state.list[this.state.i].n_reviews} <br />
                    </p>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Btn onClick={this.handleClose}>Close</Btn>
                </Modal.Footer>
              </Modal>
            </div>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ColorAnalysis;