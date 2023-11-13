import Banner from './banner';
import HouseList from './houseList';

const App = () => {
  const headerText = 'Providing houses all over the world';
  return (
    <>
      <Banner>{headerText}</Banner>
      <HouseList />
    </>
  );
};

export default App;
