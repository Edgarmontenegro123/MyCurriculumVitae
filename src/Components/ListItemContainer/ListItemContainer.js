import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import MockUp from '../MockUp/MockUp'

const getItems = () => {
  return new Promise((res, rej) => {
    res(MockUp)
      //rej('No hay cursos disponibles!')
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
          <ItemList items = {item}/>
         </>
}
