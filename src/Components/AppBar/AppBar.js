import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import TwitterIcon from '@material-ui/icons/Twitter'
import MailIcon from '@material-ui/icons/Mail'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'


const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}))

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position='fixed' style = {{backgroundColor: '#52B5F2' /* 'rgb(49, 208, 129)' */}} className={classes.appBar}>
        <Toolbar className={classes.grow}>
          <IconButton href = 'https://twitter.com/MontenegroCode' target='_blank' rel='noreferrer' color='inherit' aria-label='open drawer'>
            <TwitterIcon />
          </IconButton >
          <Fab href = 'https://www.canva.com/design/DAElFbGgReo/w5KZpX2OLMFUX0hXbxV56w/view?utm_content=DAElFbGgReo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink'
           target='_blank' rel='noreferrer' color='secondary' aria-label='add' className={classes.fabButton} /* style ={{backgroundColor: 'rgb(244, 126, 35)'}} */>
            PDF
          </Fab>
          <IconButton href = 'mailto:edgarmontenegro321@gmail.com' target='_blank' rel='noreferrer'>
            <MailIcon style = {{color: 'whitesmoke'}}/>
          </IconButton>
          <IconButton href = 'https://www.linkedin.com/in/edgarmontenegro/' target='_blank' rel='noreferrer'>
            <LinkedInIcon style = {{color: 'whitesmoke'}}/>
          </IconButton>
          <IconButton href = 'https://github.com/Edgarmontenegro123' target='_blank' rel='noreferrer'>
            <GitHubIcon style = {{color: 'whitesmoke'}}/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
