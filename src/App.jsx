import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async () => {
        console.log("hit");
        const result = await axios.post("http://localhost:3000/signup", {
            email,
            password,
            name,
        });
        console.log(result.data);
    };

    return (
        <>
            <div>hi there this is a test app </div>

            <div>
                <input
                    type="text "
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}

export default App;
