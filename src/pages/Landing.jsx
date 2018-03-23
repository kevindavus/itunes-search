import React, { Component } from 'react';
import Wrapper from '../components/shared/PageWrapper';
import Header from '../components/shared/PageHeader';
import Button from '../components/Landing/Button';
import Container from '../components/Landing/Container';
import Input from '../components/Landing/Input';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
    };

    this.changeTerm = this.changeTerm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeTerm(e) {
    this.setState({ artist: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/Artist/${this.state.artist}`);
  }

  render() {
    return (
      <div>
        <Header />
        <Wrapper>
          <Container>
            <form onSubmit={this.handleSubmit}>
              <Input placeholder="Jack Johnson" onChange={this.changeTerm} />
              <Button type="submit"> Search </Button>
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Landing;
