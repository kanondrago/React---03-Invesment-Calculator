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

      <table id="result">
        <thead>
          <tr class="center">
            <th>Year</th>
            <th>Invesmentment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="center">1</td>
            <td>$600</td>
            <td>$1,200</td>
            <td>$11,800</td>
            <td>$11,800</td>
          </tr>
          <tr>
            <td class="center">2</td>
            <td>$708</td>
            <td>$1,200</td>
            <td>$13,708</td>
            <td>$13,708</td>
          </tr>
          <tr>
            <td class="center">3</td>
            <td>$822</td>
            <td>$1,200</td>
            <td>$15,730</td>
            <td>$15,730</td>
          </tr>
          <tr>
            <td class="center">4</td>
            <td>$944</td>
            <td>$1,200</td>
            <td>$17,874</td>
            <td>$17,874</td>
          </tr>
          <tr>
            <td class="center">5</td>
            <td>$1,072</td>
            <td>$1,200</td>
            <td>$20,147</td>
            <td>$20,147</td>
          </tr>
          <tr>
            <td class="center">6</td>
            <td>$1,209</td>
            <td>$1,200</td>
            <td>$22,556</td>
            <td>$22,556</td>
          </tr>
          <tr>
            <td class="center">7</td>
            <td>$1,353</td>
            <td>$1,200</td>
            <td>$25,109</td>
            <td>$25,109</td>
          </tr>
          <tr>
            <td class="center">8</td>
            <td>$1,507</td>
            <td>$1,200</td>
            <td>$27,815</td>
            <td>$27,815</td>
          </tr>
          <tr>
            <td class="center">9</td>
            <td>$1,669</td>
            <td>$1,200</td>
            <td>$30,684</td>
            <td>$30,684</td>
          </tr>
          <tr>
            <td class="center">10</td>
            <td>$1,841</td>
            <td>$1,200</td>
            <td>$33,725</td>
            <td>$33,725</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default App
