import React from "react";
import "../App.css";
import {useState} from "react";

export default function Portal() {

    const [fname, setName] = useState("");
    const [hostel, setHostel] = useState("");
    const [room, setRoom] = useState("");
    const [complaint, setComplaint] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Form submitted");
        alert("Form submitted");

        setName("");
        setHostel("");
        setRoom("");
        setComplaint("");
    }

    return (
        <div className="Form">
            <form className="form-main" onSubmit={handleSubmit}>
                <h1 className="heading-main">Hostel Complaint Portal</h1>

                <label for="fname">Name:</label> <br/>
                <input type="text" id="fname" name="fname" onChange={e => setName(e.target.value)} value={fname}/> <br/>

                <label for="hostel">Hostel:</label> <br/>
                <input type="text" id="hostel" name="hostel" onChange={e => setHostel(e.target.value)} value={hostel}/> <br/>

                <label for="room">Room No:</label> <br/>
                <input type="number" id="room" name="room" onChange={e => setRoom(e.target.value)} value={room}/> <br/>

                <label for="complaint">Complaint:</label> <br/>
                <textarea name="textarea" id="complaint" onChange={e => setComplaint(e.target.value)} value={complaint}></textarea> <br/>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}