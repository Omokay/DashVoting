import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {makeStyles} from "@material-ui/core/styles";
import {formatDate} from "../../helper/datetime";


const ProgramTable = ({rows, isSummary}) => {
    const classes = useStyles();

    return (
        <TableContainer className={classes.root} >
            <Table   sx={{ minWidth: 900, borderCollapse: 'separate', borderSpacing: '0 5px', }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>#</StyledTableCell>
                        <StyledTableCell align="left">Name</StyledTableCell>
                        <StyledTableCell align="left">Type</StyledTableCell>
                        <StyledTableCell align="left">Fee</StyledTableCell>
                        <StyledTableCell align="left">Started</StyledTableCell>
                        <StyledTableCell align="left">Ending</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <StyledTableCell align="left">#</StyledTableCell>
                            <StyledTableCell align="left">The Voice</StyledTableCell>
                            <StyledTableCell align="left">Show</StyledTableCell>
                            <StyledTableCell align="left">20.53</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align="left">#</StyledTableCell>
                            <StyledTableCell align="left">The Voice</StyledTableCell>
                            <StyledTableCell align="left">Show</StyledTableCell>
                            <StyledTableCell align="left">20.53</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align="left">#</StyledTableCell>
                            <StyledTableCell align="left">The Voice</StyledTableCell>
                            <StyledTableCell align="left">Show</StyledTableCell>
                            <StyledTableCell align="left">20.53</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell align="left">#</StyledTableCell>
                            <StyledTableCell align="left">The Voice</StyledTableCell>
                            <StyledTableCell align="left">Show</StyledTableCell>
                            <StyledTableCell align="left">20.53</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                            <StyledTableCell align="left">{formatDate(new Date())}</StyledTableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProgramTable;


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

