import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';

const CheckBox = ({checked, onchange, textClick}) => {
    return (
        <FormControl component='fieldset'>
            <FormGroup aria-label='position' row>
                <FormControlLabel
                    value='end'
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={onchange}
                            color='primary'
                            style = {{
                                // margin: 'auto 0',
                                //color: 'rgb(240, 124, 0)'
                            }}
                             />
                    }
                    labelPlacement='end'
                />
                <Typography style={{
                    color: '#9EA0A5',
                    fontSize: '12px',
                    marginTop: '12px',
                }}>I agree with the <span style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    fontWeight: 'bold',
                    color: '#56575A'
                }}><a href='/' onClick={textClick}>Terms of use</a></span></Typography>
            </FormGroup>
        </FormControl>
    )
};

export default CheckBox;
