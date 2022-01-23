import { Box, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    component: {
        margin: 50,
        '& > *': {
            marginTop: 50
        }
    },
    image: {
        width: '50%',
        height: '50%'
    }
})

const HomePage = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Typography variant="h4">This is Home Page</Typography>
            <Box >
                <img src='https://media.istockphoto.com/photos/application-programming-interface-software-development-tool-business-picture-id1317706831?b=1&k=20&m=1317706831&s=170667a&w=0&h=hh588gXgaQgmvHzPJmKfRCRFU2dGNUhtdxd5HRwBeXE=' className={classes.image} />
                
            </Box>
        </Box>
    )
}

export default HomePage;