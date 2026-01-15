/**
 * Home page (App Router entry point).
 * - Displays app branding and description
 * - Renders the main WeatherApp component
*/

import React from "react";
import styles from "../styles/page.module.css";
import WeatherApp from "../components/WeatherApp";
import Image from "next/image"
import logo from "../public/warp-logo.svg";

const Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Image src={logo} alt="Warp Development logo" className={styles.logo}/>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>Warp Weather App</h1>
                <p className={styles.lead}>Enter a city to see the current weather (temperatures shown in Celsius).</p>
            </div>

            <div className={styles.inputContainer}>
                <WeatherApp />
            </div>
        </div>
    )
}

export default Page