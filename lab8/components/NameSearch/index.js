class NameSearch extends React.Component {

  readName(event){
    event.preventDefault();

    let element = document.querySelector("#name");

    fetch("http://localhost:80/name/" + element.value)
    .then((res) => {

    return res.json();
    })
    .then ((processed) => {
    let reporting = document.querySelector("#reportingArea");

    if(processed.error){
       reporting.innerHTML = processed.error;
    }else{
       reporting.innerHTML = processed.name;
    }
    });
    element.value = "";
    
  }
  render() {
    return (
      <div>
        <h3>Pokemon Name</h3>
        <form onSubmit={this.readName}>
          <input type="text" id="name"></input>
          <button>Submit</button>
        </form>
      </div>

    );
  }
}

export default NameSearch;