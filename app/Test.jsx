import React, {Component} from 'react'

export default class TestComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  static propTypes = {
    testVal: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <span>whee!{this.testVal}</span>)
  }
}
