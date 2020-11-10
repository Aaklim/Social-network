import React, { useEffect, useState } from 'react';
import styles from './Paginator.module.scss';
import classNames from 'classnames';

const Paginator = ({
  portionNumber,
  setPortionNumber,
  resultArray,
  currentPage,
  getCurrentpage,
  toggleFilter,
  filter,
}) => {
  const [currentFilter, setCurrentFilter] = useState(filter);
  useEffect(() => {
    setCurrentFilter(filter);
  }, [filter]);
  console.log('PaginatorCURR', currentFilter);
  return (
    <div className={styles.wrapper}>
      {portionNumber > 1 ? (
        <button
          onClick={() => setPortionNumber(portionNumber - 1)}
          className={styles.button}
        >
          &lt;
        </button>
      ) : null}
      {resultArray[portionNumber - 1].map((i) => {
        return (
          <div
            className={classNames(styles.item, {
              [styles.selected]: i === currentPage,
            })}
            key={i}
            onClick={() => getCurrentpage(i)}
          >
            {i}
          </div>
        );
      })}
      {portionNumber < resultArray.length ? (
        <button
          onClick={() => setPortionNumber(portionNumber + 1)}
          className={styles.button}
        >
          &gt;
        </button>
      ) : null}

      <div className={styles.checkbox}>
        <label htmlFor='filter'>With Photo</label>
        <input
          type='checkbox'
          id='filter'
          onChange={toggleFilter}
          checked={currentFilter}
        />
      </div>
    </div>
  );
};

export default Paginator;
