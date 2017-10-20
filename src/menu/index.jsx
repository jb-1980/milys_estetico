import React from 'react'
import ReactDOM from 'react-dom'
import { StyleSheet, css } from 'aphrodite'

import { prices } from './prices'
import Section from './Section'
import Header from './header'

const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

const containerWidth = windowWidth / 2
const headerHeight = windowHeight * (2 / 9) // 240px on a 1080p resolution
const sectionHeight = windowHeight * (7 / 9) // 840px on a 1080p resolution

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    width: windowWidth,
    height: windowHeight,
  },
  section: {
    flex: 1,
    maxWidth: containerWidth,
    height: sectionHeight,
  },
  mainHeader: {
    height: headerHeight,
  },
  promo1: {
    width: windowHeight / 3,
    height: windowHeight / 3,
  }
})

export default class Menu extends React.Component {

  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  render() {
    const promo1 = [
      'fade1.jpg',
      'cut1.jpg',
      'fade3.jpg',
      'fade2.jpg',
      'withbeard.jpg',
      'style1.jpg',
      //'600x600.png',
    ].map((promo, i) =>
      <img
        key={i}
        className={`promo1-image ${css(styles.promo1)}`}
        src={`../../assets/images/${promo}`}
        data-position={i}
      />
    )
    const promo2 = [
      'before_after1.jpg',
      'before_after2.jpg',
      'before_after3.jpg',
      'before_after4.jpg',
      'before_after5.jpg',
      'highlights1.jpg',
      'highlights2.jpg',
    ].map((promo, i) =>
      <img
        key={i}
        className="promo2-image"
        style={{
          width: windowHeight / 1.8,
          height: windowHeight / 1.8,
        }}
        data-position={i}
        src={`../../assets/images/${promo}`}
      />
    )

    return (
      <div className={css(styles.menu)} id="menu">
        <Header className={css(styles.mainHeader)}/>
        <div className={css(styles.section)}>
          <Section
            name='haircuts'
            description=''
            items={prices['haircuts']}
            promos={promo1}
          />
        </div>
        <div className={css(styles.section)}>
          <Section
            name='style and beauty'
            description=''
            items={prices['style and beauty']}
            promos={promo2}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Menu/>,
  document.getElementById('app')
)
