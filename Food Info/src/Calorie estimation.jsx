import React, { useEffect, useState } from 'react';
export const NutritionFetcher = () => {
    const [nutritionData, setNutritionData] = useState([]);
    const [error, setError] = useState(null);
    const [foodQuery, setFoodQuery] = useState(''); 
    const [inputValue, setInputValue] = useState(''); 
    const [loading, setLoading] = useState(false); 

    const apiKey = '0S3tnIX82GmJZocmC72OUA==BXqW47D6hZxAcROy';

    const fetchNutritionData = async (query) => {
        setLoading(true); 
        try {
            const response = await fetch(`https://api.calorieninjas.com/v1/nutrition?query=${query}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch nutrition data');
            }

            const data = await response.json();
            setNutritionData(data.items || []); 
            setError(null);
        } catch (error) {
            setError(error.message);
            setNutritionData([]); 
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async(e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            const items = inputValue.split(' and ').map(item => item.trim());
            setFoodQuery(items.join(', ')); 
            items.forEach(item => fetchNutritionData(item)); 
            setInputValue(''); 
        }
    };

    useEffect(() => {
        if (foodQuery) {
            fetchNutritionData(foodQuery);
        }
    }, [foodQuery]);

    return (
        <div className="nutrition-fetcher">
            <form onSubmit={handleSearch}>
            <div className="input">
                <input
                    type="text"
                    placeholder="🔍 Enter Food to Search Nutrients.Ensure ( and(or), ) in between for multiple foods. Provide Quantity if needed 😊"
                    id="ip_search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button  type ="submit">👇 Search</button>
            </div>
            </form>
            <h3 style ={{color:"black"}}>Nutrition Data for {foodQuery}</h3>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {loading ? ( 
                <p>Loading...</p>
            ) : (
                nutritionData.length > 0 ? (
                    <table className="nutrition-table">
                        <thead>
                            <tr>
                                <th>Food Item</th>
                                <th>Calories</th>
                                <th>Sugar【grm】</th>
                                <th>Fiber【grm】</th>
                                <th>Serving size【grm】</th>
                                <th>Total fat【grm】</th>
                                <th>Protien【grm】</th>
                                <th>Sodium【milli-grm】</th>
                                <th>Potassium【milli-grm】</th>
                                <th>Cholesterol</th>
                                <th>Total Carbohydrates【grm】</th>

                            </tr>
                        </thead>
                        <tbody>
                            {nutritionData.map((nutrient, index) => (
                                <tr key={index}>
                                    <td>{nutrient.name}</td>
                                    <td>{nutrient.calories}</td> 
                                    <td>{nutrient.sugar_g}</td>
                                    <td>{nutrient.fiber_g}</td>
                                    <td>{nutrient.serving_size_g}</td> 
                                    <td>{nutrient.fat_total_g}</td>
                                    <td>{nutrient.protein_g}</td> 
                                    <td>{nutrient.sodium_mg}</td>
                                    <td>{nutrient.potassium_mg}</td>
                                    <td>{nutrient.cholesterol_mg}</td> 
                                    <td>{nutrient.carbohydrates_total_g}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No data found.</p>
                )
            )}
        </div>
    );
};