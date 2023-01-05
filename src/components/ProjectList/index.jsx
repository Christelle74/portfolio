import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import './projectList.scss'


const ProjectList = () => {
    const [data, setData] = useState()
    // const radios = [ {id:1, value: "Html"},{id:2, value: "Css"},{id:3, value: "Javascript"},{id:4, value: "React"},{id:5, value: "Projets de formation"},{id:6, value: "Projets professionnels"}]
    // const selectedRadio = "javascript";

    // const [radio, setRadio]= useState({radios}, {selectedRadio})
    //console.log(radios, radio, setRadio)


    useEffect(() => {
        axios.get("data/portfolioData.json")
                .then((response)=>setData(response.data))
    }, [])

    // const handleRadio=(e)=>{
    //     let radio = e.target.value;
    //     setRadio({selectedRadio:radio})
    //     console.log(radio)
    // }

    return (
        <div className='portfolioContent'>
            {/* <ul className="radioDisplay">
                {
                    radios.map((radio)=>{
                        return(
                        <li key={radio.id}>
                            <input type="radio" name="radio" checked={radio.value===selectedRadio} value={radio.value} id={radio.value} onChange={handleRadio}/>
                            <label htmlFor={radio.value}>{radio.value}</label>
                        </li>
                    )})
                }
            </ul> */}
            
            <div className='projects'>
                {/* {data?.filter(project=>project.utils.includes(selectedRadio)) */}
                {    data?.map((project)=>(
                    <ProjectCard key={project.id} project={project}/>
                ))}
                
            </div>
        </div>
    );
};

export default ProjectList;