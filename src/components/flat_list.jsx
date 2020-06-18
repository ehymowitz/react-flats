import React, { Component } from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  const makeList = () => {
    return flats.map((flat, i) => {
      return (
        <Flat
          flat = {flats}
          selectFlat = {selectFlat}
          selectedFlat = {selectedFlat}
          i = {i}
        />
      )
    });
  }

  return(
    <div className="flat-list">
      {makeList()}
    </div>
  );
}

export default FlatList
