import React, { useState } from "react";

import styles from "./Calculator.module.css"

const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>("");
    const [ageInDays, setAgeInDays] = useState<number | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (typeof age === "number") {
        setAgeInDays(age * 365);            
        } else {
            alert("Please enter an age");
        }

    }

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newAge = event.target.value;
        setAge(newAge === "" ? "" : Number(newAge));
    };

    return (
        <div className={styles.calculator}>
            <form onSubmit={handleSubmit} className={styles.calculatorForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={name} 
                        placeholder="Enter name" 
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setName(event.target.value)} 
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        placeholder="Enter age in years"
                        onChange={handleAgeChange} 
                    />
                </div>
                <button type="submit">Submitme</button>
            </form>
            {/* Only show the result if they've submitted an age */}
            {ageInDays && <h2>{name !== "" ? name : "This person"} is {ageInDays} days old!</h2>}
        </div>
    );
}

export default Calculator;
