import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/ui/editForm";
import axios from "axios"

const EditQualityPage = () => {
    const [quality, setQuality] = useState(null);
    const {id} = useParams()
    const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`
    const handeleSubmit = (data)=>{
        axios.put(qualityEndPoint, data).then(res=>console.log(res.data.content))
    }

    useEffect(async ()=>{
        const {data} = await axios.get(qualityEndPoint)
        setQuality(data.content)
    },[id]);
    return (
        <>
            <h1>Edit Quality Page</h1> 
            {quality!==null ? <EditForm data={quality} onSubmit={handeleSubmit} />:"Loading"}
        </>
    );
};

export default EditQualityPage;
