import React, {useContext, useEffect, useState} from 'react';
import {useStyles} from "../../components/programSummary/programSummary.component";
import CustomButton from "../customButton/customButton.component";
import {VotingContext} from "../../context/voting_context";
import {baseUrl, httpGet} from "../../Http_Requests/axios_requests";
import API from "../../config/routes.config";
import VotingPeriodTable from "../muiTable/votingPeriod.component";


const VotingPeriod = () => {
    const classes = useStyles();

    const {votingPeriod, setVotingPeriod} = useContext(VotingContext);
    const [page, setPage] = useState(1);
    const [pageSize, setPagesize] = useState('');

    useEffect(() => {
        // if (votingPeriod.length) return;
        getVotingPeriod();
    }, [page]);

    const getVotingPeriod = () => {
        const companyId = 1;
        const programId = 1;
        const url = `${baseUrl}${API.getPeriods}/${companyId}/programs/${programId}/periods`;
        httpGet(url).then((res) => {
            console.log(res.data);
            setVotingPeriod(res.data);
        })
    }

    return (
        <>
            <div className={classes.root}>
                <div className={classes.headerDiv}>
                    <h1 className={classes.header}>Voting Period</h1>
                    <CustomButton name='Add New' width='129px' />
                </div>
                <div className={classes.wrapper}>
                    <VotingPeriodTable rows={votingPeriod}/>
                </div>
            </div>
        </>
    )
}

export default VotingPeriod;
