import { useContext, useState } from "react";
import './SearchBar.css';
import { WeatherContext } from "../../context/WeatherContext";

const SearchBar = () => {
    
    const [cityValue, setCityValue] = useState<string>("");
    const { setCity } = useContext(WeatherContext);

    const handleSearch = () => {
        setCity(cityValue);
    }
    
    return <>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input
                type="text"
                value={cityValue}
                onChange={(e) => setCityValue(e.target.value)}
                placeholder="Search City..."
                className="search-input"
            />
            <button onClick={handleSearch} className="search-btn">Search</button>
        </div>
    </>
}

export default SearchBar;