const SearchBar = ()=>{
    return (
        <div>
            <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop"
                 aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-md-none">
                    ...
                </div>
            </div>
        </div>
    )
}

export default SearchBar