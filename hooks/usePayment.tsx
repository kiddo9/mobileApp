import React, { useEffect, useState } from 'react'
import api from '../API/api'

const usePayment = () => {
    const [paymentOptions, setPaymentMethod] = useState([])
    const [loader, setLoader] = useState(false)
    const [message, setMessage] = useState('')

    const getPaymentMethods = async () => {
        setLoader(true)
        const paymentMethod = await api.get('/paymentMethod')
        try {
            setPaymentMethod(paymentMethod.data)
        } catch (error) {
            setMessage("something went wrong check your connection")
        }finally{
            setLoader(false)
        }
    }

    useEffect(() => {
        getPaymentMethods()
    }, [])

  return {paymentOptions, loader, message}
}

export default usePayment
