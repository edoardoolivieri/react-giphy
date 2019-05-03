// const Hello = ({ name }) => {
//   return (
//     <div className="firstreactdiv">
//       Hello,
//       {name}
//     </div>
//   );
// };

class Hello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      counter: 0
    };
  }

  handleClick= () => {
    //change the state
    this.setState({
      clicked: !this.state.clicked,
      counter:  this.state.counter + 1
    });
  }

  render() {
    return (
      // build and return html
      <div className="firstreactdiv">
        <div className={this.state.clicked ? 'clicked' : null }
            onClick={this.handleClick}>
          Hello {this.props.name} {this.state.counter}
        </div>
      </div>
    );
  }
}
