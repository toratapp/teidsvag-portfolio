import { Link } from "react-router-dom";
import Logo from '/logo.svg';

function Header() {
  return ( 
    <div className="bg-primary h-20 fixed w-full">
      <div className="max-w-screen-xl mx-auto">
        <Link to="/">
          <img src={Logo} className="h-8 ml-6 xl:ml-0 mt-6" alt="Logo" />
        </Link>
      </div>
    </div>
   );
}

export default Header;
