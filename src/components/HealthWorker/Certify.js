import React from 'react';
import '../layout.css';

const Certify = () => {
    return (
        <div className="account-container">
            <div className="account-edit">
                <h2>Certify Vaccination</h2>
                    <form>
                        <label>
                            ID
                            <input type="text" name="name"  />
                        </label>
                        <label>
                            Date
                            <input type="date" />
                        </label>
                        <label>
                            Time
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Vaccine Brand
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Dosage #
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Certify"></input>
                    </form>
            </div>
        </div>
    );
}

export default Certify;