import Header from './components/Header' 
import Calculator from './components/Calculator' 
import Table from './components/Table' 
import { useState } from "react"

//util
import {calculateInvestmentResults, formatter} from './util/investment'


function App() {

  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [value3, setValue3] = useState('')
  const [value4, setValue4] = useState('')

  function handleChange1(value) {
    setValue1(value);
  }
  function handleChange2(value) {
    setValue2(value);
  }
  function handleChange3(value) {
    setValue3(value);
  }
  function handleChange4(value) {
    setValue4(value);
  }



  // using util
  const data = {
    initialInvestment: +value1, 
    annualInvestment: +value2, 
    expectedReturn: +value3, 
    duration: +value4
  }

  // Calculator working
  const anualData = calculateInvestmentResults(data);
  
  console.log('anualData: ', anualData);

  return (
    <>

      <Header></Header>

      <Calculator 
        onHandleChange1={handleChange1}
        onHandleChange2={handleChange2}
        onHandleChange3={handleChange3}
        onHandleChange4={handleChange4}
      >
      </Calculator>

      <Table
        anualData={anualData}
        initialInvestment={value1}
        annualInvestment={value2}
        expectedReturn={value3}
        duration={value4}
      >
      </Table>
    
    </>
  )
}

export default App
