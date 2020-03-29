class IdSearch extends React.Component {
  
  readId(event){

    event.preventDefault();

    let input = document.querySelector("#id");

    fetch("/api/pokemon/id/" + input.value)
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
    
  }
  render (){
    return (
      <div>
        <h3>Pokemon ID</h3>
        <form onSubmit={this.readId}>
          <input type="text" id="id"></input>
           <button>Submit</button>
         </form>
      </div>

    );
  }

}

export default IdSearch; 