import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Photo from '../../Images/Edgar.jpeg'

const useStyles = makeStyles((theme) => ({
  backUp:{
    padding: theme.spacing(1),
    textAlign: 'left',
    backgroundColor: '#52B5F2',
    height: '40vh',
    [theme.breakpoints.down('xs')]:{
      height:'22vh',
      width: 'auto'
    },
     [theme.breakpoints.up('sm')]:{
      height:'28vh',
      width: 'auto'
    },
    [theme.breakpoints.up('md')]:{
      height:'33vh',
      width: 'auto'
    }
  }, 
  photo:{
    marginLeft: '3rem',
    width: '12rem',
    boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
    borderRadius: '50%',
    [theme.breakpoints.down('xs')]:{
      marginTop: '5%',
      width:'30%',
      marginLeft: '1rem',
    },
     [theme.breakpoints.up('sm')]:{
      marginTop: '1%',
      width:'10rem',
      marginLeft: '2rem',
    },
    [theme.breakpoints.up('md')]:{
      marginTop: '2%',
      width:'10rem',
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
