import HouseRow from './houseRow';
import { useState } from 'react';

const housesArray = [
  {
    id: '1',
    address: '12 Valley of Kings, Geneva',
    country: 'Switzerland',
    price: 900000
  },
  {
    id: '2',
    address: '89 Road of Forks, Bern',
    country: 'Switzerland',
    price: 500000
  }
];

const HouseList = () => {
  const [houses, setHouses] = useState(housesArray);

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
            <HouseRow key={house.id} house={house} />
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
