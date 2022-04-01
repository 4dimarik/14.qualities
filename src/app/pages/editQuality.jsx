import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditForm from "../components/ui/editForm";
import httpService from "../services/http.service";

const EditQualityPage = () => {
    const [quality, setQuality] = useState(null);
    const {id} = useParams()
    const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`


    const handeleSubmit = async (data)=>{
        try {
           await httpService.put(qualityEndPoint, data).then(res=>console.log(res.data.content));    
        } catch (error) {
            console.log("Expected error");            
        }
       
    }

    useEffect(async ()=>{
        const {data} = await httpService.get(qualityEndPoint)
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
