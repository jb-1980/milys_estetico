import React from "react"
import ReactDOM from "react-dom"
import { css } from "emotion"
import { hot } from "react-hot-loader"

import { prices } from "./prices"
import Section from "./Section"
import Header from "./header"

export default class Menu extends React.Component {
  state = { showVideo: true, timestamp: Date.now() }
  resize = () => this.forceUpdate()

  componentDidMount() {
    window.addEventListener("resize", this.resize)
    this.interval = setInterval(
      () =>
        this.setState(prevState => {
          const video = document.getElementById("iron-video")
          const now = Date.now()
          if (prevState.showVideo && video.ended) {
            return { showVideo: false, timestamp: now }
          } else if (now - prevState.timestamp > 300000 && video.ended) {
            video.load()
            return { showVideo: true, timestamp: now }
          }

          return prevState
        }),
      1000
    )
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize)
    clearInterval(this.interval)
  }

  render() {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    const containerWidth = windowWidth / 2
    const headerHeight = windowHeight * (2 / 9) // 240px on a 1080p resolution
    const sectionHeight = windowHeight * (7 / 9) // 840px on a 1080p resolution

    const styles = {
      menu: css`
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        width: ${windowWidth}px;
        height: ${windowHeight}px;
      `,
      section: css`
        flex: 1;
        max-width: ${containerWidth}px;
        height: ${sectionHeight}px;
      `,
      mainHeader: css`
        height: ${headerHeight}px;
      `,
      promo1: css`
        width: ${windowHeight / 3}px;
        height: ${windowHeight / 3}px;
      `,
      video: css`
        position: fixed;
        right: ${this.state.showVideo ? 0 : "-10000px"};
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: 1980;
        transition: right 0.8s ease-in-out;
      `,
    }
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
        className={`promo1-image ${styles.promo1}`}
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
      <div>
        <video className={styles.video} autoPlay id="iron-video">
          <source src="../assets/videos/hl_iron.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className={styles.menu} id="menu">
          <Header windowHeight={windowHeight} windowWidth={windowWidth} />
          <div className={styles.section}>
            <Section
              name="haircuts"
              description=""
              items={prices["haircuts"]}
              promos={promo1}
              windowHeight={windowHeight}
              windowWidth={windowWidth}
            />
          </div>
          <div className={styles.section}>
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
      </div>
    )
  }
}

const App = hot(module)(Menu)

ReactDOM.render(<App />, document.getElementById("app"))
