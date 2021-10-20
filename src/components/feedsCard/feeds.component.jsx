import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import {monthYear} from '../../helper/datetime'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FloatingAction from "../floatingButton/floatingButton.component";

const useStyles = makeStyles ((theme) => ({
    root: {
        margin: '0 auto',
        width: '100%',
        height: '326px',
        overflow: 'auto',
    },
    flex: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    listMain: {
        width: '100%',
        maxWidth: 360,
        padding: '8px',
        // backgroundColor: theme.palette.background.paper,
        position: 'relative',
    },
    wrapper: {
        minWidth: '328px',
        height: '400px',
        padding: '20px 10px',
        background: '#FFFFFF',
        borderRadius: '4px',
        opacity: 1,
        margin: '20px  0',

        [theme.breakpoints.down('md')]: {
            width: '100%',
            height: '400px',
            padding: '20px 10px',
            margin: '20px  0',
        },
    },
    header: {
        textAlign: 'left',
        letterSpacing: '-0.1px',
        color: '#222222',
        fontSize:  '20px',
        fontWeight: '900',
        paddingLeft: '20px',
        opacity: 1,
    },
    arrowDownUp: {
        color: '#272D3B',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    fabWrapper: {
        position: "fixed",
        marginTop: '-20px',
        zIndex: 5,
    },
    floatingButton: {
        width: '60px',
        height: '60px',
        background: '#00CCF2',
        borderRadius: '50%',
        opacity: 1,
        position: 'fixed',
        zIndex: '9999',
        marginBottom: '15px',
        marginRight: '15px',
    }
}));
const Feeds = () => {
    const classes = useStyles();
    const [anchorEl, setAnchor] = useState(null);
    const [arrowUp, setArrowUp] = useState(false);

    const handleDropdown = (event) => {
        setAnchor(event.currentTarget);
        setArrowUp(true);
    }
    const handleClose = () => {
        setAnchor(null);
        setArrowUp(false);
    }

    // Place holder for number of items in the array
    const arr =   ['1', '2', '3', '4', '5'];

    const avatarBackgrounds = ['#FF007C','#7D00B5', '#39D5CF'] ;
    return (
        <div className={classes.wrapper}>
            <div className={classes.flex}>
                <h1 className={classes.header}>Upcoming</h1>
                <ClickAwayListener onClickAway={handleClose}>
                    <div className={classes.flex}>
                        <p className={classes.centerDiv} style={{
                            textAlign: 'right',
                            fontSize: '16px',
                            letterSpacing: 0,
                            color: '#272D3B',
                        }}>{monthYear(Date.now())}</p>

                        <div onClick={handleDropdown} className={classes.arrowDownUp}>
                            {
                                (!arrowUp) ?  <KeyboardArrowDownIcon />  : <ExpandLessIcon  />
                            }
                        </div>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            elevation={0}
                            keepMounted
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'top' }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <MenuItem>Tomorrow</MenuItem>
                            <MenuItem>Next 7 days</MenuItem>
                            <MenuItem>Tomorrow</MenuItem>
                        </Menu>
                    </div>
                </ClickAwayListener>
            </div>
            <div className={classes.root}>
                <List
                    // style={{overflow: 'scroll',}}
                    className={classes.listMain}
                >
                    {
                        arr.map((item, index) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar style={{
                                        backgroundColor:

                                                (index % 2) === 0 ?
                                                    avatarBackgrounds[2] :
                                                    (index % 3) === 0 ?
                                                        avatarBackgrounds[0] :
                                                        avatarBackgrounds[1],
                                    }}>
                                        <InsertInvitationIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="BBN Voting Period" secondary="00AM - 11PM" />
                                <Divider />
                            </ListItem>


                        ))
                    }

                </List>
            </div>
            <div className={classes.fabWrapper}>
                <FloatingAction />
            </div>
        </div>
    )
}

export default Feeds;
