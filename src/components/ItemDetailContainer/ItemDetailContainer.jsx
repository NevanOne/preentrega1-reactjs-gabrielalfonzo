import React, { useState, useEffect } from 'react'
import {pedirProductos} from '../../helpers/pedirProductos'
import {ImSpinner2} from 'react-icons/im'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    /*         setLoading(true)
            pedirProductos()
                .then(res =>{
                    setItem( res.find( prod => prod.id === Number(itemId)))
                })
                .catch((error) => console.log(error))
                .finally(() => {
                    setLoading(false)
                }) */
    useEffect(() =>{
       const db = getFirestore()
       const productos = db.collection('productos')
       const item = productos.doc(itemId)
       item.get()
        .then((doc)=>{
            setItem({
                id: doc.id, ...doc.data()
            })
        })
        .catch((err)=> console.log(err))
        .finally(()=>{
            setLoading(false)
        })

    },[itemId])


  return (
    <section>
        {
            loading
            ?<ImSpinner2/>
            :<ItemDetail {...item}/>
        }
    </section>
  )
}
