import {Component} from "react";

export default class FeaturedBlock extends Component {
  render() {
    return (
        <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
        />
    );
  }

}