import { getFreeMonthsPerYear, getItemPrice } from '../../service';
import './PlanItem.css';

function PlanItem({plan, isSelected, isMonthly, onClick}) {

    const freeMonths = getFreeMonthsPerYear() ?? 0;

    const getImgUrl = () => {
        const url = require(`../../assets/images/${plan.imgName}`);
        return <img src={url} alt={plan.name}/>;
    }

    return (
        <div onClick={() => {onClick(plan.id)}} className={`item-container ${isSelected ? 'item-container-active' : ''}`}>
            {getImgUrl()}
            <div className="text-info">
                <span className="item-name">{plan.name}</span>
                <span className="item-price">{getItemPrice(plan.perMonth, isMonthly)}</span>
                {!isMonthly && freeMonths && 
                    <span className="yearly-discount">{freeMonths} months free</span>
                }
            </div>
        </div>
    );
}

export default PlanItem;