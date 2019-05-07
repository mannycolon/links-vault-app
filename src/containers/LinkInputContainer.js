import React from 'react';
import { connect } from 'react-redux';
// components
import LinkInputComponent from '../components/LinkInputComponent'
// actions
import { addNewLink } from '../redux/actions/LinkInputActions'

class LinkInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlValue: ''
    }
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleUrlSubmit = this.handleUrlSubmit.bind(this)
  }

  handleUrlChange(event) {
    this.setState({urlValue: event.target.value});
  }

  handleUrlSubmit(event) {
    event.preventDefault();
    this.props.addNewLink(this.state.urlValue)
  }

  render() {
    return (
      <div>
        <LinkInputComponent
          urlValue={this.state.urlValue}
          handleUrlSubmit={this.handleUrlSubmit}
          handleUrlChange={this.handleUrlChange}
        />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addNewLink: (url) => dispatch(addNewLink(url)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinkInputContainer);
