import React, {createContext, useContext} from 'react';

// إنشاء السياق
const UserContext = createContext ();

// مزود السياق
export function UserProvider({children, userData}) {
  return (
    <UserContext.Provider value={userData}> {children} </UserContext.Provider>
  );
}

// هوك لاستخدام السياق
export function useUser () {
  return useContext (UserContext);
}
