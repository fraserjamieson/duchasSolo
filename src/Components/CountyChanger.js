import {useEffect, useState} from 'react';
const CountyChanger = ({countyChange}) => {
    //  null;

    const [countyDropdown, setCountyDropdown] = useState("100000");

    const secondHandleChange = (e) => {
        // countyChange(e.target.value);
        setCountyDropdown(e.target.value);
    }

    useEffect(()=>{
        countyChange(countyDropdown);
    }, [countyDropdown]);


    return (
        <div className="dropDown">
        <select onChange={secondHandleChange} className="county-change" value={countyDropdown}>
            <option value="100000">Antrim</option>
            <option value="100001">Armagh</option>
            <option value="100002">Dublin</option>
            <option value="100003">Cavan</option>
            <option value="100004">Carlow</option>
        </select>
        </div>
    )

}
export default CountyChanger;