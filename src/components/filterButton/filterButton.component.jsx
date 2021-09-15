import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import filterIcon from '../../static/images/filtericon.svg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


const useStyles = makeStyles(() => ({
    filterButton: {
        width: '118px',
        height: '40px',
        border: '0.8px solid #E1E1E1',
        borderRadius: '4px',
        opacity: '1',
        right: '10px',
        '&:hover': {
            cursor: 'pointer',
        }

    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '9px',
    },
    buttonText: {
        fontSize: '14px',
        margin: 'auto 0',
    }
}))

const FilterButton = ({options}) => {
    const [anchorEl, setAnchor] = useState(null);

    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    const handleClose = () => {
        setAnchor(null);
    };
    const classes = useStyles();
    return (
        <ClickAwayListener onClickAway={handleClose}>
            <>
                <div  onClick={handleMenu} className={classes.filterButton}>
                    <div className={classes.flex}>
                        <p className={classes.buttonText}>Filter</p>
                        <img src={filterIcon} alt='img'/>
                    </div>
                </div>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    getContentAnchorEl={null}
                    elevation={0}
                    keepMounted
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'top' }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {
                        (options && options.map((items, index) => (
                            <MenuItem key={index} onClick={handleClose}>{items}</MenuItem>
                        )))
                    }
                </Menu>
            </>
        </ClickAwayListener>
    )
}


export default FilterButton;
