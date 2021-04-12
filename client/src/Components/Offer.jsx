import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
// npm install react-onclickoutside --save
// npm update --force

function Offer({ title, items = [], multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Offer.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }
  function isItemInSelection(item) {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title">
          <p className="dd-header_title--bold">{title}</p>
        </div>
        <div className="dd-header_action">
          <p>x{/* {open ? "Close" : "Open"} */}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && "Selected"}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
const clickOutsideConfig = {
  handleClickOutside: () => Offer.handleClickOutside,
};
export default onClickOutside(Offer, clickOutsideConfig);

/*{ <div>
      <div className="menu">
        <button
          className="btn btnCat dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          I can offer
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Archaeology
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Astronomy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Biology
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Chemistry
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Electrochemistry
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Languages
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Geography
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              History
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Mathematics
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Medical science
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Microbiology
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Philosophy
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Physics
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Psychology
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Railway studies
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Research
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Science and technology studies
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Social studies
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sports science
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Teaching
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Web design
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Other
            </a>
          </li>
        </ul>
      </div>
    </div>
  ); }
};*/
