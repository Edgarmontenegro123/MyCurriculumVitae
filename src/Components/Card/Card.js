import {useState} from 'react'
import clsx from 'clsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Grid, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, makeStyles} from '@material-ui/core'
import Logo from '../../Images/sunnyCloud.png'
import GifClimApp from '../../Images/gifClimApp.gif'
import './Card.css'

const useStyles = makeStyles((theme) => ({
  root:{
    maxWidth: 345,
    marginTop: '-10%'
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
    transition: theme.transitions.create('transform', {
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
  }
}))

export default function RecipeReviewCard({items}){
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  {/*return(
     <div>
      {items.map(i => 
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
            title = {i.avatarTitle}
            subheader = {i.avatarSubheader}
          />
          <CardMedia
          className = {classes.media}
          image = {i.cardMediaImage}
          alt = {i.avatarTitle}
          title = {i.avatarTitle}
          >
            <media>
              <source src = {i.cardMediaImage}></source>
            </media>
          </CardMedia>
          <CardContent>
            <Typography variant = 'body2' color = 'textSecondary' component = 'p'>
            <strong>{i.cardContentTypography}</strong>
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label = 'share' style = {{marginTop : '-5%'}}>
              <a href = {i.iconButton} target = '_blank' rel = 'noreferrer'><i id = 'icon' className = 'fas fa-play'></i></a>
            </IconButton>
            <IconButton
              className = {clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick = {handleExpandClick}
            > 
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in = {expanded} timeout = 'auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>{i.typography}</Typography>
              <Typography paragraph>
                {i.typographyParagraph}
              </Typography>
              <Typography paragraph>
                {i.typographyParagraph2}
                <ul>
                  <li>
                    {i.li1}
                  </li>
                  <li>
                    {i.li2}
                  </li><li>
                    {i.li3}
                  </li>
                </ul>
              </Typography>
              <Typography paragraph>
                <strong>{i.strong1}<a className = 'link' href = {i.link1} target = '_blank' rel = 'noreferrer'>Acá!</a></strong>
              </Typography>
              <Typography>
              <strong>Observa el <a className = 'link' href = {i.link2} target = '_blank' rel = 'noreferrer'>Código</a> Acá!</strong>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
    )}
    </div>
  )
} */}

return(
  <Grid container spacing = {4} className = {classes.gridContainer} justify = 'center'>
    <Grid item xs = {12} sm = {6} lg = {4}>
      <Card className = {classes.root}>
        <CardHeader
          avatar = {
            <Avatar aria-label = 'recipe' className = {classes.avatar}>
              <img src = {Logo} 
                   alt = 'C'
                   width = '30px'
                   height = '30px'/>      
            </Avatar>
          }
          title = 'ClimApp'
          subheader = 'Marzo 2021'
        />
        <CardMedia
        className = {classes.media}
        image = {GifClimApp}
        alt = 'ClimApp'
        title='ClimApp'
        >
          <media>
            <source src = {{GifClimApp}}></source>
          </media>
        </CardMedia>
        <CardContent>
          <Typography variant = 'body2' color = 'textSecondary' component = 'p'>
          <strong>Primera App FrontEnd realizada con React y una API externa.</strong>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label = 'share' style = {{marginTop : '-5%'}}>
            <a href = 'https://vimeo.com/manage/videos/586698718' target = '_blank' rel = 'noreferrer'><i id = 'icon' className = 'fas fa-play'></i></a>
          </IconButton>
          <IconButton
            className = {clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick = {handleExpandClick}
          > 
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in = {expanded} timeout = 'auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>ClimApp:</Typography>
            <Typography paragraph>
              Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que 
              elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes. 
            </Typography>
            <Typography paragraph>
              Para realizarla se utilizaron tecnologías como:
              <ul>
                <li>
                  React
                </li>
                <li>
                  CSS3
                </li><li>
                  Material UI
                </li>
              </ul>
            </Typography>
            <Typography paragraph>
              <strong>Pruébala <a className = 'link' href = 'https://climappmontenegro.vercel.app' target = '_blank' rel = 'noreferrer'>Acá!</a></strong>
            </Typography>
            <Typography>
            <strong>Observa el <a className = 'link' href = 'https://github.com/Edgarmontenegro123/ClimApp' target = '_blank' rel = 'noreferrer'>Código</a> Acá!</strong>
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  </Grid>
)
}
