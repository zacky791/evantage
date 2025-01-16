import { useEffect, useState } from "react";
import axios from 'axios';

export default function Hook () {
    const [passwordPolicy, setPasswordPolicy] = useState();

    useEffect(()=>{
        const fetchPolicy = async() => {
            try{
                const response = await axios.get('http://localhost:3001/api/password-policy')
                setPasswordPolicy(response.data)
                
            } catch (error) {
                console.error('Error fetching policy',error)
            }
        }
        fetchPolicy();
    },[])

    return {
        passwordPolicy,
    }
}