import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Grid, Card, CardHeader, CardMedia, CardContent, CardActions,
        Accordion, AccordionDetails, AccordionSummary, Avatar, IconButton, 
        Typography, List, ListItemText, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
      maxWidth: 345,
      marginTop: '-25%',
      boxShadow: '0px 0px 0.5px 0.5px #52B5F2'
    },
    media:{
      height: 0,
      paddingTop: '56.25%', // 16:9
      width: '90%',
      margin: '0 auto',
      boxShadow: '0px 0px 3px 5px #52B5F2'
    },
    expand:{
      marginTop: '-5%',
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform',{
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen:{
      transform: 'rotate(180deg)'
    },
    avatar:{
      backgroundColor: '#52B5F2'
    }, 
    gridContainer:{
      paddingLeft: '40px',
      paddingRight: '40px',
      marginBottom: '20%'
    },
    link:{
        color: '#52B5F2',
        textDecoration: 'none'
    }
  }))
    
export default function ItemList({items}){
  const classes = useStyles()

  return(
    <div /* style = {{display: 'flex'}} */>
      {items?.map(i => 
      <Grid key = {i.id} container spacing = {4} className = {classes.gridContainer} justifyContent = 'center'>
        <Grid item xs = {12} sm = {6} lg = {4}>
          <Card className = {classes.root}>
            <CardHeader
              avatar = {
                <Avatar aria-label = 'recipe' className = {classes.avatar}>
                  <img src = {i.avatar} 
                      alt = 'C'
                      width = '30px'
                      height = '30px'/>      
                </Avatar>
              }
              title = {i.title}
              subheader = {i.date}
            />
            <CardMedia
            className = {classes.media}
            image = {i.img}
            alt = {i.name}
            title = {i.name}
            />
            <CardContent>
              <Typography component={'div'} variant = 'body2' color = 'textSecondary' style = {{fontWeight:'bold'}}>
                {i.resume}
              </Typography>
            </CardContent>
            <CardActions disableSpacing className = {classes.accordion}>
              <Accordion>
                <AccordionSummary
                  expandIcon = {<ExpandMoreIcon />}
                  aria-controls = 'panel1a-content'
                  id = 'panel1a-header'
                >
                  <IconButton aria-label = 'share' style = {{marginTop : '-5%'}}>
                    <a className = {classes.link} href = {i.video} target = '_blank' rel = 'noreferrer'>
                      <i id = 'icon' className = 'fas fa-play'></i>
                    </a>
                  </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component={'div'}>
                    {i.description}
                    <br/>
                    Para realizarla se utilizaron tecnologías como: 
                    <List component="nav" aria-label="secondary mailbox folders">
                      <ListItemText primary = {<b>{i.tech}</b>} />
                    </List>       
                    <Typography component={'div'} style = {{fontWeight:'bold'}}>
                      Pruébala <a className = {classes.link} href = {i.deploy} target = '_blank' rel = 'noreferrer'>Acá!</a>
                      <br/>
                      Observa el <a className = {classes.link} href = {i.gitHub} target = '_blank' rel = 'noreferrer'>Código</a> Acá!
                    </Typography>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardActions>
          </Card>
        </Grid>
      </Grid>)}
    </div>
  )
}