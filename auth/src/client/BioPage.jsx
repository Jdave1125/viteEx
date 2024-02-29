import axios from "axios";
import { useEffect, useState } from "react";


function BioPage(){
    const [bio,setBio] = useState(" ");

    useEffect(() => {
        fetchBio();
    },[]);


    const fetchBio = async() => {
        try{
            const response = await axios.get("/bio");
            setBio(response.data);
        }catch(error){
            console.error("Error fetching bio",error)
        }
    }

    return(
        <div>
            <h2>BIO PAGE</h2>
            <p>{bio}</p>
        </div>
    )
}

export default BioPage;