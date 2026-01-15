/**
 * Weather display component.
 * - Displays city name, temperature (Celsius),
 *   weather condition, description, and icon
*/


import { WeatherResultProps } from "@/utils/openWeatherApiResponse"
import styles from "../styles/Weather.module.css"


const WeatherResult = ({ data }: WeatherResultProps) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.city}>{data.city}</h2>
            <img className={styles.icon} src={data.iconUrl} alt={data.description} />
            <p className={styles.temp}>{data.temperature}&#8451;</p>
            <p>{data.condition}</p>
            <p>{data.description}</p>
        </div>
    )
}

export default WeatherResult;