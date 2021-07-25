import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Divider} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    divContainer:{
        color: 'whitesmoke', 
        marginTop: '5%',
        marginLeft: '31%', 
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            width:'16rem',
            marginLeft: '40%',
            top: 0,
            fontSize: '0.8rem'
          },
        [theme.breakpoints.down('lg')]: {
        width:'16rem',
        marginLeft: '40%',
        top: 0,
        fontSize: '0.8rem',
        top: -10
        }
    }
}))

export default function Title(){
    const classes = useStyles()
    return(
        <>  
            <div className = {classes.divContainer}>
                <h1>Hola mi nombre es Edgar!</h1>
                <Divider />
                <h3>FullStack Web Developer</h3>
                <Divider />
            </div>          
        </>
    )
}
