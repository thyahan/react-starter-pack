 export const UPDATE_HOME = 'UPDATE_HOME';

 const updateHome = home => {
     return {
        type: UPDATE_HOME,
        home,
     }
 }