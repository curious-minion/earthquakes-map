import { useState } from 'react';
import EarthquakeList from '../EarthquakeList/EarthquakeList';

import styles from './EarthquakesMagnitude.module.css';



export default function EarthquakesMagnitude({ data }) {

  const defaultValue = 1;
  const [magnitude, setMagnitude] = useState(defaultValue);


  const onSelected = (e) => {
    setMagnitude(e.target.value);
  }


  return (
    <>
      <h4>Filter Earthquakes:</h4>

      <label className="filter-column">Choose minimum magnitude</label>

      <select
        id="magnitude"
        name="magnitude"
        defaultValue={magnitude}
        onChange={e => onSelected(e)}
      >

        <option >{defaultValue}</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>

      <ul className={styles.list}>
      {data.map(({ properties, id, geometry }, index) => (

        (properties.mag >= magnitude) &&


          <EarthquakeList
            magnitude={properties.mag}
            place={properties.place}
            key={index}
            id={id}
            time={properties.time}
            details={properties.url}
            geometry={geometry}
            />



      ))}
        </ul>

    </>

  );

}

