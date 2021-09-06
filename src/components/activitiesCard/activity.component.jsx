import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles (() => ({
    listMain: {
        width: '100%',
        maxWidth: 360,
        overflow: 'auto',
        // backgroundColor: theme.palette.background.paper,
    },
    wrapper: {
        width: '400px',
        height: '400px',
        padding: '20px',
        background: '#FFFFFF',
        borderRadius: '4px',
        opacity: 1,
        margin: '20px  0',
    },
    root: {
        margin: '0 auto',
        width: '378px',
        height: '326px',
        overflow: 'auto',
    },
    header: {
        textAlign: 'left',
        letterSpacing: '-0.1px',
        color: '#222222',
        fontSize:  '20px',
        fontWeight: '900',
        paddingLeft: '20px',
        opacity: 1,
    }
}));
const Activities = () => {
    const classes = useStyles();
    const arr =   ['1', '2', '3', '3', '4',];
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.header}>Activities</h1>
            <div className={classes.root}>
                <List style={{overflow: 'scroll',}} className={classes.listMain}>
                    {
                        arr.map((index, item) => (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Avatar />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Francis Tran" secondary="Created a new user" />
                                <ListItemText primary="14-08-2021"/>
                                <Divider />
                            </ListItem>
                        ))
                    }
                </List>
            </div>
        </div>
    )
}

export default Activities;
