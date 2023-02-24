import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);     

    //do the fetch here and set the state to be returned
    const fetchData = async() => {
        //do the fetch here
        const response = await fetch(url);
        const _data = await response.json().catch(err => setError(error.message));
        setData(_data);
        setLoading(false);
    }


    //we want the action to be done on render, so we use useEffect
    useEffect(() => {
        //call the function here
        fetchData();
    }, []);


    //can also create a refetch function and export it if needed


   return {data, error, loading};
}