import React from 'react';
import '../styles/DateInput.css';

const DateInput = ({ date, setDate }) => {
    return (
        <div className="date-input">
            <label htmlFor="date-picker">Select Date:</label>
            <input
                type="date"
                id="date-picker"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
        </div>
    );
};

export default DateInput;
