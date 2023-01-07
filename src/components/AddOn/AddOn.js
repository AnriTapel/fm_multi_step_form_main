import { useSelector } from "react-redux";
import { getItemPrice } from "../../service";
import "./AddOn.css";

function AddOn({addOnData, onCheckedChange, isChecked}) {

    const planState = useSelector(state => state.plan);

    const onCheckboxChange = () => {
        onCheckedChange(addOnData.id, !isChecked);
    }

    return (
        <div className={`add-on-container ${isChecked ? 'add-on-selected' : ''}`}>
            <div className="checkbox-container">
                <input type="checkbox" checked={isChecked} onChange={onCheckboxChange}/>
            </div>
            <div className="add-on-info">
                <p>{addOnData.name}</p>
                <span>{addOnData.desc}</span>
            </div>
            <div className="add-on-price">
                {getItemPrice(addOnData.perMonth, planState.isMonthly)}
            </div>
        </div>
    );
}

export default AddOn;