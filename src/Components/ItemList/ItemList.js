import React, {useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Grid, Card, CardHeader, CardMedia, CardContent, CardActions,
        Accordion, AccordionDetails, AccordionSummary, Avatar, IconButton, 
        Typography, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root:{
      maxWidth: 345,
      marginTop: '-10%',
      marginBottom:'-40%',
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
    const [expanded, setExpanded] = useState(false)
  
    const handleExpandClick = () => {
      setExpanded(!expanded)
    }

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
      }

  return(
    <div /* style = {{display: 'flex'}} */>
      {items?.map(i => 
      <Grid container spacing = {4} className = {classes.gridContainer} justify = 'center'>
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
              subheader = {i.avatarSubheader}
            />
            <CardMedia
            className = {classes.media}
            image = {i.cardMediaImage}
            alt = {i.name}
            title = {i.name}
            >
            </CardMedia>
            <CardContent>
              <Typography variant = 'body2' color = 'textSecondary' component = 'p'>
              <strong>{i.cardContentTypography}</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing className = {classes.accordion}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <IconButton aria-label = 'share' style = {{marginTop : '-5%'}}>
                    <a className = {classes.link} href = {i.iconButton} target = '_blank' rel = 'noreferrer'><i id = 'icon' className = 'fas fa-play'></i></a>
                  </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {i.typographyParagraph}
                    <br/>
                    {i.typographyParagraph2}
                    <ul>
                      <li>{i.li1}</li>
                      <li>{i.li2}</li>
                      <li>{i.li3}</li>
                      <li>{i.li4}</li>
                      <li>{i.li5}</li>
                    </ul>
                    <Typography paragraph>
                      <strong>Pruébala <a className = {classes.link} href = {i.link1} target = '_blank' rel = 'noreferrer'>Acá!</a></strong>
                    </Typography>
                    <Typography>
                      <strong>Observa el <a className = {classes.link} href = {i.link2} target = '_blank' rel = 'noreferrer'>Código</a> Acá!</strong>
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