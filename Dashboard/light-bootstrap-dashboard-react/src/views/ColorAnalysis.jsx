import React, { Component } from "react";
import { SketchPicker } from "react-color";
import {
  Grid,
  Row,
  Col,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
 

class ColorAnalysis extends Component {
  state = {
    Color: {
      Color1: "#fff",
      Color2: "#fff",
    },
  };

  handleChangeComplete = (color) => {
    const v = this.state.Color;
    v.Color1 = color.hex;
    this.setState({ Color: v });
  };
  handleChangeComplete2 = (color) => {
    const v = this.state.Color;
    v.Color2 = color.hex;
    this.setState({ Color: v });
  };
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4}>
              <h2 className="category">Color 1</h2>
              <SketchPicker
                color={this.state.Color.Color1}
                onChangeComplete={this.handleChangeComplete}
              />
            </Col>
            <Col lg={4}>
              <h2 className="category">Color 2</h2>
              <SketchPicker
                color={this.state.Color.Color2}
                onChangeComplete={this.handleChangeComplete2}
              />
            </Col>
            <Col lg={4}>
              <div style={{ display: "flex", alignItems: "center", paddingTop: "180px" }}>
                <Button bsStyle="success" onClick={this.postcolors} >Get Combinations</Button>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ColorAnalysis;