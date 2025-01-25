import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function Component1() {

    const [n1,setn1]=useState(0);
    const [n2,setn2]=useState(0);
    const [res,setnres]=useState(0);

    const storen1=(e)=>{
        setn1(parseFloat(e.target.value))
    }

    const storen2=(e)=>{
        setn2(parseFloat(e.target.value))
    }
    const addition=(e)=>{
        var c =n1+n2;
        setnres(c)
    }

    const substraction=(e)=>{
        var c =n1-n2;
        setnres(c)
    }

    const multiplication=(e)=>{
        var c =n1*n2;
        setnres(c)
    }

    const division=(e)=>{
        var c =n1/n2;
        setnres(c)
    }

  return (
    <>
    <div style={{ marginLeft: '650px' }}>
        <h1>Calculator</h1>
        <form>
      <input type="number"  placeholder='Enter first value' 
      onChange={storen1}
      />
      <br/>
      <input type="number"  placeholder='Enter second value' onChange={storen2} />
      <br/>
      <input className="btn btn-outline-secondary" type="button" value="ADD" onClick={addition} />
      <input className="btn btn-outline-secondary" type="button" value="SUB" onClick={substraction} />
      <input className="btn btn-outline-secondary" type="button" value="MUL" onClick={multiplication} />
      <input className="btn btn-outline-secondary" type="button" value="Div" onClick={division} />
      </form>
      <h2>Result:{res}</h2>
      <br/>

    </div>
    </>
  )
}

export default Component1