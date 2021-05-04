import React from 'react';
import '../layout.css';

const AddCase = () => {
    return (
        <div className="account-container">
            <div className="account-edit">
                <h2>Add Case</h2>
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
                            Medical Practice
                            <input type="text" />
                        </label>
                        <input type="submit" value="Add"></input>
                    </form>
            </div>
        </div>
    );
}

export default AddCase;