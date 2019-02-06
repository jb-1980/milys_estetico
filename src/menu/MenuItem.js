import React from "react"
import { StyleSheet, css } from "aphrodite"

const MenuItem = ({ name, price, description, windowHeight }) => {
  //--------------------------------STYLES--------------------------------------//

  const styles = StyleSheet.create({
    menuItem: {
      display: "flex",
      flexDirection: "column",
      paddingTop: 0,
      paddingBottom: windowHeight / 216, // 5px on 1080p
    },
    nameAndPrice: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: windowHeight / 43.2, // 25px on 1080p
      lineHeight: `${windowHeight / 36}px`, // 30px on 1080p
    },
    itemName: {
      flex: 1,
      fontFamily: "Bubblegum Sans",
    },
    itemPrice: {
      flex: 1,
      textAlign: "right",
      fontFamily: "Baloo Bhaijaan",
      fontSize: windowHeight / 50, // 21.6px on 1080p
    },
    itemDescription: {
      flexBasis: "100%",
      fontSize: windowHeight / 67.5, // 16px on 1080p
    },
  })
  return (
    <div className={css(styles.menuItem)}>
      <div className={css(styles.nameAndPrice)}>
        <div className={css(styles.itemName)}>{name}</div>
        <div className={css(styles.itemPrice)}>{price}</div>
      </div>
      <div className={css(styles.itemDescription)}>{description}</div>
    </div>
  )
}

export default MenuItem
