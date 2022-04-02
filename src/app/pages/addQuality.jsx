import React from "react";
import QualityForm from "../components/ui/qualityForm";
const AddQualityPage = () => {
    const handeleSubmit = (data)=>{
        // updateQuality(data)       
        console.log(data)
    }
    return (
        <>
            <h1>Add Quality</h1>
            <QualityForm onSubmit={handeleSubmit}/>
        </>
    );
};

export default AddQualityPage;
