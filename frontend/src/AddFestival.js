import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddFestival() {
    const navigate = useNavigate()
    const [festival, setFestival] = useState({
        name: '',
        birth: '',
        phone: '',
        email: '',
        days: '',
        price: ''
    })

    function handleChange(e) {
        const {name, value} = e.target
        setFestival(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch('http://localhost:5000/data/addFestival', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(festival)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(festival => {
            setFestival({
                nev: '',
                szuletesi_datum: '',
                telefonszam: '',
                email: '',
                foglalt_napok_szama: '',
                osszeg: ''
            });
            navigate('/');
        })

    }

    return (
        <div className="addFestival">
            <h1>Fesztivál hozzáadása</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" placeholder="Adja meg a nevét" onChange={handleChange} required/>
                
                <label htmlFor="birth">Date of Birth:</label>
                <input type="date" name="birth" id="birth" onChange={handleChange} required/>
                
                <label htmlFor="phone">Phone Number:</label>
                <input type="number" name="phone" id="phone" placeholder="Adja meg a telefonszámát" onChange={handleChange} required/>
                
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder="Adja meg az email címét" onChange={handleChange} required/>
                
                <label htmlFor="days">Reserved days:</label>
                <input type="number" name="days" id="days" placeholder="Adja meg a lefoglalt napok számát" onChange={handleChange} required/>
                
                <label htmlFor="price">Price:</label>
                <input type="number" name="price" id="price" placeholder="Adja meg az összeget" onChange={handleChange} required/>

                <button>Add</button>
            </form>
        </div> 
    );
}

export default AddFestival;