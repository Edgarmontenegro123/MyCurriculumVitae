import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    spanStyle:{
        color: 'darkgrey',
        [theme.breakpoints.down('sm')]: {
            marginTop: '15%',
            fontSize: '0.9rem',
            marginLeft: '3%'
          },
        /* [theme.breakpoints.down('sm')]: {
        marginTop: '5%',
        fontSize: '0.9rem',
        marginLeft: '3%'
        } */
        
        [theme.breakpoints.down('xl')]: {
        marginTop: '5%',
        fontSize: '0.9rem',
        marginLeft: '3%'
        }
    }
}))

export default function Content(){
    const classes = useStyles()
    return(
        <div className = {classes.spanStyle}>
            <span><b>Teléfono: </b>+54 911 6210 1137</span>
            <br/>
            <br/>
            <span><b>Correo Electrónico: </b>edgarmontenegro321@gmail.com</span> 
            <br/>
            <br/>
            <span><b>Lugar de Residencia: </b>Buenos Aires, Argentina</span>
        </div>
    )
}
