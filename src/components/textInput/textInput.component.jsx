import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: '20px auto',
                minWidth: '320px',
            },
        },
        [theme.breakpoints.down('xs')]: {
            root: {
                '& > *': {
                    margin: '20px auto',
                    minWidth: '300px',
                },
            },
        },
    }),
);

const TextInput = ({value, handleChange, label, type, placeholder}) => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic"
                       label={label}
                       value={value}
                       placeholder={placeholder}
                       type={type}
                       onClick={handleChange}/>
        </form>
    );
}

export default TextInput;
