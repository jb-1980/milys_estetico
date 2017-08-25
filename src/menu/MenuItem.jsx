import React from 'react'
import { StyleSheet, css } from 'aphrodite'

//--------------------------------STYLES--------------------------------------//
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const columnWidth = (windowWidth - 4) / 2

const styles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 0,
    paddingBottom: 5,
  },
  nameAndPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: `${25 / windowWidth * 100}vw`,
  },
  itemName: {
    flex: 1,
    fontFamily: 'Bubblegum Sans',
  },
  itemPrice: {
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Baloo Bhaijaan',
    lineHeight: 0,
    fontSize: windowHeight / 50,
  },
  itemDescription: {
    flexBasis: '100%',
    fontSize: windowWidth / 125,
  },
})


const MenuItem = ({name, price, description}) => {
  return (
    <div className={css(styles.menuItem)}>
      <div className={css(styles.nameAndPrice)}>
        <div className={css(styles.itemName)}>
          {name}
        </div>
        <div className={css(styles.itemPrice)}>
          {price}
        </div>
      </div>
      <div className={css(styles.itemDescription)}>
        {description}
      </div>
    </div>
  )
}


export default MenuItem
