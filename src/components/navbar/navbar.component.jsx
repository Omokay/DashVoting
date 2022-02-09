import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchBar from "../searchbar/searchbar.component";

import payAttitudeLogo from '../../static/images/palogo.png';
import notification from '../../static/images/notification.png';
import msgLog from '../../static/images/msg.png';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import userIcon from '../../static/images/users.png';
import compIcon from '../../static/images/companies.png';
import programIcon from '../../static/images/programs.png';
import auditIcon from '../../static/images/auditIcon.png';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

import avatar from '../../static/images/avatar.png';
import ImageAvatars from "../avatar/avatar.component";
import dropdown from '../../static/images/dropdown.png';
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";



const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',

        MuiListItemIconRoot :{

    },
        a: {
            textDecoration: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
            padding: '10px',
            fontSize: '18px',
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        boxShadow: 'none',
    },
    menuButton: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    toolbarContent: {
        width: '95%',
        height: '62px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '85%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '69%',
        },
    },

    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#fff',
        color: 'white',
    },
    content: {
        flexGrow: 1,
        width: '100%',
        padding: theme.spacing(3),
        minHeight: '100%',
    },
    nested: {
        paddingLeft: theme.spacing(4),

    },
    navlink: {
        width: 'inherit',
        height: 'auto',
        textDecoration: 'none',
        color: 'black',
    },


    activeLink: {
        color: '#0C96DE',
        fontSize: '50px',
    },

    listItem: {
        borderColor: '#000',
    },


    navText: {
        fontSize: '1.5rem',
        color: '#666667',

    },
    iconStyles: {
        color: 'black',
        fontSize: '1.5rem',
        opacity: '0.5',
    },
    iconStyles2: {
        width: '18px',
        height: '18px',
        opacity: '0.5',
    },
    logo: {
        width: '126',
        height: '35px',
        marginLeft: '30%',
        marginTop: '20px',
    },
    logoConfig: {
        width: '70px',
        height: '100%',
        padding: '10px',
        borderRightStyle:  'inset',
        borderRightColor: '#e0e0e0',
        borderLeftStyle:  'solid',
        borderLeftColor: '#e0e0e0',
        borderWidth: '1px',
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    logoConfig2: {
        width: '70px',
        height: '100%',
        padding: '10px',
        borderRightStyle:  'solid',
        borderRightColor: '#e0e0e0',
        borderWidth: '1px',
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    toolbarImage: {
        width: '22px',
        height: '22px',
        display:  'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '8px',
    },
    avatarDiv: {
        width: '70px',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    centerDiv: {
        display: 'block',
        margin: 'auto',
        padding: '5px',
    },
    dropdown: {
      width: '15px',
      height: '10px',
      '&:hover': {
          cursor: 'pointer',
      }
    },
}));

const  DashHeader = (props, children) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchor] = React.useState(null);
    const pathname = useLocation();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDropdown = (event) => {
       setAnchor(event.currentTarget)
    }

    const handleClose = () => {
        setAnchor(null);
    }

    const handleLogout = () => {
        setAnchor(null);
    }


    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <img className={classes.logo} src={payAttitudeLogo} alt='Payattitude logo'/>
            </div>

            <Divider />
            <List component="nav"
                  aria-labelledby="nested-list-subheader">
                <NavLink style={{textDecoration: 'none', borderColor: '#000',}} exact className={classes.navlink}  to='/' activeClassName={classes.activeLink}>
                    <ListItem className={classes.listItem} style={{textDecoration: 'none',}} button>
                        <ListItemIcon><HomeIcon className={classes.iconStyles} /></ListItemIcon>
                        <ListItemText primary='Dashboard' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none',}} className={classes.navlink}  to='/users' activeClassName={classes.activeLink}>
                    <ListItem className={classes.navlink} button>
                        <ListItemIcon><img className={classes.iconStyles2} src={userIcon} alt=''/></ListItemIcon>
                        <ListItemText primary='Users' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none',}} className={classes.navlink} to='/companies' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><img className={classes.iconStyles2} src={compIcon} alt=''/></ListItemIcon>
                        <ListItemText primary='Companies' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none',}} className={classes.navlink} to='/programs' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><img className={classes.iconStyles2} src={programIcon} alt=''/></ListItemIcon>
                        <ListItemText primary='Programs' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink style={{textDecoration: 'none',}} className={classes.navlink} to='/registrations' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><InfoOutlinedIcon className={classes.iconStyles} /></ListItemIcon>
                        <ListItemText primary='Registration' className={classes.navText} />
                    </ListItem>
                </NavLink>

               <NavLink style={{textDecoration: 'none',}} className={classes.navlink} to='/' activeClassName={classes.activeLink}>
                   <ListItem button>
                       <ListItemIcon><img className={classes.iconStyles2} src={auditIcon} alt=''/></ListItemIcon>
                       <ListItemText primary='Audit Trail' className={classes.navText} />
                   </ListItem>
               </NavLink>
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root} id='navwrapper'>
            <CssBaseline />
            <AppBar color='white' position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />


                    {/* Should hold the  nav brand */}

                    </IconButton>
                    <div className={classes.toolbarContent}>
                        <SearchBar />

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div className={classes.logoConfig}>
                                <img className={classes.toolbarImage} src={notification} alt='img'/>
                            </div>

                            <div className={classes.logoConfig2}>
                                <img className={classes.toolbarImage} src={msgLog} alt='img'/>
                            </div>
                            {/* Menu @ profile for logging out*/}
                            <ClickAwayListener onClickAway={handleClose}>
                            <div className={classes.avatarDiv}>
                                <ImageAvatars avatar={avatar} />
                                <p className={classes.centerDiv} style={{
                                    fontSize:  '14px',
                                    color: '#0C96DE',
                                    fontWeight: 'bold',
                                }}>Prince</p>
                                <div onClick={handleDropdown} className={classes.centerDiv}>
                                    <img className={classes.dropdown} src={dropdown} alt='dropdown'/>
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
                                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                </Menu>
                            </div>
                            </ClickAwayListener>
                        </div>
                    </div>
                </Toolbar>

            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            {/* MAIN BODY STARTS HERE*/}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                    <React.Fragment>
                        {props.children}
                    </React.Fragment>
            </main>
        </div>
    );
}

// DashHeader.propTypes = {
//     window: PropTypes.func,
// };

export default DashHeader;
