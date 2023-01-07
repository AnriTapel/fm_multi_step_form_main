import Sidebar from '../Sidebar/Sidebar';
import UserInfo from '../steps/UserInfo/UserInfo';
import SelectPlan from '../steps/SelectPlan/SelectPlan';
import AddOns from '../steps/AddOns/AddOns';
import Summary from '../steps/Summary/Summary';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  
  const step = useSelector(state => state.step);

  return (
    <>
      <Sidebar step={step}/>
      <div className="content-block">
        {step === 1 && <UserInfo />}
        {step === 2 && <SelectPlan/>}
        {step === 3 && <AddOns/>}
        {step === 4 && <Summary/>}
      </div>
    </>
  );
}

export default App;
