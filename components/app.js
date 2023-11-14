import Banner from './banner';
import HouseList from './houseList';
import House from './house';
import { useState } from 'react';

const App = () => {
  const headerText = 'Providing houses all over the world';
  const [selectedHouse, setSelectedHouse] = useState();

  const setSelectedHouseWrapper = (house) => {
    setSelectedHouse(house);
  };
  return (
    <>
      <Banner>{headerText}</Banner>
      {selectedHouse ? (
        <House house={selectedHouse} />
      ) : (
        <HouseList selectHouse={setSelectedHouseWrapper} />
      )}
    </>
  );
};

export default App;
