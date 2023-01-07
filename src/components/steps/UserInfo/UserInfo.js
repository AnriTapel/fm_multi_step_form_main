import './UserInfo.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Controls from '../../Controls/Controls';
import { updateUserData } from '../../../reducers/userInfoReducer';

function UserInfo() {

    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();
    
    const [data, setData] = useState(userInfo);

    const submitHandler = () => {
        if (Object.values(data).some(it => !it)) {
            alert('Invalid from, fill all fields');
            return false;
        }
        dispatch(updateUserData(data));
        return true;
    }

    const changesHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div>
                <h1>Personal info</h1>
                <p className="hint">Please provide your name, email and phone number</p>
                <form>
                    <div className="form-control-item">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder='e.g. Stephen King' value={data.name} onChange={changesHandler}/>
                    </div>
                    <div className="form-control-item">
                        <label htmlFor="email">Email address</label>
                        <input type="text" name="email" placeholder='e.g. s.king@gmail.com' value={data.email} onChange={changesHandler}/>
                    </div>
                    <div className="form-control-item">
                        <label htmlFor="phone">Phone number</label>
                        <input type="text" name="phone" placeholder='e.g. +972533738322' value={data.phone} onChange={changesHandler}/>
                    </div>
                </form>
            </div>
            <Controls next={{label: 'Next Step', handler: submitHandler}}/>
        </>
    );
};

export default UserInfo;