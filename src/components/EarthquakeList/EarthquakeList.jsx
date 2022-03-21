export default function EarthquakeList({ magnitude, place, id, time, details }) {
	const eventTime = new Date(time).toLocaleString('en-GB', { timeZone: 'UTC' });

	return (
	<>

			<li key={id}>
				<p>{magnitude}</p>
				<p>{place}</p>
				<p>{eventTime}</p>
				<a href={`${details}`} target="_blank" rel="noopener noreferrer">Details</a>
				</li>


		</>
	)
}