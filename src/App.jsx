import logoImage from './assets/investment-calculator-logo.png' 


function App() {

  // Logic adding - working

  return (
    <>
      <div id="header">
        <img src={logoImage} alt="" />
        <h1>React Investment Calculator</h1>
      </div>

      <div id="user-input">
        <div className="input-group">
          <div>
            <label>INICIAL INVESTMENT</label>
            <input type="number" />
          </div>
          <div>
            <label>ANUAL INVESTMENT</label>
            <input type="number" />
          </div>
        </div>
        <div className="input-group">
          <div>
            <label>EXPECTED RETURN</label>
            <input type="number" />
          </div>
          <div>
            <label>DURATION</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
