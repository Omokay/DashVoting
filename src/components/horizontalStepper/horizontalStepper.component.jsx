import ProfileSlider from "../profileSlider/profileSlider.component";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
   mainWrapper: {
       width: '100%',
       maxWidth: '960px',
       height: '200px',
       marginTop: '20px',
       marginBottom: '20px',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: '4px',
       padding: '0',
       [theme.breakpoints.down('md')]: {
           width: '600px',
           transition: 'width 1s linear 1s',
       },

   },
    padded: {
        width: 'inherit',
        height: 'auto',
        margin: '0 auto',
        // padding: '0 30px',
        overflowX: 'scroll',
        overflowY: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        backgroundColor: '#ffffff',
    },
    overview: {
       display: 'flex',
       alignItems: 'center',
       width: '99px',
       margin: '0 15px',
       height: 'auto',
       padding: '0',
       transition: '0.5s ease',
        '&:hover': {
           width: 'max-content',
            '& $bio': {
                visibility: 'visible',
            },
        }
    },
    bio: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        visibility: 'hidden',
    },
    bioWrapper: {
       width: '50px',
       height: 'auto',
    },
    header: {
        color: '#B7B7B7',
        fontSize: '9px',
        width: '28px',
        margin: '1px auto',
        padding: '0',
    },
    content: {
        minWidth: '67px',
        maxWidth:  'max-content',
        color: '#707070',
        margin: '2px auto',
        paddingLeft: '10px',
    },
}))



const HorizontalStepper = () => {
    const classes = useStyles();

    return (
        <div className={classes.mainWrapper}>
            <div className={classes.padded}>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                       <div className={classes.bioWrapper}>
                           <p className={classes.header}>Name</p>
                           <p className={classes.content}>Omoke Chuku</p>
                           <p className={classes.header}>Codename</p>
                           <p className={classes.content}>OC</p>
                       </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
                <div className={classes.overview}>
                    <ProfileSlider/>
                    <div className={classes.bio}>
                        <div className={classes.bioWrapper}>
                            <p className={classes.header}>Name</p>
                            <p className={classes.content}>Omoke Chuku</p>
                            <p className={classes.header}>Codename</p>
                            <p className={classes.content}>OC</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default HorizontalStepper;
