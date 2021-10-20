import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const FloatingAction = () => {
    const classes = useStyles();

    return (
        <div>
                <Fab color="secondary" aria-label="add" className={classes.margin}>
                    <AddIcon />
                </Fab>
        </div>
    );
}

export default FloatingAction;
