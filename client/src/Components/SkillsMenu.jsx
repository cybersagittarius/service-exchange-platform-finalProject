import React, { useState } from "react";

import * as Icons from "react-icons/io5";
import DisplayedSelection from "./DisplayedSelection";
/* import onClickOutside from "react-onclickoutside"; */
// npm install react-onclickoutside --save
// npm update --force

function SkillsMenu({ title, items = [], multiSelect = false, listOfSelection, selection , handleSelection}) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  /* SkillsMenu.handleClickOutside = () => setOpen(false); */

  function handleOnClick(item) {
    if (!selection.some((current) => current.id === item.id)) {
      if (!multiSelect) {
        handleSelection([item])
      } else if (multiSelect) {
        handleSelection([...selection, item])
      }
    } else {
      let selectionAfterRemoval = selection; //clone
      selectionAfterRemoval = selectionAfterRemoval.filter(
        (current) => current.id !== item.id
      );
      handleSelection([...selectionAfterRemoval])
    }
  }
  function isItemInSelection(item) {
    if (selection.find((current) => current.id === item.id)) {
      return true;
    }
    return false;
  }
  function clearUp() {
    handleSelection([])
  }
  

  return (
    <form className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={() => toggle(!open)}
        onClick={() => toggle(!open)}
      >
        <div className="dd-header_title ">
          <p className="dd-header_title--bold btn btnCat dropdown-toggle">
            {title}
          </p>
          <div className="dd-header_action">
            <p className="btn btnCat offerBtn">
              {selection.length > 0 ? (
                <button className="clear" onClick={clearUp}>
                  <Icons.IoCloseSharp />
                </button>
              ) : (
                " "
              )}
            </p>
          </div>
        </div>
      </div>
      {open && (
        <ul className="dd-list dropdown-menu show">
          <div className="selection">
            <DisplayedSelection listOfSelection={selection} />
          </div>
          {items.map((item) => (
            <li className="dropdown-item dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                {<span>{item.value}</span>}
                <span className="spanY">
                  {isItemInSelection(item) && (
                    <p className="y">
                      <Icons.IoCloudDoneSharp />
                    </p>
                  )}
                </span>
                <span className="spanX">
                  {isItemInSelection(item) && (
                    <p className="x">
                      <Icons.IoCloseSharp />
                    </p>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};
/* const clickOutsideConfig = {
  handleClickOutside: () => SkillsMenu.handleClickOutside,
}; */
export default SkillsMenu/* onClickOutside(SkillsMenu, clickOutsideConfig) */
