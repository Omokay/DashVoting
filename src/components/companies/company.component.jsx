import {makeStyles} from "@material-ui/core/styles";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterButton from "../filterButton/filterButton.component";
import CompTable from "../muiTable/companyTable.component";
import {useContext, useEffect, useState} from "react";
import {VotingContext} from "../../context/voting_context";
import {baseUrl, httpGet} from "../../Http_Requests/axios_requests";
import API from "../../config/routes.config";





const CompanyTable = () => {
    const classes = useStyles();

    // const {companies, setCompanies} = useContext(VotingContext);
    const [page, setPage] = useState(1);
    const [pageSize, setPagesize] = useState('');

    //
    // useEffect(() => {
    //     if (companies.length) return;
    //     getCompanies();
    // }, []);
    //
    //
    // function getCompanies() {
    //     const url = `${baseUrl}${API.getCompanies}/?Page=${page}&PageSize=${pageSize}`;
    //     httpGet(url).then((res) => {
    //         // console.log(res.data);
    //         setCompanies(res.data);
    //     });
    // }
    return (
        <div className={classes.root}>
            <div className={classes.headerDiv}>
                <h1 className={classes.header}>Companies</h1>
                <FilterButton options={['Ascending', 'Descending']} />
            </div>
            <div className={classes.wrapper}>
                <CompTable rows={[]}/>
            </div>
        </div>
    )
};


export default CompanyTable;


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: '600px',
        minHeight: '700px',
        background: '#FFFFFF',
        flex: 1,
        padding:  '20px',
        margin: '20px 0',
        transition: '1s ease',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            minWidth: '520px',
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            minWidth: '600px',
        },
    },
    wrapper: {
        width: '100%',
        height: 'auto',
        display: 'grid',
    },
    headerDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    header: {
        letterSpacing: '-0.1px',
        color: '#222222',
        fontSize:  '20px',
        fontWeight: 'bolder',
        padding: '10px 20px',
        opacity: 1,
    },
    table: {
        margin: '20px 0',
        height: 'max-content',
        width: '100%',
        border: 'none',
        padding: '10px 0',
        backgroundColor: 'white',
    },
    tableHead: {
        textAlign: 'center',
        letterSpacing: 0,
        color: '#222222',
        fontWeight: 'bolder',
        fontSize: '16px',
        opacity: 1,

        [theme.breakpoints.down('md')]: {
            minWidth: '50px',
        },
    },
    tableHeader: {
        minHeight: '50px',
        background: '#F5F6F9',
        borderRadius: '4px',
        opacity: 1,
        border: 'none',
    },
    tableBody:  {
        border: 'none',
    },
    tableList: {
        height: '50px',
        border: '1px solid #F3F3F3',
        borderRadius: '4px',
        opacity: 1,
        width: '100%',
    },
    tableData: {
        // padding: '10px 30px',
        // minWidth: '80px',
        textAlign: 'center',
    },
    br: {
        height: '3px',
        display: 'hidden',
    }
}));
