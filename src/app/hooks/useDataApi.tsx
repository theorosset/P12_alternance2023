import { useEffect, useState } from "react";
import axios from 'axios'

const UseDataApi = (userId: string) => {
    const baseUrl = "http://localhost:3000/user"

    const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [dataFormated, setDataFormated] = useState<object>({});

    useEffect(() => {
        setLoading(true)
        setError(false)
       
        async function getData() {
            try {
                const endpoints = [`${baseUrl}/${userId}`, `${baseUrl}/${userId}/activity`, `${baseUrl}/${userId}/average-sessions`, `${baseUrl}/${userId}/performance`];
                const promises = endpoints.map(endpoint => axios.get(endpoint) as Promise<Response>);
                const responses: Response[] = await Promise.all(promises);

                responses.forEach((res) => {
                    if(res.statusText !== "OK") {
                       return setError(true)
                    }
                    // use function format data and push it in data formated
                })
            } catch (error) {
                console.error(error)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [userId])

    return [loading, error, dataFormated] as const
}

export default UseDataApi

