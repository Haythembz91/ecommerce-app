import Form from 'next/form'
import React from "react";
type SearchBarProps = {
    setShowSearchBar: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchBar: React.FC<SearchBarProps> = ({setShowSearchBar})=>{
    return (
        <Form id="searchBar" action="/search" className={"d-flex pb-2"}>
            <label htmlFor="searchInput" className="form-label"></label>
            <input name={'query'} className="form-control" id="searchInput"
                   placeholder="Search..."/>
            <button type="submit" onClick={()=>setTimeout(()=>setShowSearchBar(false),200)} className="btn btn-dark ms-2">Search</button>
        </Form>
    )
}

export default SearchBar