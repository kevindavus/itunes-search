import React, { Component } from "react";
import Wrapper from "../components/shared/PageWrapper";
import Header from "../components/shared/PageHeader";
import Button from "../components/Landing/Button";
import Container from "../components/Landing/Container";
import Input from "../components/Landing/Input";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ""
    };

    this.changeTerm = this.changeTerm.bind(this);
  }

  changeTerm(e) {
    this.setState({ artist: e.target.value });
  }

  render() {
    return (
      <Wrapper>
        <Header>iTunes Searchitron 9000</Header>
        <Container>
          <Input placeholder="Jack Johnson" onChange={this.changeTerm} />
          <Button to={`Artist/${this.state.artist}`}> Search </Button>
        </Container>
      </Wrapper>
    );
  }
}

export default Landing;
