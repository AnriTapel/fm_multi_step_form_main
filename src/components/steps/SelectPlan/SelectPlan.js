import PlanItem from "../../PlanItem/PlanItem";
import Controls from '../../Controls/Controls';
import './SelectPlan.css';
import { plansData } from '../../../service.js';
import { useDispatch, useSelector } from "react-redux";
import { selectPlan, setIsMonthly } from "../../../reducers/planReducer";

function SelectPlan() {

    const planState = useSelector(state => state.plan);
    const dispatch = useDispatch();

    const submitHandler = () => {
        if (planState.planId) {
            return true;
        }
        alert('Selec plan');
        return false;
    }

    const goBackHandler = () => {
        return true;
    }

    const onRadioChange = (e) => {
        if (e.target.name === 'monthly' && planState.isMonthly) {
            return;
        }
        dispatch(setIsMonthly(!planState.isMonthly))
    }

    const onPlanItemClick = (planId) => {
        dispatch(selectPlan(planId));
    }

    return (
        <>
            <div>
                <h1>Select your plan</h1>
                <p className="hint">You have the option of monthly or yearly billing.</p>
                <div className="plans-container">
                    {plansData.map(it => <PlanItem plan={it} key={it.id} isMonthly={planState.isMonthly} isSelected={planState.planId === it.id} onClick={onPlanItemClick}/>)}
                </div>
                <div className="period-slider-wrapper">
                    <div className="period-slider-container">
                        <span className={(planState.isMonthly ? 'active-period-name' : '')}>Monthly</span>
                        <div className="period-slider">
                            <input type="radio" name="monthly" checked={planState.isMonthly} onChange={onRadioChange}/>
                            <input type="radio" name="yearly" checked={!planState.isMonthly} onChange={onRadioChange}/>
                        </div>
                        <span className={(!planState.isMonthly ? 'active-period-name' : '')}>Yealry</span>
                    </div>
                </div>
            </div>
            <Controls 
                back={{label: 'Go Back', handler: goBackHandler}}
                next={{label: 'Next Step', handler: submitHandler}}
            />
        </>
    );
}

export default SelectPlan;