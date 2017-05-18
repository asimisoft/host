class Micropost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  _touchedMe() {
    alert("Ouch");
  }

  render () {
    let open = <a className="clicker" onClick={this._touchedMe.bind(this)}>Show</a>

    if(this.state.clicked) {
      open = <div>
        <h2> {this.props.micropost.name} </h2>
        <p> {this.props.micropost.email} </p>
      </div>
    }

    return (
            <div>
              {open}
            </div>
    )
  }
}
