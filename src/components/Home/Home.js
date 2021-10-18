import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const expenditure = [{
        id : 1,
        books : {
            math : 100,
            eng : 120,
            bangla : 40,
                dress : {
                shirt : 550,
                squantity : 2,
                pent : 800,
                pquantity : 2
                     },
        schoolfee : 1500,
        launch : 50
    }
        
    }]
    const [schools,setSchools] = useState([]);
    {
        expenditure.map(expend => setSchools(expend))
    }
    const addShirt = () => {
       console.log(schools)
    }
    
    return (
        <div className="home">
            <div className="scl"><h1>AK School</h1>
            <h3>Calculate School Cost</h3>
            <button onClick={addShirt} className="btn-regular">Add Shirt +</button>
            <button className="btn-regular">Remove Shirt -</button></div>
            <div><Cart></Cart></div>
        </div>
    );
};

export default Home;