/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
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

const graphics = [
  {
    src: "../../images/graphic_design/coffee_1.jpg",
    width: 1440,
    height: 1153,
  },
];

const GraphicDesign = () => {
  const [index, setIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle visibility
  };

  return (
    <>
      <div className="container mb-0">
        {/* Dropdown Header */}
        <h2
          className="headline-3 flex items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          {/* Google Icon for the dropdown arrow */}
          <span className="material-symbols-rounded">
            {isOpen ? "keyboard_arrow_down" : "chevron_right"}
          </span>
          Graphics
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
              photos={graphics}
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
        slides={graphics}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
};

export default GraphicDesign;
