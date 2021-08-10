import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    spanStyle:{
        color: 'darkgrey',
        [theme.breakpoints.down('xs')]:{
            marginTop: '10%',
            fontSize: '1rem',
            marginLeft: '3%',
            justifyContent: 'center',
          },
        [theme.breakpoints.up('sm')]:{
            marginTop: '3%',
            fontSize: '1.2rem',
            marginLeft: '3%'
          },
        [theme.breakpoints.up('md')]:{
        marginTop: '2%',
        fontSize: '1.3rem',
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
