import React from 'react';
import {useStyles} from "../../components/programSummary/programSummary.component";
import Avatars from '../../components/avatarGroup/avatarGroup.component';
import FilterButton from "../filterButton/filterButton.component";
import CustomButton from "../customButton/customButton.component";


const VotingPeriod = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div className={classes.headerDiv}>
                    <h1 className={classes.header}>Voting Period</h1>
                    <CustomButton name='Add New' width='129px' />
                </div>
                <div className={classes.wrapper}>
                    <table className={classes.table}>
                        <thead>

                        <div style={{
                            width: '100%',
                            margin: '0 auto',
                            padding: '10px 20px',
                            textAlign: 'center',
                            letterSpacing: 0,
                            color: '#222222',
                            fontWeight: 'bolder',
                            fontSize: '16px',
                            opacity: 1,
                            height: 'auto',
                            background: '#F5F6F9',
                            borderRadius: '4px',
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{margin: '0 5px'}} >#</div>
                            <div style={{margin: '0 5px'}}>Name</div>
                            <div style={{margin: '0 5px'}}>Start Date</div>
                            <div style={{margin: '0 5px'}}>End Date</div>
                            <div style={{margin: '0 5px'}}>Options</div>
                            <div style={{margin: '0 5px'}}>Maximum Vote</div>
                        </div>
                        </thead>

                        <tbody className={classes.tableBody}>

                        <div className={classes.br}/>

                        <div style={{
                            height: 'auto',
                            padding: '10px 20px',
                            border: '1px solid #F3F3F3',
                            borderRadius: '4px',
                            opacity: 1,
                            width: '100%',
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{margin: '0 5px'}}>A012</div>
                            <div style={{margin: '0 5px'}}>Week 1</div>
                            <div style={{margin: '0 5px'}}>00-00-0000</div>
                            <div style={{margin: '0 5px'}}>00-00-0000</div>
                            <div style={{margin: '0 5px'}}>AS, JM, MA'AM</div>
                            <div style={{margin: '0 5px'}}>1,000,000</div>
                        </div>

                        <div className={classes.br}/>

                        <div style={{
                            height: 'auto',
                            padding: '10px 20px',
                            border: '1px solid #F3F3F3',
                            borderRadius: '4px',
                            opacity: 1,
                            width: '100%',
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{margin: '0 5px'}}>A012</div>
                            <div style={{margin: '0 5px'}}>Week 1</div>
                            <div style={{margin: '0 5px'}}>00-00-0000</div>
                            <div style={{margin: '0 5px'}}>00-00-0000</div>
                            <div style={{margin: '0 5px'}}>AS, JM, MA'AM</div>
                            <div style={{margin: '0 5px'}}>1,000,000</div>
                        </div>

                        <div className={classes.br}/>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default VotingPeriod;
