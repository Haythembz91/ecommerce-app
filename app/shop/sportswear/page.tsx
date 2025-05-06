
const Home = ()=>{
    return(
        <div className={""}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">SHOP</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"
                             clipRule="evenodd">
                            <path
                                d="M23 0l-9 14.146v7.73l-3.996 2.124v-9.853l-9.004-14.147h22zm-20.249 1l8.253 12.853v8.491l1.996-1.071v-7.419l8.229-12.854h-18.478z"/>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    SIZE
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="size"
                                               id="sizeXs"/>
                                        <label htmlFor="sizeXs">
                                            XS
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="size"
                                               id="sizeS"/>
                                        <label htmlFor="sizeS">
                                            S
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="size"
                                               id="sizeM"/>
                                        <label htmlFor="sizeM">
                                            M
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="size"
                                               id="sizeL"/>
                                        <label htmlFor="sizeL">
                                            L
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="size"
                                               id="sizeXl"/>
                                        <label htmlFor="sizeXl">
                                            XL
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="size"
                                               id="sizeXxl"/>
                                        <label htmlFor="sizeXxl">
                                            XXL
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    COLOR
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="color"
                                               id="colorBlack"/>
                                        <label className={'text-bg-dark text-white px-1'} htmlFor="colorBlack">
                                            Black
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="color"
                                               id="colorRed"/>
                                        <label className={'text-bg-danger text-black px-1'} htmlFor="colorRed">
                                            Red
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="color"
                                               id="colorGreen"/>
                                        <label className={'text-bg-success text-black px-1'} htmlFor="colorGreen">
                                            Green
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="color"
                                               id="colorBlue"/>
                                        <label className={'text-bg-primary text-black px-1'} htmlFor="colorBlue">
                                            Blue
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="color"
                                               id="colorYellow"/>
                                        <label className={'text-bg-warning text-black px-1'} htmlFor="colorYellow">
                                            Yellow
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="color"
                                               id="colorGrey"/>
                                        <label className={'text-bg-secondary text-black px-1'} htmlFor="colorGrey">
                                            Grey
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="color"
                                               id="colorWhite"/>
                                        <label className={'text-bg-light px-1'} htmlFor="colorWhite">
                                            White
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    COLLECTION
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="collection"
                                               id="motion"/>
                                        <label className={'px-1'} htmlFor="motion">
                                            Motion
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="collection"
                                               id="define"/>
                                        <label className={'px-1'} htmlFor="define">
                                            Define
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="collection"
                                               id="power"/>
                                        <label className={'px-1'} htmlFor="power">
                                            Power
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="collection"
                                               id="essential"/>
                                        <label className={'px-1'} htmlFor="essential">
                                            Essential
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="collection"
                                               id="comfort"/>
                                        <label className={'px-1'} htmlFor="comfort">
                                            Comfort
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="collection"
                                               id="accessories"/>
                                        <label className={'px-1'} htmlFor="accessories">
                                            Accessories
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    LEG LENGTH
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="legLength"
                                               id="7/8Length"/>
                                        <label className={'px-1'} htmlFor="7/8Length">
                                            7/8 Length
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="legLength"
                                               id="regularLength"/>
                                        <label className={'px-1'} htmlFor="regularLength">
                                            Regular Length
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="legLength"
                                               id="longLength"/>
                                        <label className={'px-1'} htmlFor="longLength">
                                            Long Length
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    SLEEVE LENGTH
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="sleeveLength"
                                               id="shortSleeve"/>
                                        <label className={'px-1'} htmlFor="shortSleeve">
                                            Short Sleeve
                                        </label>
                                    </li>
                                    <li className="form-check">
                                        <input className={'me-2'} type="radio" name="sleeveLength"
                                               id="longSleeve"/>
                                        <label className={'px-1'} htmlFor="longSleeve">
                                            Long Sleeve
                                        </label>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    OTHER
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    PRICE
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                   aria-expanded="false">
                                    SORT BY
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Home