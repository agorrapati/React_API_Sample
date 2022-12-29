import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import getPlayersDetails from '../../actions/GetPlayerDetails.Action';
import { connect, useSelector, useDispatch } from "react-redux";
import axios from 'axios';
import DisplayDetails from "../DisplayDetails/DisplayDetails";

const Navbar=(e:any)=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);
  const [startingPage,setStartingPage] = useState(0);
  const [pageLimit,setPageLimit] = useState(25);
  const [playerDetails,setPlayerDetails] = useState([] as any);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const handleClickEvent=(e:any) =>{
    const request = {     
    }
    const options = {
        method: 'GET',
       // url: 'https://free-nba.p.rapidapi.com/players?page='+startingPage+'&per_page='+pageLimit,
       url : 'https://free-nba.p.rapidapi.com/teams?page=0',
        headers: {
          'X-RapidAPI-Key': 'c500b4106dmshbc6109fd0ccf3eep144eb6jsn9c10644513a1',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response:any) {
        setPlayerDetails(response.data);
        console.log('response',response.data);
      }).catch(function (error:any) {
          console.error(error);
      });
  }

  return (
    <header className="header">
      <div className="header__content">
        <a href="#">
          Player Details
        </a>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#" onClick={(e)=>handleClickEvent(e)}>Get Team Details</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>

            <a href="#">
              <button className="btn">Register</button>
            </a>
            <a href="#">
              <button className="btn btn__login">Login</button>
            </a>
          </ul>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
    
  );

<DisplayDetails playerDetails={playerDetails} />
}



export default connect()(Navbar);