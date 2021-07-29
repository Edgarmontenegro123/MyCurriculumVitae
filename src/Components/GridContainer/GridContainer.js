import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Photo from '../../Images/EdgarPerfil.jpeg'

const useStyles = makeStyles((theme) => ({
  backUp:{
    padding: theme.spacing(1),
    textAlign: 'left',
    backgroundColor: '#52B5F2' /* 'rgb(49, 208, 129)' */,
    height: '40vh',
    [theme.breakpoints.down('sm')]:{
      height:'25vh',
      width: 'auto'
    },
    [theme.breakpoints.down('xl')]:{
      height:'36vh',
      width: 'auto'
    }
  }, 
  photo:{
    marginLeft: '3rem',
    width: '12rem',
    display: 'block',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]:{
      marginTop: '10%',
      width:'7rem',
      marginLeft: '1rem'
    },
    [theme.breakpoints.down('xl')]:{
      marginTop: '5%',
      width:'8rem',
      marginLeft: '3rem'
    }
  }
}))

export default function GridContainer(){
  const classes = useStyles()

  return(
      <Grid item xs = {12}  className = {classes.backUp}>
        <img src = {Photo} className = {classes.photo} alt = 'MyImage'/>
      </Grid>
  )
}
