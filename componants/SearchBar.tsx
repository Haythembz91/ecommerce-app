import Form from 'next/form'

const SearchBar = ()=>{  
    return (
            <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop"
                 aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header row">
                    <button type="button" className="btn-close mb-3 me-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-md-none">
                    <Form action="/search" className={"d-flex"}>
                        <label htmlFor="searchInput" className="form-label"></label>
                        <input name={'query'} className="form-control" id="searchInput"
                               placeholder="Search..."/>
                        <button type="submit" className="btn btn-dark ms-2">Search</button>
                    </Form>
                </div>
            </div>
    )
}

export default SearchBar