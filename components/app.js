import Banner from './banner';
import { useCallback, useState, createContext } from 'react';
import navValues from '@/helpers/navValues';
import ComponentPicker from './ComponentPicker';

const navigationContext = createContext(navValues.home);

const App = () => {
  const navigate = useCallback(
    (navTo) => setNav({ curent: navTo, navigate }),
    []
  );

  const [nav, setNav] = useState({ current: navValues.home, navigate });

  return (
    <navigationContext.Provider value={nav}>
      <Banner>
        <div>Providing houses all over the world</div>
      </Banner>
      <ComponentPicker currentNavLocation={nav.current} />
    </navigationContext.Provider>
  );
};

export { navigationContext };
export default App;
