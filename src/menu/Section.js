import React from "react"
import { StyleSheet, css } from "aphrodite"

import MenuItem from "./MenuItem"

//----------------------------------------------------------------------------//

const Section = ({
  name,
  description,
  items,
  style,
  promos,
  windowWidth,
  windowHeight,
}) => {
  //--------------------------------STYLES--------------------------------------//

  const containerWidth = windowWidth / 2
  const containerHeight = windowHeight * (7 / 9)
  const columnWidth = (windowWidth - 20) / 2
  const border = 3
  const background = "rgba(224,222,203,0.6)"

  const styles = StyleSheet.create({
    section: {
      //border: `${border}px solid #555`,
      marginRight: containerWidth / 20,
      marginLeft: containerWidth / 20,
      marginTop: containerHeight / 20,
      marginBottom: containerHeight / 20,
      //backgroundColor: background,
      height: containerHeight,
      padding: `${containerHeight / 360}px ${containerWidth / 64}px`,
      color: "#fff",
    },
    sectionHead: {
      textTransform: "capitalize",
      fontFamily: "Sacramento",
      textAlign: "center",
      fontSize: containerHeight / 20,
      marginBottom: containerHeight / 360,
      marginTop: 0,
    },
    sectionDescription: {
      marginTop: 0,
      marginBottom: 5,
      textAlign: "center",
      fontSize: "1.4em",
    },
  })

  return (
    <section className={css(styles.section)} style={style}>
      <h1 className={css(styles.sectionHead)}>{name}</h1>
      <h6 className={css(styles.sectionDescription)}>{description}</h6>
      {items.map((item, i) => (
        <MenuItem
          key={i}
          name={item.name}
          price={item.price}
          description={item.description}
          windowHeight={windowHeight}
        />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {promos}
      </div>
    </section>
  )
}

export default Section
