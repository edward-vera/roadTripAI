import React, { useEffect, useState } from 'react';
import itineraryDummyData from '../assets/sampleItineraryData';

const Itinerary = (itinerary) => {
    const [newItinerary, setNewItinerary] = useState([]);

    useEffect(() => {
        setNewItinerary(itineraryDummyData);
        console.log(itineraryDummyData)
    }, [])

    return (
        <div>
            <h1 sx={{textTransform: 'capitalize'}}>
                Itinerary:
            </h1>
            <ul>
                {newItinerary.map((item, index) => (
                    <ul key={index}>
                        <ul>
                            
                        </ul>
                    </ul>
                ))}
            </ul>
        </div>
    );
}

export default Itinerary;
