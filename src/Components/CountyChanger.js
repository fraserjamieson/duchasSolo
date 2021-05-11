
const CountyChanger = ({countyChange}) => {
    //  null;

    return (
        <div className="dropDown">
        <select onChange={countyChange} className="county-change">
            <option selected ="default choice" value="100002">Dublin</option>
        </select>
        </div>
    )

}
export default CountyChanger;