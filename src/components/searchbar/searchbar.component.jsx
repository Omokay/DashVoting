import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '400px',
    },
    search: {
        position: 'relative',
        borderRadius: '5px',
        backgroundColor: '#ebedef',
        '&:hover': {
            backgroundColor: '#e8e8e9',
        },
        [theme.breakpoints.down("xs")]: {
            display: "none"
        },
        marginLeft: 0,
        width: '100%',
        height: '48px',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ccc',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '80%',
        height: '33px',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
}));

const SearchBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search for employee/project"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </div>
    );
}

export default SearchBar;
