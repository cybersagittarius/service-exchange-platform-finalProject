import React from 'react';
import { createContext , useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = (props) => {

    const [country, setCountry] = useState(" ");
    const [region, setRegion] = useState(" ");
    const [offerSelection, setofferSelection] = useState([]);
    const [lookSelection, setlookSelection] = useState([]);

    const selectCountry = (e) => {
        setCountry(e);
      };
    
      const selectRegion = (e) => {
        setRegion(e);
      };
    
      const handleOfferSelection = (selection) => {
        setofferSelection(selection);
      };
    
      const handlelookSelection = (selection) => {
        setlookSelection(selection);
      };

    return (
        <div>
        <SearchContext.Provider value={country, region,offerSelection, lookSelection,selectCountry, selectRegion,  handleOfferSelection,handlelookSelection}>
        {props.children}
        </SearchContext.Provider>
        </div>
    )
}


