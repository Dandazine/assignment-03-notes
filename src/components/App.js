
function App() {

  function keyCreate (){
    let numArray = [];
    for (let i =0; i < 10; i++){
     numArray.push(<button key={i}>{i}</button>)
    }
    return(
      numArray
    )
  }

  return (
    <section className="calculator">
      <div className="display">
        <span>(0)</span> 0
      </div>
        
      {/* Make this entire thing a grid ??  */}
      <div className="op-buttons">
        <button>*</button>
        <button>/</button>
        <button>+</button>
        <button>-</button>
        <button>%</button>
        <button>√</button>
        <button>C</button>
        <button>AC</button>
      </div>

      <div className="nums">
        {keyCreate()}
        <button>.</button>
        <button>=</button>
      </div>
    </section>
  );
}

export default App;
