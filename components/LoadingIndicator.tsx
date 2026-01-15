/**
 * Full-screen loading overlay.
 * - Blocks user interaction during data fetch
 * - Displays animated loading indicator downloaded form Lottie
*/

"use client";

import Lottie from "lottie-react"
import loadingSpinner from "../public/Sunrise - Breathe in Breathe out.json"

const LoadingIndicator = () => {
    return (
        <div className="loadingOverlay" aria-live="polite">
            <div className="loader">
                <Lottie animationData={loadingSpinner} loop={true} />
            </div>
        </div>
    )
}

export default LoadingIndicator