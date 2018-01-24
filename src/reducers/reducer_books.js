/**
 * There are 2 steps of reducer.
 * 1) Creating reducer like below.
 * 2) Wiring it up into Application. : it is created in index.js.
 */

// It is step 1.

export default function () {

    return 
        ([ 
          { title: 'Perfect React.js' },
          { title: 'Java Algorithms' },
          { title: 'JavaScript Review' },
          { title: 'MongoDB' }
        ]);
    
}