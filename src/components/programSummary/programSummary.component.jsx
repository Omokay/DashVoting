import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Avatars from '../../components/avatarGroup/avatarGroup.component';
import FilterButton from "../filterButton/filterButton.component";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: '71%',
        height: '335px',
        background: '#FFFFFF',
        padding:  '20px',
        margin: '20px 0',
    },
    wrapper: {
        width: '100%',
        heigth: '100%',
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
        height: 'auto',
        width: '100%',
        border: 'none',
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
    return (
        <>
            <div className={classes.root}>
                <div className={classes.headerDiv}>
                    <h1 className={classes.header}>Program Summary</h1>
                    <FilterButton options={['Default', 'Ascending', 'Descending']}/>
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
                        }} className='row'>
                            <div className='col-md-1 text-left' >#</div>
                            <div className='col-md-2 text-left'>Program</div>
                            <div className='col-md-2 text-left'>Options</div>
                            <div className='col-md-3 text-left'>Voting Period</div>
                            <div className='col-md-2 text-left'>Voting Cost</div>
                            <div className='col-md-2 text-left'>Status</div>
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
                        }} className='row'>
                            <div className='col-md-1 text-left'>A012</div>
                            <div className='col-md-2 text-left'>Amazon Website</div>
                            <div className='col-md-2 text-left'>
                                <Avatars />
                            </div>
                            <div className='col-md-3 text-left'></div>
                            <div className='col-md-2 text-left'></div>
                            <div className='col-md-2 text-left'></div>
                        </div>

                        <div className={classes.br}/>


                        <div style={{
                            height: '50px',
                            padding: '10px 20px',
                            border: '1px solid #F3F3F3',
                            borderRadius: '4px',
                            opacity: 1,
                            width: '100%',
                            margin: '0 auto',
                        }} className='row'>
                            <div className='col-md-1 text-left'>A012</div>
                            <div className='col-md-2 text-left'>Amazon Website</div>
                            <div className='col-md-2 text-left'></div>
                            <div className='col-md-3 text-left'></div>
                            <div className='col-md-2 text-left'></div>
                            <div className='col-md-2 text-left'></div>
                        </div>

                        <div className={classes.br}/>

                        <div style={{
                            height: '50px',
                            padding: '10px 20px',
                            border: '1px solid #F3F3F3',
                            borderRadius: '4px',
                            opacity: 1,
                            width: '100%',
                            margin: '0 auto',
                        }} className='row'>
                            <div className='col-md-1 text-left'>A012</div>
                            <div className='col-md-2 text-left'>Amazon Website</div>
                            <div className='col-md-2 text-left'></div>
                            <div className='col-md-3 text-left'></div>
                            <div className='col-md-2 text-left'></div>
                            <div className='col-md-2 text-left'></div>
                        </div>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProgramSummary;
