import { useDispatch, useSelector } from 'react-redux';
import { nextStep, previousStep } from '../../reducers/stepReducer';
import './Controls.css';

function Controls({back, next}) {

    const step = useSelector(state => state.step);
    const dispatch = useDispatch();

    const backButtonHandler = () => {
        back.handler?.();
        dispatch(previousStep(step));
    };

    const nextButtonHandler = () => {
        const success = next.handler?.();
        if (success) {
            dispatch(nextStep(step));
        }
    }

    return (
        <div className="controls-container">
            {back && <input type="button" className="back-btn" value={back.label} onClick={backButtonHandler}/>}
            {next && <input type="button" className="next-btn" value={next.label} onClick={nextButtonHandler}/>}
        </div>
    );
}

export default Controls;