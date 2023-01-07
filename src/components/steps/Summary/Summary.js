import Controls from '../../Controls/Controls';
import './Summary.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getFreeMonthsPerYear, getItemPrice, getPlanById, getSelectedAddOnsByIds } from '../../../service';
import logo from '../../../assets/images/icon-thank-you.svg';

function Summary() {

    const stepState = useSelector(state => state.step);
    const planState = useSelector(state => state.plan);
    const addOnsState = useSelector(state => state.addOns);

    const [confirmed, setConfirmed] = useState(false);

    const [plan] = useState(getPlanById(planState.planId));
    const [addOns] = useState(getSelectedAddOnsByIds(addOnsState));

    const getTotalPrice = () => {
        let multiprier = planState.isMonthly ? 1 : 12 - getFreeMonthsPerYear();
        let price = plan.perMonth * multiprier;
        return `$${addOns.reduce((acc, cur) => acc + cur.perMonth * multiprier, price)}/${planState.isMonthly ? 'mo' : 'yr'}`;
    }

    const onConfirmClick = () => {
        setConfirmed(true);
        return false;
    }

    return (
        <>
            {
                !confirmed &&
                <div className="summary-container">
                    <>
                        <h1>Finishing up</h1>
                        <p className="hint">Double check everything looks OK befor confirming.</p>
                        <div className="summary-tabel-header">
                            <span className="summary-tabel-plan-header">{`${plan.name} (${planState.isMonthly ? 'Monthly' : 'Yearly'})`}</span>
                            <span className="summary-tabel-plan-price">{getItemPrice(plan.perMonth, planState.isMonthly)}</span>
                        </div>
                        <div className="summary-tabel-add-ons">
                            {addOns.map(it => 
                                <div className="summary-tabel-add-on-block" key={it.id}>
                                    <span className="summary-tabel-add-on-name">{it.name}</span>
                                    <span className="summary-tabel-add-on-price">+{getItemPrice(it.perMonth, planState.isMonthly)}</span>
                                </div>
                            )}
                            {
                                !addOns.length &&
                                <span className="summary-table-no-add-ons">No add-ons were selected</span>
                            }
                        </div>
                        <div className="summary-tabel-total">
                            <span className="summary-tabel-total-title">{`Total (per ${planState.isMonthly ? 'month' : 'year'})`}</span>
                            <span className="summary-tabel-total-price">{getTotalPrice()}</span>
                        </div>
                    </>
                </div>
            }
            { !confirmed &&
                <Controls
                    back={{label: 'Go Back', handler: () => {return true}}}
                    next={{label: 'Confirm', handler: onConfirmClick}}
                />
            }
            {
                confirmed &&
                <>
                    <div className="thank-you-block">
                        <img src={logo} alt="Thank You!"/>
                        <h1>Thank you!</h1>
                        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@greatgames.com.</p>
                    </div>
                </>
            }
        </>
    );
}

export default Summary;