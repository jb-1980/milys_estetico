import React from "react"
import ReactDOM from "react-dom"
import { StyleSheet, css } from "aphrodite"
import { hot } from "react-hot-loader"

import { prices } from "./prices"
import Section from "./Section"
import Header from "./header"

export default class Menu extends React.Component {
  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener("resize", this.resize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize)
  }

  render() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const containerWidth = windowWidth / 2
    const headerHeight = windowHeight * (2 / 9) // 240px on a 1080p resolution
    const sectionHeight = windowHeight * (7 / 9) // 840px on a 1080p resolution

    const styles = StyleSheet.create({
      menu: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "flex-start",
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
      },
    })
    const promo1 = [
      "adult_line_cut.jpg",
      "child_1.jpg",
      "child_fade_1.jpg",
      "kid_line_style_1.jpg",
      "kid_line_style_2.jpg",
      //'600x600.png',
    ].map((promo, i) => (
      <img
        key={i}
        className={`promo1-image ${css(styles.promo1)}`}
        src={`../assets/images/${promo}`}
        data-position={i}
      />
    ))
    const promo2 = [
      "before_after_5.jpg",
      "before_after_7.jpg",
      "before_after_8.jpg",
      "before_after_9.jpg",
      "before_after_10.jpg",
      "before_after_11.jpg",
      "before_after_12.jpg",
      "before_after_13.jpg",
      "before_after_14.jpg",
      "maquillaje1.jpg",
    ].map((promo, i) => (
      <img
        key={i}
        className="promo2-image"
        style={{
          width: windowHeight / 1.8,
          height: windowHeight / 1.8,
        }}
        data-position={i}
        src={`../assets/images/${promo}`}
      />
    ))

    return (
      <div className={css(styles.menu)} id="menu">
        <Header windowHeight={windowHeight} windowWidth={windowWidth} />
        <div className={css(styles.section)}>
          <Section
            name="haircuts"
            description=""
            items={prices["haircuts"]}
            promos={promo1}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
          />
        </div>
        <div className={css(styles.section)}>
          <Section
            name="style and beauty"
            description=""
            items={prices["style and beauty"]}
            promos={promo2}
            windowHeight={windowHeight}
            windowWidth={windowWidth}
          />
        </div>
      </div>
    )
  }
}

const App = hot(module)(Menu)

ReactDOM.render(<App />, document.getElementById("app"))
