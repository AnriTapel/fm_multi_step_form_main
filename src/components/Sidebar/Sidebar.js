import './Sidebar.css';

function Sidebar({step}) {

   const steps = [
      {level: 1, label: 'YOUR INFO'},
      {level: 2, label: 'SELECT PLANS'},
      {level: 3, label: 'ADD-ONS'},
      {level: 4, label: 'SUMMARY'}
   ];

   return (
      <div className="sidebar-container">
         {
            steps.map(it => <div className="sidebar-item-container" key={it.level}>
               <div className={`sidebar-item-level ${step === it.level ? 'active-item' : ''}`}>{it.level}</div>
               <div className="sidebar-item-data-block">
                  <span>STEP {it.level}</span>
                  <span>{it.label}</span>
               </div>
            </div>)
         }
      </div>
   );
}

export default Sidebar;