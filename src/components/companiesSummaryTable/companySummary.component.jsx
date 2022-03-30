import React, {useContext, useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FilterButton from "../filterButton/filterButton.component";
import {baseUrl, httpGet} from "../../Http_Requests/axios_requests";
import API from "../../config/routes.config";
import {VotingContext} from "../../context/voting_context";
import {formatDate} from "../../helper/datetime";
import CustomMuiTable from "../muiTable/companyTable.component";
import CompTable from "../muiTable/companyTable.component";

const CompanySummary = () => {
    const classes = useStyles();

    // const [company, setCompanies] = useState({});
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const {companies, setCompanies} = useContext(VotingContext);




    useEffect(() => {
        getCompanies();
    }, [page]);

    // Fetch all companies
    function getCompanies() {
        const url = `${baseUrl}${API.getCompanies}/?Page=${page}&PageSize=${pageSize}`;
        httpGet(url).then((res) => {
            console.log(res.data);
            setCompanies(res.data);
        });
    }


    return (
        <div  className={classes.root}>
            <div className={classes.headerDiv}>
                <h1 className={classes.header}>Company Summary</h1>
                <FilterButton options={['Default', 'Ascending', 'Descending']}/>
            </div>
            <div className={classes.wrapper}>

                <CompTable
                    rows={companies}
                    isSummary={true}
                />
            </div>
        </div>
    )
}


export default CompanySummary;

const useStyles = makeStyles((theme) => ({
     root: {
       width: '100%',
       minWidth: '600px',
       height: '375px',
       background: '#FFFFFF',
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
        flex: '1',
        overflowY: 'scroll',
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
}));

