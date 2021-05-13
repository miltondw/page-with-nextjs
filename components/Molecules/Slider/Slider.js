import React, { Component, createRef } from "react";
export default class Slider extends Component {
  constructor(props) {
    super(props);
    //Element general from slider
    this.sliderContainer = createRef();
    //Element for load from slider
    this.slider = createRef();
    this.itemNav0 = createRef();
    this.itemNav1 = createRef();
    this.itemNav2 = createRef();
    //Element from navigation
    this.sliderNav = createRef();
    this.state = {
      //Para saber if the slider it is active
      active: true,
      cont: 0,
      left: "",
      navActive: "",
      length:this.props.slider.length
    };
  }
  componentDidMount() {
    //event for saber if mouse it is over slider
    this.onMouseOver();
    //event for saber if mouse it is out slider
    this.onMouseOut();
    // console.log( this.itemNav0.current.id, this.itemNav1.current.id, this.itemNav2.current.id)
    this.startInterval();
  }
  onMouseOver = () => {
    this.sliderContainer.current.addEventListener("mouseover", () => {
      if (this.state.active) this.setState({ active: false });
    });
  };
  onMouseOut = () => {
    this.sliderContainer.current.addEventListener("mouseout", () => {
      if (!this.state.active) this.setState({ active: true });
    });
  };
  startInterval = () => setInterval(this.counter, this.props.time);
  iconNav = (e) => {
    this.slideImage(e.target.id);
  };
  counter = () => {
    if (this.state.active) {
      this.setState({
        cont: this.state.cont + 1,
      });
      if (this.state.cont >= this.state.length) {
        this.setState({
          cont: 0,
        });
      }
      setInterval(this.slideImage(this.state.cont), this.props.time);
    }
  };
  slideImage = (id) => {
    if (!this.state.active && !isNaN(id)) {
      this.setState({
        cont: id,
      });
    }
    this.setState({
      left: `-${id}00%`,
    });
    this.setActive(id);
  };
  setActive = (id) => {
    if (this.itemNav0.current.id == id) {
      this.itemNav0.current.classList.add("slider-nav--active");
    } else {
      this.itemNav0.current.classList.remove("slider-nav--active");
    }
    if (this.itemNav1.current.id == id) {
      this.itemNav1.current.classList.add("slider-nav--active");
    } else {
      this.itemNav1.current.classList.remove("slider-nav--active");
    }
    if (this.itemNav2.current.id == id) {
      this.itemNav2.current.classList.add("slider-nav--active");
    } else {
      this.itemNav2.current.classList.remove("slider-nav--active");
    }
  };
  render() {
    const length = this.state.length
    const styleSlider = {
      width: `${length * 100}%`,
    };
    const styleImage = {
      width: `${100 / length}%`,
    };
    styleSlider.left = this.state.left;
    return (
      <section className="slider" ref={this.sliderContainer}>
        <div className="slider__images" style={styleSlider} ref={this.slider}>
          {
            // Print slider and navigation
            this.props.slider.map((image) => (
              <div className="slider__img"  style={styleImage} key={image.src}>
                <picture>
                  <source media="(min-width:600px )" srcset={image.src}/>
                  <img
                  src={image.src}
                  alt={image.alt}
                  key={image.id}
                />
                </picture>
                {image.post ? (
                  <div className="posts">
                    <h3 className="posts__title">{image.post.title}</h3>
                    <p className="posts__paragraph">{image.post.text}</p>
                    <button className="posts__button">
                      <a href={image.post.url} className="posts__url">
                        Leer más
                      </a>
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))
          }
        </div>
        <div
          className="slider__navigation"
          ref={this.sliderNav}
          onClick={this.iconNav}
        >
          <span className={"slider-nav "} ref={this.itemNav0} id={0}></span>
          <span className="slider-nav  " ref={this.itemNav1} id={1}></span>
          <span className="slider-nav  " ref={this.itemNav2} id={2}></span>
        </div>
      </section>
    );
  }
}
