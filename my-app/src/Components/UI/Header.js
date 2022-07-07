import React,{Fragment} from "react"
import classes from "../UI/Header.module.css"
import limeimage from "../../Components/slice-lime.jpg"
const Header = props =>{
return (
    
        <Fragment>
        <header className={classes.header}>
        <h2 className={classes.title}>JobBuddy!</h2>
        <img src = {limeimage} alt = "headerLogo" className={classes.headerLogo}/>
            <ul className={classes.Headerlist}>
            <li ><button className={classes.button}>SIGN UP!</button></li>
            <li><button className={classes.button}>my jobs</button></li>

            </ul>
        </header>
        </Fragment>
   
)
}
export default Header;