import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Stack from '@mui/material/Stack';
import VisibilityIcon from '@mui/icons-material/Visibility';

const SmallButton = ({name, isType}) => {
    return (
        <Stack direction="row" spacing={2}>
            <Button style={{
                background: 'none',
                minWidth: '118px',
                height: '40px',
                border: '1px solid #E1E1E1',
                borderRadius: '4px',
                boxShadow: 'none',
                color: '#222222',
                cursor: 'pointer',

                '&:hover': {
                    background: '#fffccc',
                }
            }} variant="contained" endIcon={(isType === 'add') ? <AddIcon /> : <VisibilityIcon />}>
                {name}
            </Button>
        </Stack>
    );
}


export default SmallButton;