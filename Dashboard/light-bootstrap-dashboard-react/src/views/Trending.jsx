import React, { Component } from "react";
import { Grid, Col } from "react-bootstrap";

import Card from "components/Card/Card";

class Trending extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`http://127.0.0.1:8000/trending`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Success:", data);
        this.setState({ data, data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          {this.state.data.map((obj,i) => {
            return (
              <Col lg={4}>
                <Card
                  statsIcon="pe-7s-user-female"
                  title={`Trending - ${i + 1}`}
                  category="Women Tops"
                  content={
                    <div>
                      <img src={`http://127.0.0.1:8000${obj.image}`} height ="425" width="332"/>
                      <hr />
                      <span>{obj.pattern}</span>
                    </div>
                  }
                />
              </Col>
            );
          })}

          
        </Grid>
      </div>
    );
  }
}

export default Trending;
