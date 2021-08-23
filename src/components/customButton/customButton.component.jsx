import React from 'react';
import {
    createMuiTheme,
    createStyles,
    makeStyles,
    Theme,
    ThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) =>
    createStyles({
        secondary: {
            main: '#c1c0c0',
        },
    }),
);


const CustomButton = ({name, handleButton, width}) => {
    const classes = useStyles();

    return (
        <div>
                <Button
                         style={{
                            width: width,
                            padding: '10px',
                        }}
                        variant="contained"
                        color="primary"
                        className={classes.margin}
                        onClick={handleButton}>
                    {name}
                </Button>
        </div>
    );
}

export default CustomButton;
