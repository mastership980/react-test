import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Festivals() {
    const navigate = useNavigate()
    const [festivals, setFestivals] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/data/festivals')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setFestivals(data)
            })
    }, [])

    function handleDelete(_id){
        fetch('http://localhost:5000/data/deleteFestival?id=' + _id, {
            method: "DELETE"
        })
        .then(res => {
            if (res.ok) {   
                fetch('http://localhost:5000/data/festivals')
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setFestivals(data)
                })
            }
        })
    }

    return ( 
        <div className="festivals">
            <table>
                <tr>
                    <th>Név</th>
                    <th>Időpont</th>
                    <th>Telefonszám</th>
                    <th>Email</th>
                    <th>Napok</th>
                    <th>Ár</th>
                </tr>
                {festivals.map(festival => (
                    <tr key={festival._id}>
                        <td>{festival.name}</td>
                        <td>{festival.birth}</td>
                        <td>{festival.phone}</td>
                        <td>{festival.email}</td>
                        <td>{festival.days}</td>
                        <td>{festival.price}</td>
                        <td>
                            <button onClick={() => {
                                handleDelete(festival._id)
                            }}>Töröl</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
     );
}

export default Festivals;