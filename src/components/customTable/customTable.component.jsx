import React, {useContext} from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    table: {
        width: 'auto',
        borderRadius: '4px',
        border: 'none',
    },
    // tableContainer: {
    //     borderRadius: 4,
    //     width: '71%',
    //     height: '319px',
    //     background: '#FFFFFF',
    //     padding:  '20px',
    //     border: 'none',
    //
    // },
    tableHeader: {
        width: '749px',
        height: '50px',
        background: '#F5F6F9',
        borderRadius: '20px',
        overflow: 'hidden',
        opacity: 1,
        border: 'none',
        margin: '3px auto',
    },
    tableHeaderCell: {

    },
    tableList: {
        width: '100%',
        height: '50px',
        margin: '5px auto',
        border: '1px solid #F3F3F3',
        borderRadius: '4px',
        opacity: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const CustomTable = () => {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
    };
    return (
        <div>
            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table border={0} className={classes.table} aria-label="simple table">
                    <TableHead border={0}>
                        <TableRow style={{

                        }} className={classes.tableHeader}>
                            <TableCell className={classes.tableHeaderCell}>#</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Program</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Contact Person</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Email Address</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Phone Number</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Reg Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{
                        border: 'none',
                    }}>
                        {['', '', '', '',].slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((index,row) => (
                            <TableRow className={classes.tableList} key={index}>
                                {/*<TableCell>*/}
                                {/*    <Typography color="textSecondary" variant="body2">A012</Typography>*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                {/*    <Typography color="textSecondary" variant="body2">PayAttitude</Typography>*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                {/*    <Typography color="textSecondary" variant="body2">Omoke Chuku</Typography>*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                {/*    <Typography color="textSecondary" variant="body2">info@email.com</Typography>*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                {/*    <Typography color="textSecondary" variant="body2">08105470291</Typography>*/}
                                {/*</TableCell>*/}
                                {/*<TableCell>*/}
                                {/*    <Typography color="textSecondary" variant="body2">16-09-2021</Typography>*/}
                                {/*</TableCell>*/}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default CustomTable;
