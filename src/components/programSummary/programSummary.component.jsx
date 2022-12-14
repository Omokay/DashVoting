import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatars from '../../components/avatarGroup/avatarGroup.component';
import FilterButton from "../filterButton/filterButton.component";
import CustomMuiTable from "../muiTable/companyTable.component";
import {baseUrl, httpGet} from "../../Http_Requests/axios_requests";
import ProgramTable from "../muiTable/programTable.component";
import {VotingContext} from "../../context/voting_context";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minWidth: '600px',
        height: '375px',
        flex: '1',
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
        height: '100%',
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


const ProgramSummary = () => {
    const classes = useStyles();

    useEffect(() => {
        getProgramSummary();
    }, [])

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);

    const {programs, setPrograms} = useContext(VotingContext);

    const getProgramSummary = () => {
        const companyId = 1;
        console.log(companyId);
        const url = `${baseUrl}/api/v1/companies/${companyId}/programs`;
        httpGet(url).then((res) => {
            console.log(res.data);
            setPrograms(res.data);
        })
    }
    return (
        <>
            <div className={classes.root}>
                <div className={classes.headerDiv}>
                    <h1 className={classes.header}>Program Summary</h1>
                    <FilterButton options={['Default', 'Ascending', 'Descending']}/>
                </div>
                <div className={classes.wrapper}>
                    <ProgramTable rows={programs}/>

                </div>
            </div>
        </>
    )
}

export default ProgramSummary;
