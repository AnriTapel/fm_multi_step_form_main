import AddOn from '../../AddOn/AddOn';
import Controls from '../../Controls/Controls';
import './AddOns.css';
import {addOns} from '../../../service.js';
import { useDispatch, useSelector } from 'react-redux';
import { newAddOn, removeAddOn } from '../../../reducers/addOnsReducer';

function AddOns() {

    const addOnsState = useSelector(state => state.addOns);
    const dispatch = useDispatch();

    const onCheckedChange = (id, isChecked) => {
        isChecked ? dispatch(newAddOn(id)) : dispatch(removeAddOn(id));
    }

    return(
        <>
            <div>
                <h1>Pick add-ons</h1>
                <p className='hint'>Add-ons help enhance your gaming experience.</p>
                <div className='add-ons-block'>
                    {addOns.map(it => <AddOn addOnData={it} isChecked={addOnsState.includes(it.id)} onCheckedChange={onCheckedChange} key={it.id}/>)}
                </div>
            </div>
            <Controls 
                back={{label: 'Go Back', handler: () => {return true}}}
                next={{label: 'Next Step', handler: () => {return true}}}
            />
        </>
    );
}

export default AddOns;