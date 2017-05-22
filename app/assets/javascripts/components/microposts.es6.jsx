class Microposts extends React.Component {
  render () {
    return (
      <div>
        <h2>All microposts here</h2>
        {this.props.microposts.map(function(x){
          return(
            <p key={x.id}>
              <a href={ "/microposts/" + x.id }> {x.name}</a> {x.email}
              <hr/>
            </p>
          )
        })}
      </div>
    )
  }
}
