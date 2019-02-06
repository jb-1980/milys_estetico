import React from "react"
import { StyleSheet, css } from "aphrodite"

const Header = ({ windowWidth, windowHeight }) => {
  const styles = StyleSheet.create({
    header: {
      display: "flex",
      justifyContent: "space-around",
      width: windowWidth,
      height: windowHeight * (1 / 5),
    },
    logoImage: {
      // natural size 2100px x 1500px
      width: (windowWidth * 532) / 1920,
      height: (windowHeight * 380) / 1080,
    },
  })

  return (
    <div className={css(styles.header)}>
      <img
        className={css(styles.logoImage)}
        src="../../assets/images/logo_new.png"
      />
    </div>
  )
}
export default Header
