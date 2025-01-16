import { useEffect, useState } from "react";
import axios from 'axios';

export default function Hook () {
    const [passwordPolicy, setPasswordPolicy] = useState();

    useEffect(()=>{
        const fetchPolicy = async() => {
            try{
                const response = await axios.get('http://evantage.ddns.net/evantage_api/get_password_policy.php')
                setPasswordPolicy(response.data.data[0])
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