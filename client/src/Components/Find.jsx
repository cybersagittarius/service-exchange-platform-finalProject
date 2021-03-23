import React, { Component } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

class Find extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      region: "",
    };
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  selectRegion(val) {
    this.setState({ region: val });
  }

  render() {
    const { country, region } = this.state;
    return (
      <div className="form">
        <div className="menu">
          <button
            className="btn btnCat dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >I can offer
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
        <div className="menu">
          <button
            className="btn btnCat dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >I'm looking for
          </button>
          <ul
            className="dropdown-menu cc"
            aria-labelledby="dropdownMenuButton1"
          >
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
        <div className="menu">
          <CountryDropdown
            value={country}
            onChange={(val) => this.selectCountry(val)}
          />

          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => this.selectRegion(val)}
          />
        </div>

        <div className="btnFindDiv">
          <button type="submit" value="search" className="btnFind">
            Find
          </button>
        </div>
      </div>
    );
  }
}
export default Find;
