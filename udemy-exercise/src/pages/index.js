import {useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Home() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)
  const [count, setCount] = useState(1)
  const [stepper, setStepper] = useState(1)

    const date = new Date('july 4 2025');
  date.setDate(date.getDate() + count);
  const previousHandler =()=> {
    if(step > 1) setStep(step- 1)
  }
  const nextHandler =()=> {
    if(step <3) setStep(step+1)
  }

  return (
      <>
        <button className='close' onClick={()=>setIsOpen(prevState => !prevState)}>&times;</button>
        {isOpen && (
      <div className='steps'>
    <div className='numbers'>
    <div className={step>=1? "active":""}>1</div>
    <div className={step>=2 ?"active":""}>2</div>
    <div className={step>=3 ?"active":""}>3</div>
    </div>
    <p className={'message'}>
      Step {step}:{`${messages [step-1]}`}
    </p>
    <div className={'buttons'}>
    <button style={{backgroundColor:"#7950f2", color:"#fff",margin:"4px 12px", }} onClick={previousHandler}><span style={{padding:"6px"}}>previous</span></button>
      <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={nextHandler}><span style={{padding: "6px 12px"}}>next</span>
      </button>
    </div>
      </div>)}

          <div className= 'steps'>
              <div className= 'message' style= {{flexDirection: 'row',justifyContent: 'center' }}>
                  <button style={{backgroundColor:"#7950f2", color:"#fff",padding:"4px 12px", fontSize:"30px",margin:"10px" }} onClick={() => setStepper(s => s - 1)}>-</button>
                  <span>Step: {stepper}</span>
                  <button  style={{backgroundColor:"#7950f2", color:"#fff",padding:"2px 12px", fontSize:"30px",margin:"10px" }} onClick={() => setStepper(s => s + 1)}>+</button>
              </div>
              <div className= 'message' style= {{flexDirection: 'row',justifyContent: 'center' }}>
                  <button style={{backgroundColor:"#7950f2", color:"#fff",padding:"4px 12px", fontSize:"30px",margin:"10px" }} onClick={() => setCount(c => c - stepper)}>-</button>
                  <span>Count: {count}</span>
                  <button style={{backgroundColor:"#7950f2", color:"#fff",padding:"2px 12px", fontSize:"30px",margin:"10px" }}  onClick={() => setCount(c => c + stepper)}>+</button>
              </div>
              <p className={'message'}>
                  <span>{count === 0
                      ?" today is "
                      : count >0
                          ? `${count} days from today is `
                          : `${Math.abs(count)} days ago was ` }</span>
                  <span>{date.toDateString() }</span>
              </p>
          </div>
      </>
  )

}
