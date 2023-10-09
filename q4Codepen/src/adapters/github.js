import React, { useState, useCallback } from "react";
import axios from 'axios';

let token = process.env.GITHUB_TOKEN;
let url = `https://api.github.com`

const authAxios = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default function SearchRepos() {
    const [data, setData] = useState([]);
    const [requestError, setRequestError] = useState();

    const fetchData = useCallback(async ()=> {
        try {
            const result = await authAxios.get(process.env.GITHUB_REPO);
            setData(result.data)
            console.log(result.data)
        } catch (err) {
            setRequestError(err.message)
        }
    });
    

    return(
        <div>
            <button onClick={()=> fetchData()}>SEARCH DATA</button>
        </div>
    )
}
