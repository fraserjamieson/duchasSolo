import {useEffect, useState} from 'react';
const CountyChanger = ({countyChange}) => {

    const [countyID, setCountyID] = useState("100000");
    const [county, setCounty] = useState([]);

    const secondHandleChange = (e) => {
        console.log(e);
        setCountyID(e.target.value);
    }

    const getCountyIDs = () => {
        console.log('getting county name/id data');
        fetch(`https://www.duchas.ie/api/v0.6/counties?&apiKey=D4vMJJ39vTaRD5ZEy4uJU2mHrG82UT`)
        .then(res => res.json())
        .then(data => {
            setCounty(data)})
            .catch(err => console.log(err));  // to retrieve countys and their info as opposed to hard coding them all in
    }

    useEffect(()=>{
        getCountyIDs();
        countyChange(countyID);
    }, [countyID]);


    return (
        <div className="dropDown">
        <label for="countyDropdown">Choose a county </label>
        <select id="countyDropdown" onChange={secondHandleChange} > 
        {/* this 'value' attribute ^^ makes sure controlled component is implemented. */}
        <option value="" disabled></option>
            {county.map((obj)=>{
                return <option value= {obj.logainmID}>{obj.qualifiedNameEN}</option>
            })}
        </select>
        </div>
            
    )

}
export default CountyChanger;