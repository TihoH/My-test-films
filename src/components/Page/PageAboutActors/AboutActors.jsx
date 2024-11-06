import React, { useEffect, useState } from 'react';
import clases from './AboutActors.module.scss'
import { useParams } from 'react-router';
// import {getDataIdFilm} from '../../../API/getFilms.js'
import AboutActorsSlider from '../../Slider/AboutActors/AboutActorsSlider.jsx'

const AboutActors = () => {
    // const {id} = useParams()
    // const [ personData , setPersonData ] = useState({})

    // async function getPersons(id){
    //     const response = await getDataIdFilm(id)
    //     setPersonData(response)
    //     console.log(personData)
    // }

    // useEffect( () => {
    //     getPersons(id)
    // } , [] )

    return (
        <div>
            
        </div>
        // <div className={clases.AboutActors}>
        //     <h1>{personData?.name}</h1>
        //     <div className={clases.AboutActors_sectionPhoto}>
        //         <AboutActorsSlider person={personData}/>
        //         {/* <div><img src={personData.photo} alt="person photo" /></div> */}
        //     </div>
        // </div>
    )
};

export default AboutActors;