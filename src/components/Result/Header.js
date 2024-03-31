// Header.js
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom"; // Import Link

const Header = () => {
  return (
    <div className='flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-yellow-50 md:bg-green-100'>
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} alt="Logo"/>
      </div>
      <div className="flex items-center" > 
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {/* Use Link with absolute path to home */}
            <Link to="/result">Home</Link>
          </li>
          <li className="px-4">
            {/* Use Link with absolute path to GPA */}
            <Link to="/result/gpa">GPA</Link>
          </li>
          <li className="px-4">
            {/* Use Link with absolute path to CGPA */}
            <Link to="/result/cgpa">CGPA</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
