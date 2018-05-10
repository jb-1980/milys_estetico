import React from "react"
import { StyleSheet, css } from "aphrodite"

const background = "#dec8a8"

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-around",
    width: window.innerWidth,
    height: window.innerHeight * (1 / 5),
  },
  title: {
    flex: 1,
    fontFamily: "Sacramento",
    fontSize: `${1 / 5 * 100}vh`,
    letterSpacing: "0.3rem",
    color: "#fefefe",
    marginRight: "3rem",
    marginLeft: "3rem",
    //textShadow: `-1px 0 7px #555, 1px 0 7px #555, 0 -1px 7px #555, 0 1px 7px #555`,
  },
  logoImage: {
    width: window.innerHeight / 8,
    height: window.innerHeight / 8,
  },
})

const Header = () => (
  <div className={css(styles.header)}>
    <h1 style={{ marginBottom: 0, marginTop: 0 }}>
      <span className={css(styles.title)}>Mily's</span>
      <img
        className={css(styles.logoImage)}
        src="../assets/images/logo_white.png"
      />
      <span className={css(styles.title)}>Estetico</span>
    </h1>
  </div>
)

export default Header
