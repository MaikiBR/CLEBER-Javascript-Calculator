import logo from './logo.svg';
import './App.css';

function App() {
  var list = [];
  var allNumber = "";

  //#region Functions
  function operation(a) {
    if (a === '+' || a === '-' || a === '*' || a === '/') {
        list.push(' ' + a + ' ');
    } else {
        list.push(a);
    }
    document.getElementById("result").innerHTML = list.join('');
  }

  function evaluate(exp) {
    const regex = /^[\d\s()+\-*/.,]+$/ ; 
    if (!regex.test(exp)) {
      console.log('Entrada no válida.'); // Basic error reporting.
    }
    return eval(exp);
  }

  function joinList() {
    allNumber = list.join('');
  }

  function calc(list) {
    joinList(list);
    document.getElementById("result").innerHTML = evaluate(allNumber);
    document.getElementById("curr").innerHTML = allNumber;
    list = [];
  }

  function del() {
    list.pop();
    document.getElementById("result").innerHTML = list.join('');
  }

  function reset() {
    list = [];
    document.getElementById("result").innerHTML = "0";
    document.getElementById("curr").innerHTML = "";
  }

  //#endregion

  return (
    <div className="calculator-view">
      <div className="calculator-container">
        <div className="calculator">
          <h6 id="curr"></h6>
          <h3 id="result">0</h3>
          <div className="calc-buttons-container">

            <section className="btn-section">
              <input type="button" value="AC" className='clear-btn' onClick={reset}></input>
              <input type="button" value="&larr;" className="delete-btn" onClick={del}></input>
              <input type="button" value="/" className="operator-btn" onClick={() => operation('/')}></input>
            </section>

            <section className="btn-section">
              <input type="button" value="7" className='num-btn' onClick={() => operation(7)}></input>
              <input type="button" value="8" className='num-btn' onClick={() => operation(8)}></input>
              <input type="button" value="9" className='num-btn' onClick={() => operation(9)}></input>
              <input type="button" value="+" className='operator-btn' onClick={() => operation('+')}></input>
            </section>

            <section className="btn-section">
              <input type="button" value="4" className='num-btn' onClick={() => operation(4)}></input>
              <input type="button" value="5" className='num-btn' onClick={() => operation(5)}></input>
              <input type="button" value="6" className='num-btn' onClick={() => operation(6)}></input>
              <input type="button" value="-" className='operator-btn' onClick={() =>operation('-')}></input>
            </section>

            <section className="btn-section">
              <input type="button" value="1" className='num-btn' onClick={() => operation(1)}></input>
              <input type="button" value="2" className='num-btn' onClick={() => operation(2)}></input>
              <input type="button" value="3" className='num-btn' onClick={() =>operation(3)}></input>
              <input type="button" value="*" className='operator-btn' onClick={() => operation('*')}></input>
            </section>

            <section className="btn-section">
              <input type="button" value="," className='num-btn' onClick={() =>operation('.')}></input>
              <input type="button" value="0" className='num-btn' onClick={() =>operation(0)}></input>
              <input type="button" value="=" className='equal-btn' onClick={() => calc(list)}></input>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
