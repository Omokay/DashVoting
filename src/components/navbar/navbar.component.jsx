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



const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        MuiListItemIconRoot :{

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
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#fff',
        color: 'white',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: '#ccc',
        minHeight: '100vh',
    },
    nested: {
        paddingLeft: theme.spacing(4),

    },
    navLink: {
        textDecoration: 'none',
        color: 'white',
    },
    activeLink: {
        color: '#0C96DE',
        fontWeight: '500',
        letterSpacing: 0,
        lineHeight: '15px',
        marginLeft: '11px',
        marginTop: '10px',
        minHeight: '22px',
        minWidth: '76px',
        whiteSpace: 'nowrap',

        borderLeftColor: '#0C96DE',
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
        width: '90.41px',
        height: '26.64px',
        marginLeft: '30%',
        marginTop: '20px',
    },
}));

const  DashHeader = (props, children) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const pathname = useLocation();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar}>
                <img className={classes.logo} src={payAttitudeLogo} alt='Payattitude logo'/>
            </div>

            <Divider />
            <List component="nav"
                  aria-labelledby="nested-list-subheader">
                <NavLink exact className={classes.navLink}  to='/' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><HomeIcon className={classes.iconStyles} /></ListItemIcon>
                        <ListItemText primary='Dashboard' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink exact className={classes.navLink}  to='/users' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><img className={classes.iconStyles2} src={userIcon} alt=''/></ListItemIcon>
                        <ListItemText primary='Users' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink exact className={classes.navLink} to='/companies' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><img className={classes.iconStyles2} src={compIcon} alt=''/></ListItemIcon>
                        <ListItemText primary='Companies' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink exact className={classes.navLink} to='/programs' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><img className={classes.iconStyles2} src={programIcon} alt=''/></ListItemIcon>
                        <ListItemText primary='Programs' className={classes.navText} />
                    </ListItem>
                </NavLink>

                <NavLink exact className={classes.navLink} to='/registrations' activeClassName={classes.activeLink}>
                    <ListItem button>
                        <ListItemIcon><InfoOutlinedIcon className={classes.iconStyles} /></ListItemIcon>
                        <ListItemText primary='Registration' className={classes.navText} />
                    </ListItem>
                </NavLink>

               <NavLink exact className={classes.navLink} to='/' activeClassName={classes.activeLink}>
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
                    <SearchBar />
                    <Grid style={{
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'space-between',
                        marginRight: 0,
                    }}>
                       <div></div>
                       <div></div>
                    </Grid>
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
