import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [theme, setTheme] = useState("theme1");
  const operators = ["+", "-", "*", "/", "."];

  const onButtonClickHandler = (e) => {
    const value = e.target.value;
    console.log("value", value);
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    } else if (value === "0" && result === "0") {
      console.log("result is zero", result);
      setCalc("0");
      return;
    } else {
      const calcValue = calc + e.target.value;
      setCalc(calcValue.toString());
      const res = eval(calc + value);
      setResult(String(res));
    }
  };
  const displayResult = () => {
    if (calc === "") {
      return;
    }
    console.log(eval(calc));
    setCalc(eval(calc).toString());
  };
  const resetHandler = () => {
    setCalc("");
  };
  const onDelhandler = () => {
    console.log("calc is", calc.slice(-1));
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const onThemeChangeHandler = (e) => {
    console.log(e.target.value);
    setTheme(e.target.value);
  };
  return (
    <main className={`bg-color ${theme ? theme : ""}`}>
      <div className="calcutator">
        <div className="logo-theme">
          <div className="logo">calc</div>
          <div className="theme-heading">THEME</div>
          <div className="theme" onChange={onThemeChangeHandler}>
            <div className="nums">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
            <div className="radio-wrapper">
              <input type="radio" name="theme" id="theme1" value="theme1" />
              <input type="radio" name="theme" id="theme2" value="theme2" />
              <input type="radio" name="theme" id="theme3" value="theme3" />
            </div>
          </div>
        </div>
        <div className="result-box">{calc}</div>
        <div className="calc-box">
          <button className="btn-num" onClick={onButtonClickHandler} value={7}>
            7
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={8}>
            8
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={9}>
            9
          </button>
          <button className="btn-num del" onClick={onDelhandler} value="DEL">
            DEL
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={4}>
            4
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={5}>
            5
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={6}>
            6
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value="+">
            +
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={1}>
            1
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={2}>
            2
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={3}>
            3
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value="-">
            -
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value=".">
            .
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value={0}>
            0
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value="/">
            /
          </button>
          <button className="btn-num" onClick={onButtonClickHandler} value="*">
            x
          </button>

          <button
            className="btn-num reset"
            onClick={resetHandler}
            value="RESET"
          >
            RESET
          </button>
          <button className="btn-num equal" onClick={displayResult} value="=">
            =
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
