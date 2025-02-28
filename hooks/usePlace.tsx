import React, { useEffect, useState } from 'react'
import api from '../API/api'

const usePlace = (id: any) => {
  const [place, setPlace] = useState<any>({}) // ✅ Initialize as an object, not an array
  const [p, setP] = useState<number>()
  const [price, setPrice] = useState<number>()

  const getPlace = async (id: any) => {
    try {
      const response = await api.get(`/getPlace/${id}`)
      const data = response.data

      setP(data.price) // ✅ Corrected `setP`
      setPrice(data.price) //data.price

      setPlace({
        id: data.id,
        image: data.image,
        name: data.name,
        location: data.location,
        rating: data.rating,
        type: data.type,
        estimated: data.estimated,
        via: data.via,
        price: data.price, //Use `data.price`, not `setP(data.price)`
        description: data.description,
      })
    } catch (error) {
      console.error('Error occurred:', error)
    }
  }

  useEffect(() => {
    if (id) getPlace(id) //Ensure `id` is valid before calling the API
  }, [id])

  return { place, p, price }
}

export default usePlace
