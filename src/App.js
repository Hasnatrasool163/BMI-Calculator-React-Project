import React, { useState } from "react";

function App2() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    let calBmi = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert("Fill all values")
        } 
        else{ const [feet, inches] = height.toString().split('.').map(Number);
        const totalHeightInches = feet * 12 + (inches || 0);
        const bmiValue = (weight / 0.453592) / Math.pow(totalHeightInches, 2) * 703;
        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5) {
            setMessage("😗 Underweight 🙄");
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            setMessage("✌✌ Normal");
        } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
            setMessage("😜 Overweight");
        } else if (bmiValue >= 30.0 && bmiValue <= 34.9) {
            setMessage("😊 Obese");
        }
        }
    }

    let reload = () => {
        window.location.reload();
    }

    return (
        <div className="App">
            <div className="Container">
                <h2>BMI Calculator</h2>
                <form onSubmit={calBmi}>
                    <div>
                        <label>Weight (Kg)</label>
                        <input type="number" placeholder="Enter your Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>
                    <div>
                        <label>Height (ft)</label>
                        <input type="number" placeholder="Enter your Height in ft" value={height} onChange={(e) => setHeight(e.target.value)} />
                    </div>
                    <div>
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn-btn-outline" type="button" onClick={reload}>Reload</button>
                    </div>
                    <div className="center">
                        <h3>Your BMI Index is: {bmi}</h3>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App2;