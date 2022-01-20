import React from 'react';
import palogo from "../../static/images/palogo.png";
import {makeStyles} from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
    logo: {
        width: '90.41px',
        height: '26.64px',
        marginLeft: '40px',
        marginTop: '40px'
    },

}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <div className='header container-fluid'>
                <nav>
                    <div className='nav-brand'>
                        <a className='navbar-brand' href='/'><img className={classes.logo} src={palogo} alt='img'/></a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;