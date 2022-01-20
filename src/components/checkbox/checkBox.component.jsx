import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from '@material-ui/core';

const CheckBox = ({text, textLink, checked, onchange, textClick}) => {
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
                                // marginBottom: '20px',
                                //color: 'rgb(240, 124, 0)'
                            }}
                             />
                    }
                    labelPlacement='end'
                />
                <Typography style={{
                    color: '#9EA0A5',
                    fontSize: '16px',
                    marginTop: '12px',
                    width: '390px',
                }}>{text} <span style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    textSpacing: '2px',
                    textAlign: 'center',
                    fontSize: '16px',
                    color: '#0C96DE'

                }}><a style={{
                    textDecoration: 'none',
                }}href='#' onClick={textClick}>{textLink}</a></span></Typography>
            </FormGroup>
        </FormControl>
    )
};

export default CheckBox;
