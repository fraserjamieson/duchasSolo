
const CountyChanger = ({countyChange}) => {
    //  null;

    const secondHandleChange = (e) => {
        countyChange(e.target.value);
    }

    return (
        <div className="dropDown">
        <select onChange={secondHandleChange} className="county-change">
            <option selected ="default choice" value="100000">Antrim</option>
            <option value="100001">Armagh</option>
            <option value="100002">Dublin</option>
            <option value="100003">Cavan</option>
            <option value="100004">Carlow</option>
        </select>
        </div>
    )

}
export default CountyChanger;