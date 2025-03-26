import styles from "./circular-progress.module.css"

const CircularProgressLocal = ({ progress, icon }) => {
  const radius = 25
  const circumference = 2 * Math.PI * radius

  // Clamp the progress value for display purposes
  // If progress > 100 (overspent), we'll still show a full circle (100%)
  const displayProgress = progress > 100 ? 100 : progress
  const strokeDashoffset = circumference - (displayProgress / 100) * circumference

  console.log("Original progress:", progress, "Display progress:", displayProgress, "Offset:", strokeDashoffset)

  let progressColor

  if (progress === 0) {
    progressColor = "#eee" // Grey
  } else if (progress > 0 && progress < 80) {
    progressColor = "#4799A6" // Blue
  } else if (progress >= 80 && progress < 100) {
    progressColor = "#EEAA5E" // Orange
  } else if (progress >= 100) {
    progressColor = "#E73C4E" // Red
  } else {
    progressColor = "#eee" // Default to grey
  }

  return (
    <div className={styles["circular-progress-container"]}>
      <div className={styles["circular-progress"]}>
        <svg width="100" height="80">
          <circle className={styles["progress-bg-grey"]} cx="40" cy="40" r={radius} />
          <circle
            className={styles["progress-bar"]}
            cx="40"
            cy="40"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            stroke={progressColor}
          />
        </svg>
        {icon && <div className={styles["progress-icon"]}>{icon}</div>}
      </div>
    </div>
  )
}

