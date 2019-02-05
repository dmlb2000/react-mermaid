import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mermaid, {mermaidAPI} from 'mermaid';

class Mermaid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      diagram: 'Loading diagram...'
    };
  }

  componentDidMount () {
    mermaidAPI.render(this.props.name, this.props.children.toString(), (html) => this.setState({diagram: html}));
  }

  render () {
    return (
      <div className="mermaid" dangerouslySetInnerHTML={{__html: this.state.diagram}}></div>
    )
  }
}

Mermaid.propTypes = {
  name: PropTypes.string
};

Mermaid.defaultProps = {
  name: 'mermaid'
};

export default Mermaid;
