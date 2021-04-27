import React from "react";

function DisplayedSelection({ listOfSelection }) {
  return (
    <>
      <div>
        <ul className="selectionList">
          {listOfSelection.map((item) => {
            return <li key={item.id}>{item.value}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default DisplayedSelection;
