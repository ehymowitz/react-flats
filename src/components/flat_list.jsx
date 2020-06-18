import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  const makeList = () => {
    return flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          index={index}
          selectFlat={selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list">
      {makeList()}
    </div>
  );
};

export default FlatList;
