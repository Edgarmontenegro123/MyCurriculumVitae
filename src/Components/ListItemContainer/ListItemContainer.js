import React, {useState, useEffect} from 'react'
import Card from '../Card/Card'
import Logo from '../../Images/sunnyCloud.png'
import gifClimApp from '../../Images/gifClimApp.gif'
import './ListItemContainer.css'

const getItems = () => {
  return new Promise((res, rej) => {
      res([{avatar: {Logo}, 
            avatarTitle: 'ClimApp', 
            avatarSubheader: 'Marzo 2021', 
            cardMediaImage: {gifClimApp}, 
            cardContentTypography: 'Primera App FrontEnd realizada con React y una API externa.',
            iconButton: 'https://vimeo.com/manage/videos/586698718',
            typography: 'ClimApp: ',
            typographyParagraph: 'Esta es una App con una interfaz amigable, que muestra la hora y la fecha detallada del lugar donde te encuentres, con un buscador intuitivo, para que elijas tus ciudades favoritas y en ellas puedas observar los datos climáticos más relevantes.',
            typographyParagraph2: 'Para realizarla se utilizaron tecnologías como: ', 
            li1: 'React',
            li2: 'CSS3',
            li3: 'Material UI',
            strong1: 'Pruébala ',
            link1: 'https://climappmontenegro.vercel.app',
            link2: 'https://github.com/Edgarmontenegro123/ClimApp',
            name: 'Prueba!!!!'}])
    /* rej('No hay cursos disponibles!') */
  })
}

export default function ListItemContainer(){
  const[item, setItem] = useState([])
  const[error, setError] = useState(null)
  useEffect(() => {
    getItems().then(items => {
      setItem(items)
    },
    err => {
      setError(err)
    })
  }, [])
  return <>
          {error && <p style = {{color: 'whitesmoke'}}>{error}</p>}
          <Card items = {item}/>
        </>
}
