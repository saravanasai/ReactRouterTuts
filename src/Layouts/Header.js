import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const is_auth = useSelector(state => state.auth.is_auth)

    return ( 
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    {is_auth &&  ( <><li class="nav-item">
                        <Link class="nav-link" to="/balance">BalancLink</Link>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Logout</a>
                </li> </>)}
                    {!is_auth &&  (<li class="nav-item">
                        <a class="nav-link" href="#">Log In</a>
                    </li>)}
                    
                    
                </ul>
            </div>
        </nav>
     );
}
 
export default Header;