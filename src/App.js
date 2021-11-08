import { useState, useEffect } from 'react';
import './App.css';

function App() {
  
  // 숫자 눌렀을때 담기는곳
  const [text1 , setText1 ] = useState(0);
  const [text2 , setText2 ] = useState(0);
  // 사칙연산
  const [sum , setSum ] = useState("");
  const [res, setRes] = useState("");

  useEffect(()=> {
    if(sum === ""){
      if(text1 !== ""){
          setRes(text1)
        }else if(text2 !== ""){
          setRes(text2)
        }
    }else{
      if(sum === "+"){
        setRes(text1 + text2)
      }else if(sum === "-"){
        setRes(text1 - text2)
      }else if(sum === "*"){
        setRes(text1 * text2)
      }else if(sum === "/"){
        setRes(text1 / text2)
      }
    }
   
  },[sum, text1, text2, setRes])

  console.log("Res", res)
  console.log("text1", text1)
  console.log("text2", text2)
  
  return (
    <section className="App">
      <input value={res}></input>
      <Button setSum={setSum} ></Button>
      <Numbers setText1={setText1} setText2={setText2} sum={sum}></Numbers>
    </section>
  );
}



const Numbers = (props) => {
  
  const textOne = props.setText1
  const texttwo = props.setText2
  
  const [ page , setPage] = useState("")


  // 해야할것! 지금은 이벤트 두개로 나눠서. 사칙연산부분 나오기 전에는 text1으로 나오고 난 후에는 text2로 한다음. 그 값을 sum의 값에 맞춰서 if 조건문을 주었다. 해야할것은 명확. 클릭할때마다 값이 담겨야 하며 text1과 text2가 명확하게 나타나야 한다. 기획을 좀더 해보자.
  const onClicks = (e) => {
    if(props.sum === ""){
      textOne(e.target.value)
    }else if(props.sum !== ""){
      texttwo(e.target.value)
    }
  }

  return (
    <div>
      <button type="submit" value="1" onClick={onClicks}>1</button>
      <button type="submit" value="2" onClick={onClicks}>2</button>
      <button type="submit" value="3" onClick={onClicks}>3</button>
      <button type="submit" value="4" onClick={onClicks}>4</button>
      <button type="submit" value="5" onClick={onClicks}>5</button>
      <button type="submit" value="6" onClick={onClicks}>6</button>
      <button type="submit" value="7" onClick={onClicks}>7</button>
      <button type="submit" value="8" onClick={onClicks}>8</button>
      <button type="submit" value="9" onClick={onClicks}>9</button>
      {props.children}
    </div>
  )
}

const Button = (props) => {
  

  const onclicks = (e) => {
    props.setSum(e.target.value)
  }

  return (
    <div>
      <button value="+" onClick={onclicks}> + </button>
      <button value="-" onClick={onclicks}> - </button>
      <button value="*" onClick={onclicks}> * </button>
      <button value="/" onClick={onclicks}> / </button>
      <button value="=" onClick={onclicks}> = </button>
      {props.children}
    </div>
  )
}

export default App;
