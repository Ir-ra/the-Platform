import { useState, useEffect } from "react"
import {projectAuth} from '../firebase/config'
import { useAuthContext } from "./useAuthContext"

export const useSignUp = () => {

    //for clean up function
    const [isCancelled, setIsCancelled] = useState(false)

    // const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const {dispatch} = useAuthContext()

    const signUp = async(email, password, displayName) => {
        setError(null)
        setIsPending(true)

        try {
            //sign up user
            const response = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(response.user) // це буде щойно створений юзер
       
            if(!response){
                throw new Error('Could not complete signup')
            }

            //upd add displayName
            await response.user.updateProfile({displayName: displayName})

            //dispatch login action
            dispatch({type: 'LOGIN', payload: response.user})

            //update state 
            if(!isCancelled){
                setIsPending(false)
            setError(null)
            }

        } catch (error) {
            if(!isCancelled){
                console.log(error.message)
                setError(error.message)
                setIsPending(false)
            }
        }
    }

    //CLEAN up function
    useEffect(()=>{
        return () => setIsCancelled(true)
    },[])

    return {error, isPending, signUp}
}