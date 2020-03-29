class TypelistSearch extends React.Component {

  readTypelist(event) {
    event.preventDefault();
    let input = document.querySelector("#type");

    fetch("/api/pokemon/typeList/" + input.value)
    .then((res) => {
      return res.json();
    }).then((processed) => {
      let reporting = document.querySelector("#reportingArea");

      if(processed.error) {
        reporting.innerHTML = processed.error;
      }else {
          console.log(processed);
          processed.forEach(index => {
              reporting.innerHTML += "<br> " + index.name;
          });
      }
    });
  }
  render() {
    return (
      <div>
        <h3>Pokemon Typelist</h3>
        <form onSubmit={this.readTypelist}>
          <input type="text" id="type"></input>
          <button>Submit</button>
        </form>
      </div>

    );
  }
}

export default TypelistSearch;