/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useState } from "react";
// photo album
import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";

// light box
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const mapImages = [
  {
    src: "../../images/maps/covid_map_lb.png",
    width: 870,
    height: 845,
  },
  {
    src: "../../images/maps/covid_map_sta_rosa.jpg",
    width: 1822,
    height: 1767,
  },
  {
    src: "../../images/maps/map_0.png",
    width: 487,
    height: 522,
  },
  {
    src: "../../images/maps/map_1.png",
    width: 544,
    height: 492,
  },
  {
    src: "../../images/maps/map_2.png",
    width: 490,
    height: 568,
  },
  {
    src: "../../images/maps/map_3.png",
    width: 544,
    height: 518,
  },
  {
    src: "../../images/maps/map_4.png",
    width: 544,
    height: 434,
  },
  {
    src: "../../images/maps/map_5.png",
    width: 544,
    height: 436,
  },
  {
    src: "../../images/maps/map_6.png",
    width: 620,
    height: 440,
  },
  {
    src: "../../images/maps/map_7.png",
    width: 544,
    height: 454,
  },
  {
    src: "../../images/maps/map_8.gif",
    width: 544,
    height: 492,
  },
  {
    src: "../../images/maps/map_9.png",
    width: 505,
    height: 377,
  },
  {
    src: "../../images/maps/map_10.png",
    width: 496,
    height: 550,
  },
  {
    src: "../../images/maps/map_11.png",
    width: 192,
    height: 338,
  },
  {
    src: "../../images/maps/map_12.png",
    width: 627,
    height: 375,
  },
  {
    src: "../../images/maps/map_13.png",
    width: 544,
    height: 512,
  },
  {
    src: "../../images/maps/map_14.png",
    width: 564,
    height: 510,
  },
  {
    src: "../../images/maps/map_15.png",
    width: 392,
    height: 282,
  },
  {
    src: "../../images/maps/map_16.png",
    width: 309,
    height: 267,
  },
  {
    src: "../../images/maps/map_17.png",
    width: 409,
    height: 568,
  },
  {
    src: "../../images/maps/map_18.png",
    width: 544,
    height: 568,
  },
];

const Maps = () => {
  const [index, setIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle visibility
  };

  return (
    <section id="work" className="section">
      <div className="container mb-3">
        <h2 className="headline-2 mb-3">Portfolio</h2>
        {/* Dropdown Header */}
        <h2
          className="headline-3 flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          {/* Google Icon for the dropdown arrow */}
          <span className="material-symbols-rounded">
            {isOpen ? "keyboard_arrow_down" : "chevron_right"}
          </span>
          Maps
        </h2>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="mt-3 mb-8">
            {/* <ColumnsPhotoAlbum
              photos={mapImages}
              spacing={4}
              onClick={({ index }) => setIndex(index)}
            /> */}
            <PhotoAlbum
              layout="rows"
              onClick={({ index }) => setIndex(index)}
              photos={mapImages}
              componentsProps={{
                containerProps: {
                  style: { maxWidth: 1200, marginInline: "auto" },
                },
              }}
              rowConstraints={(containerWidth) => ({
                maxPhotos: containerWidth > 600 ? 4 : 1,
              })}
            />
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        slides={mapImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </section>
  );
};

export default Maps;
