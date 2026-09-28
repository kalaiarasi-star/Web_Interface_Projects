import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState(""); 
  const [history, setHistory] = useState([]); //array 

  const display = (value) => {
    setResult((prevResult) => prevResult + value);
  };

  const clearScreen = () => {
    setResult("");
  };

  const calculate = () => {
    const calculatedResult = eval(result);

    setHistory((prevHistory) => [
      ...prevHistory,
      `${result} = ${calculatedResult}`,
    ]);

    setResult(calculatedResult.toString());
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <>
      <h1>Calculator App</h1>

      <div className="main-container">

        {/* Calculator */}
        <div className="calculator-container">
          <table className="calculator">
            <tbody>

              {/* Display */}
              <tr>
                <td colSpan="3">
                  <input
                    className="display-box"
                    type="text"
                    value={result}
                    disabled
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="C"
                    onClick={clearScreen}
                    id="btn"
                  />
                </td>
              </tr>

              {/* Row 1 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value="1"
                    onClick={() => display("1")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="2"
                    onClick={() => display("2")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="3"
                    onClick={() => display("3")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="/"
                    onClick={() => display("/")}
                  />
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value="4"
                    onClick={() => display("4")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="5"
                    onClick={() => display("5")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="6"
                    onClick={() => display("6")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="-"
                    onClick={() => display("-")}
                  />
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value="7"
                    onClick={() => display("7")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="8"
                    onClick={() => display("8")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="9"
                    onClick={() => display("9")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="+"
                    onClick={() => display("+")}
                  />
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value="."
                    onClick={() => display(".")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="0"
                    onClick={() => display("0")}
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="="
                    onClick={calculate}
                    id="btn"
                  />
                </td>

                <td>
                  <input
                    type="button"
                    value="*"
                    onClick={() => display("*")}
                  />
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* History */}
        <div className="history-container">
          <div className="history-header">
            <h2>Calculation History</h2>

            <button onClick={clearHistory}>
              Clear History
            </button>
          </div>

          <div className="history-list">

            {history.length === 0 ? (
              <p className="empty-history">
                No calculations yet
              </p>
            ) : (
              history.map((item, index) => (
                <div className="history-item" key={index}>
                  {item}
                </div>
              ))
            )}

          </div>
        </div>

      </div>
    </>
  );
}

export default Calculator;