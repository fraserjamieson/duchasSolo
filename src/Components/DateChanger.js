import { useEffect, useState } from "react";

const DateChanger = ({dateChanger}) => {

    const [startDate, setDateRange] = useState("1910");

    const secondDateHandleChange = (e) => {
        console.log(e);
        setDateRange(e.target.value);
    };

    useEffect(() => {
        dateChanger(startDate);
    },[startDate]);

    return (
        <>
        <div className="dateChanger">
        <label>Filter by Date Ranger</label>
        <select name="change time" 
                onChange={secondDateHandleChange}>
            {/* <option value="1930">Select Year</option>    */}
                <option value="1910">1910s</option>
                <option value="1920">1920s</option>
                <option value="1930">1930s</option>
                <option value="1940">1940s</option>
                <option value="1950">1950s</option>
                <option value="1960">1960s</option>
                <option value="1970">1970s</option>
                <option value="1980">1980s</option>
                <option value="1990">1990s</option>
                <option value="2000">2000s</option>
                <option value="2010">2010s</option>
        </select>
        </div>
        </>
    )

}
export default DateChanger;