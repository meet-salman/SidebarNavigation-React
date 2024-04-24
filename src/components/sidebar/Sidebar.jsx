import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBell, faEnvelope, faUser, faMagnifyingGlassPlus, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

// import Logo from "../../assets/logo.png"
import User from "../../assets/user.png"
import "./sidebar.css"


const Sidebar = () => {
    return (
        <>

            <div className="sidebar flex flex-col justify-between">

                {/* Navigation */}
                <div>

                    {/* Logo */}
                    <div className="logo_box">
                        <Link to="/">
                            {/* <img src={Logo} alt="logo" width={150} /> */}
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold"> <span className="text_gradiant"> LOGO </span> </h1>
                        </Link>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-col items-center lg:items-stretch gap-3 ">
                        <NavLink to="/" className={(e) => e.isActive ? "text-[--primary-color]" : ""}>
                            <li className="link"> <FontAwesomeIcon icon={faHouse} />  <span> Home </span></li>
                        </NavLink>
                        <NavLink to="/explore" className={(e) => e.isActive ? "text-[--primary-color]" : ""}>
                            <li className="link"> <FontAwesomeIcon icon={faMagnifyingGlassPlus} />  <span> Explore </span> </li>
                        </NavLink>
                        <NavLink to="/notifications" className={(e) => e.isActive ? "text-[--primary-color]" : ""}>
                            <li className="link"> <FontAwesomeIcon icon={faBell} />  <span> Notifications </span> </li>
                        </NavLink>
                        <NavLink to="/messages" className={(e) => e.isActive ? "text-[--primary-color]" : ""}>
                            <li className="link"> <FontAwesomeIcon icon={faEnvelope} />  <span> Messages </span> </li>
                        </NavLink>
                        <NavLink to="/profile" className={(e) => e.isActive ? "text-[--primary-color]" : ""}>
                            <li className="link"> <FontAwesomeIcon icon={faUser} />  <span> Profile </span> </li>
                        </NavLink>
                        <Link to="/register" className={(e) => e.isActive ? "text-[--primary-color]" : ""}>
                            <li className="link"> <FontAwesomeIcon icon={faRightFromBracket} />  <span> Logout </span> </li>
                        </Link>
                    </div>

                </div>


                {/* Profile Short */}
                <div>
                    <Link to="/profile">
                        <div className="image_box flex w-full gap-3">

                            {/* Profile Picture */}
                            <div className="w-[100%] flex justify-center lg:w-[20%]">
                                <img className="rounded-full h-full" src={User} alt="user-pic" width={50} />
                            </div>

                            {/* UserName */}
                            <div className="lg:w-[80%]">
                                <h6> Salman Ahmed </h6>
                                <p className="text-[12px] text-gray-300"> salman@ahmed.com </p>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>




        </>
    )
}

export default Sidebar