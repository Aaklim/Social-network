import React, { useState, useEffect } from 'react';
import Paginator from './Paginator';
import _ from 'lodash';

const PaginatorContainer = ({
  totalUsersCount,
  pageSize,
  currentPage,
  getCurrentpage,
  filter,
  toggleFilter,
}) => {
  const [portionNumber, setPortionNumber] = useState(1);
  const [chunkSize, setChunkSize] = useState(10);

  useEffect(() => {
    setChunkWithwidth();
  }, [chunkSize]);

  let portioncount = totalUsersCount / pageSize;
  let resultArray = _(portioncount).range().drop().chunk(chunkSize).value();

  const setChunkWithwidth = () => {
    if (window.innerWidth <= 480) {
      setChunkSize(5);
    } else {
      setChunkSize(10);
    }
  };
  window.addEventListener('resize', setChunkWithwidth);
  return (
    <Paginator
      portionNumber={portionNumber}
      setPortionNumber={setPortionNumber}
      resultArray={resultArray}
      currentPage={currentPage}
      getCurrentpage={getCurrentpage}
      filter={filter}
      toggleFilter={toggleFilter}
    />
  );
};

export default PaginatorContainer;
