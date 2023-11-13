import HouseRow from './houseRow';

const HouseList = () => {
  const houses = [
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
  return (
    <>
      <div className="row mb-2">
        <h5 className="themeFontColor text-center">
          Houses currently on the market
        </h5>
      </div>
      <table className="table table-hover">
        <thead>
          <th>Address</th>
          <th>Country</th>
          <th>Asking price</th>
        </thead>
        <tbody>
          {houses.map((house) => (
            <HouseRow key={house.id} house={house} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HouseList;
