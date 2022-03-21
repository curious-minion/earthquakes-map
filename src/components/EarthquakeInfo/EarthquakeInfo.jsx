import axios from 'axios';

import { useQuery } from 'react-query';
import {ThreeDots} from 'react-loader-spinner';
import EarthquakesMagnitude from '../EarthquakesMagnitude/EarthquakesMagnitude';
import MapContainer from '../MapContainer/MapContainer';




export default function EarthquakesInfo(){


const { isLoading, error, data } = useQuery('earthquakes', () =>
    axios('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'),
	{refetchInterval: 60000}
  );

  if (isLoading)
    return <ThreeDots color="#00BFFF" height={80} width={80} />
  if (error) return <h3>Something went wrong :( Please try again later</h3>;

//   console.log(`refetched on ${new Date().getMinutes()} ${data.data}` );
console.log(data.data.features)

  const date = new Date(data.data.metadata.generated).toLocaleDateString("en-UE");
  return (
	<>
  	<h3>Total: {data.data.metadata.count} earthquakes on {date} worldwide</h3>
      <EarthquakesMagnitude data={ data.data.features}/>
      <MapContainer coordinates={ data.data} />
  </>

  );
}