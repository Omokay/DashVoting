import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {makeStyles} from "@material-ui/core/styles";
import {formatDate} from "../../helper/datetime";


const VotingPeriodTable= ({rows, isSummary}) => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.root} >
            <Table   sx={{ minWidth: 900, borderCollapse: 'separate', borderSpacing: '0 5px', }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Program ID</StyledTableCell>
                        <StyledTableCell align="left">Started</StyledTableCell>
                        <StyledTableCell align="left">Ending</StyledTableCell>
                        <StyledTableCell align="left">Status</StyledTableCell>
                        <StyledTableCell align="left">Options</StyledTableCell>
                        <StyledTableCell align="left">Fee</StyledTableCell>
                        <StyledTableCell align="left">Options Prompt</StyledTableCell>
                        <StyledTableCell align="left">Count Prompt</StyledTableCell>


                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.map((row) => (
                        <TableRow key={row.email}>
                            <StyledTableCell align="left">{row.programId}</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(row.opens)}</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(row.closes)}</StyledTableCell>
                            <StyledTableCell align="left">{row.isOpened}</StyledTableCell>
                            <StyledTableCell align="left">
                                {
                                    (row.options && row.options).map((option, index) => (
                                        <ul>
                                            <li key={index}>{option.label + ' ' + 'Code: ' +option.code}</li>
                                        </ul>
                                    ))
                                }
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.fee}</StyledTableCell>
                            <StyledTableCell align="left">{row.optionPrompt}</StyledTableCell>
                            <StyledTableCell align="left">{row.countPrompt}</StyledTableCell>
                        </TableRow>


                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default VotingPeriodTable;


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    '&:first-child td': {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    '&:last-child td': {
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#F5F6F9',
        color: '#222222',
        fontWeight: 'bold',
        border: 'none',
    },

    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        // backgroundColor: '#FFFFFF',
    },


}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 'none',

    },
    '&:first-child td': {
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    '&:last-child td': {
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
    },
}));



const useStyles = makeStyles({
    root: {
        '& .MuiTableRow-root td': {
            borderTop: '1px solid #F3F3F3',
            borderBottom: '1px solid #F3F3F3',
        },

        '& .MuiTableRow-root td:first-child': {
            borderTopLeftRadius: '4px',
            borderBottomLeftRadius: '4px',
            borderLeft: '1px solid #F3F3F3',


        },

        '& .MuiTableRow-root td:last-child': {
            borderTopRightRadius: '4px',
            borderBottomRightRadius: '4px',
            borderRight: '1px solid #F3F3F3',

        },
    },

    table: {
        borderCollapse: 'separate',
        borderSpacing: '0 5px',
        border: 'none',
    },

});

