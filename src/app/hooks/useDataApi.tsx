import { useEffect, useState } from "react";
import axios, { AxiosResponse } from 'axios'
import FormatData from "../utils/formatData";
import { formatedData } from "../models/formatedData";

const UseDataApi = (userId: string) => {
    const baseUrl = "http://localhost:3000/user";
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [dataFormated, setDataFormated] = useState<formatedData>();
  
    useEffect(() => {
      setLoading(true);
      setError(false);
  
      async function getData() {
        try {
          const endpoints = [
            `${baseUrl}/${userId}`,
            `${baseUrl}/${userId}/activity`,
            `${baseUrl}/${userId}/average-sessions`,
            `${baseUrl}/${userId}/performance`
          ];
  
          const promises = endpoints.map((endpoint) => axios.get(endpoint) as Promise<AxiosResponse>);
          const responses = await Promise.all(promises);
  
          const tmpData: any[] = [];
  
          responses.forEach(({ data, statusText }) => {
            if (statusText !== "OK") {
              setError(true);
              return;
            }
            tmpData.push(data.data);
          });
  
          setDataFormated(new FormatData(tmpData) as any);
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
  