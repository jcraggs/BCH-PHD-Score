import React from "react";
import "../App.css";

class LiverDysfunction extends React.Component {
  render() {
    return (
      <div className="LDContainer">
        <h2 className="LDTableTitle">Liver dysfunction</h2>

        <h3 className="AST">AST IU/L</h3>
        <button className="AST0">0-50</button>
        <button className="AST1">51-150</button>
        <button className="AST2">151-300</button>
        <button className="AST3">301-500</button>
        <button className="AST4">> 500</button>

        <h3 className="Bilirubin">Bilirubin μmol/L</h3>
        <button className="BR0">0-20</button>
        <button className="BR1">21-70</button>
        <button className="BR2">71-150</button>
        <button className="BR3">151-300</button>
        <button className="BR4">> 300</button>

        <h3 className="PTsecs">PT secs</h3>
        <button className="PT0"> &lt;13 </button>
        <button className="PT1">14-19</button>
        <button className="PT2">20-25</button>
        <button className="PT3">26-30</button>
        <button className="PT4">> 30</button>

        <h3 className="Ascites">Ascites</h3>
        <select className="AscitesSelect">
          <option>-- Select Value --</option>
          <option value="0">None</option>
          <option value="1">On diuretics</option>
          <option value="2">Mild</option>
          <option value="3">Gross</option>
          <option value="4">Gross with drainage</option>
        </select>
      </div>
    );
  }
}

export default LiverDysfunction;
