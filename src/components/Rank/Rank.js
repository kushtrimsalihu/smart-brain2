import React from 'react';


const Rank = ({name , entries}) => {
    return ( 
    < div className = 'black  f2 pa3' >
         
            {
              `${name} , your current rank is...`
            } 
            <div className = 'black f1 ' > {
                entries
              }
               </div>
    </div>
    );
}

export default Rank;