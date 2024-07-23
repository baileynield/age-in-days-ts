import React, { useState } from "react";

import styles from "./Calculator.module.css"

const Calculator: React.FC = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState<number | string>("");
    // This is what handles the display of age in days
    const [ageInDays, setAgeInDays] = useState<number | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        // Prevent the page from refreshing wwhen the user clicks submit
        event.preventDefault();

        // Only show the result if the user has put in an age
        if (typeof age === "number") {
        setAgeInDays(age * 365);            
        } else {
            alert("Please enter an age");
        }

    }

    const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newAge = event.target.value;
        // If input is an empty string, allow the empty string. They won't be able to clear the number if we don't have this. 
        // Because the value we get from the input box always comes 
        // back as a string, cast the value as type number.
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
