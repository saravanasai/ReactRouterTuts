import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link ,useHistory} from "react-router-dom";
import { LogOutRequest } from "../Redux/Auth/AuthAction";

const Header = () => {

    const is_auth = useSelector(state => state.auth.is_auth)
    const dispatch=useDispatch();
    const navigation=useHistory();

    const handleLogout=(e)=>{
        e.preventDefault();
        dispatch(LogOutRequest());
        navigation.push('/login');
        
    }

    return ( 
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <Link class="navbar-brand" to="/">React Login Sytem</Link>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    {is_auth &&  ( <><li class="nav-item">
                        <Link class="nav-link" to="/balance">Balance</Link>
                    </li>
                    <li class="nav-item">
                        <form onSubmit={handleLogout}>
                        <button class="nav-link btn btn-primary btn-sm" type="submit">Logout</button>
                        </form>
                    
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