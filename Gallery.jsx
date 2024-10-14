import React, { useState } from 'react';

function Gallery(){
    // const TabComponent = () => {
    //     const [activeTab, setActiveTab] = useState('tab1');
      
    //     const handleTabChange = (tab) => {
    //       setActiveTab(tab);
    //     }};
    return(
        <>
        <div className="p-10 px-30 text-center ">
         <h1 className="text-6xl font-cursiv p-5">GALLERY</h1>
        </div>
        {/* <div>
           <div className="tabs">
              <button onClick={() => handleTabChange('tab1')}>Tab 1</button>
              <button onClick={() => handleTabChange('tab2')}>Tab 2</button>
              <button onClick={() => handleTabChange('tab3')}>Tab 3</button>
           </div>
      
           <div className="tab-content">
              {activeTab === 'tab1' && <div>Content for Tab 1</div>}
              {activeTab === 'tab2' && <div>Content for Tab 2</div>}
              {activeTab === 'tab3' && <div>Content for Tab 3</div>}
           </div>
        </div> */}
    
  

        
        </>
    );
}
export default Gallery;