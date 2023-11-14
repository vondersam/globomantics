import HouseRow from './houseRow';
import useHouses from '../hooks/useHouses';
import loadingStatus from '../helpers/loadingStatus';
import LoadingIndicator from './loadingIndicator';

const HouseList = ({ selectHouse }) => {
  const { houses, setHouses, loadingState } = useHouses();

  if (loadingState !== loadingStatus.loaded) {
    return <LoadingIndicator loadingState={loadingState} />;
  }

  const addHouse = () => {
    setHouses([
      ...houses,
      {
        id: '3',
        address: '76 Road of Knives, Bern',
        country: 'Switzerland',
        price: 1500000
      }
    ]);
  };
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Country</th>
            <th>Asking price</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <HouseRow key={house.id} house={house} selectHouse={selectHouse} />
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary" onClick={addHouse}>
        Add
      </button>
    </>
  );
};

export default HouseList;
