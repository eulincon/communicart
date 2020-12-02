import React from 'react';
import styles from './styles.module.css';

const FiveStarRating = () => {
  return (
      <div class="rate">
        <input type="radio" id="star5" name={styles.rate} value="5" />
        <label for="star5" title="text">5 stars</label>
        <input type="radio" id="star4" name={styles.rate} value="4" />
        <label for="star4" title="text">4 stars</label>
        <input type="radio" id="star3" name={styles.rate} value="3" />
        <label for="star3" title="text">3 stars</label>
        <input type="radio" id="star2" name={styles.rate} value="2" />
        <label for="star2" title="text">2 stars</label>
        <input type="radio" id="star1" name={styles.rate} value="1" />
        <label for="star1" title="text">1 star</label>
      </div>
  )
};

export default FiveStarRating;