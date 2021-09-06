import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

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
    filterButton: {
        width: '118px',
        height: '40px',
        border: '0.8px solid #E1E1E1',
        borderRadius: '4px',
        opacity: '1',
        right: '10px',
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
const CompanySummary = () => {
    const classes = useStyles();
    return (
        <div  className={classes.root}>
            <div className={classes.headerDiv}>
                <h1 className={classes.header}>Company Summary</h1>
                <div className={classes.filterButton}/>
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
                        overflow: 'scroll',
                        border: 'none',
                    }} className='row'>
                        <div className='col-md-1 col-xs-1 text-left' >#</div>
                        <div className='col-md-2 col-xs-2  text-left'>Program</div>
                        <div className='col-md-2 col-xs-2 text-left'>Contact Person</div>
                        <div className='col-md-3 col-xs-3 text-left'>Email Address</div>
                        <div className='col-md-2 col-xs-2 text-left'>Phone Number</div>
                        <div className='col-md-2 col-xs-2 text-left'>Reg Date</div>
                    </div>
                    </thead>

                    <tbody className={classes.tableBody}>

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
                        <div className='col-md-2 text-left'>Payattitude</div>
                        <div className='col-md-2 text-left'>Omoke Chuku</div>
                        <div className='col-md-3 text-left'>info@email.com</div>
                        <div className='col-md-2 text-left'>08105470291</div>
                        <div className='col-md-2 text-left'>16-08-2021</div>
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
                        <div className='col-md-2 text-left'>Payattitude</div>
                        <div className='col-md-2 text-left'>Omoke Chuku</div>
                        <div className='col-md-3 text-left'>info@email.com</div>
                        <div className='col-md-2 text-left'>08105470291</div>
                        <div className='col-md-2 text-left'>16-08-2021</div>
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
                        <div className='col-md-2 text-left'>Payattitude</div>
                        <div className='col-md-2 text-left'>Omoke Chuku</div>
                        <div className='col-md-3 text-left'>info@email.com</div>
                        <div className='col-md-2 text-left'>08105470291</div>
                        <div className='col-md-2 text-left'>16-08-2021</div>
                    </div>

                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default CompanySummary;
