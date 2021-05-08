
const CountyChanger = ({countyChange}) => {
    //  null;

    return (
        <div className="dropDown">
        <select onChange={countyChange}>
            <option selected ="default choice" value="100000">Antrim</option>
        </select>
        </div>
    )

}
export default CountyChanger;