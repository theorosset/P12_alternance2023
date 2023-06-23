import { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios'
import FormatData from "../utils/formatData";
import { formatedData } from "../models/formatedData";

const UseDataApi = (userId: string, endpoint: string) => {
    const baseUrl = "http://localhost:3000/user";
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [dataFormated, setDataFormated] = useState<formatedData>();
  
    useEffect(() => {
      setLoading(true);
      setError(false);
  
      async function getData() {
        try {
          let url = ''
          
          if(endpoint === 'USER_ACTIVITY') {
            url = `${baseUrl}/${userId}/activity`
          } else if (endpoint === 'USER_MAIN_DATA') {
            url =  `${baseUrl}/${userId}`
          } else if (endpoint === 'USER_AVERAGE_SESSIONS') {
            url = `${baseUrl}/${userId}/average-sessions`
          } else if (endpoint === 'USER_PERFORMANCE') {
            url = `${baseUrl}/${userId}/performance`
          }
  
         const { data, statusText } = await axios.get(url) as any
          
         if(statusText !== "OK") {
          setError(true);
          return;
         }
  
          setDataFormated(new FormatData(data.data));
        } catch (error) {
          console.error(error);
          setError(true);
        } finally {
          setLoading(false);
        }
      }
  
      getData();
    }, [userId]);

    return [loading, error, dataFormated] as const;
  };
  
  export default UseDataApi;
  