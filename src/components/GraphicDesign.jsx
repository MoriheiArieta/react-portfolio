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
  {
    src: "../../images/graphic_design/coffee_2.jpg",
    width: 2048,
    height: 2048,
  },
  {
    src: "../../images/graphic_design/coffee_3.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "../../images/graphic_design/coffee_4.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "../../images/graphic_design/coffee_5.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "../../images/graphic_design/coffee_6.jpg",
    width: 2032,
    height: 2048,
  },
  {
    src: "../../images/graphic_design/coffee_7.jpg",
    width: 2048,
    height: 1735,
  },
  {
    src: "../../images/graphic_design/coffee_8.jpg",
    width: 2048,
    height: 1590,
  },
  {
    src: "../../images/graphic_design/coffee_9.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "../../images/graphic_design/coffee_10.jpg",
    width: 1080,
    height: 1080,
  },
  {
    src: "../../images/graphic_design/coffee_11.jpg",
    width: 720,
    height: 540,
  },
  {
    src: "../../images/graphic_design/coffee_12.jpg",
    width: 1080,
    height: 1512,
  },
  {
    src: "../../images/graphic_design/coffee_13.jpg",
    width: 1080,
    height: 1512,
  },
  {
    src: "../../images/graphic_design/coffee_logo.jpg",
    width: 2015,
    height: 2015,
  },
  {
    src: "../../images/graphic_design/invitation_0.jpg",
    width: 1080,
    height: 1920,
  },
  {
    src: "../../images/graphic_design/joker_mods_logo.jpg",
    width: 1000,
    height: 1000,
  },
  {
    src: "../../images/graphic_design/joker_mods_pricelist.jpg",
    width: 628,
    height: 1200,
  },
  {
    src: "../../images/graphic_design/poster_farm_0.png",
    width: 4862,
    height: 4862,
  },
  {
    src: "../../images/graphic_design/poster_farm_1.png",
    width: 5789,
    height: 8186,
  },
  {
    src: "../../images/graphic_design/poster_fruit_wine.png",
    width: 5788,
    height: 8186,
  },
  {
    src: "../../images/graphic_design/poster_lechon_0.png",
    width: 5789,
    height: 8588,
  },
  {
    src: "../../images/graphic_design/poster_lechon_1.png",
    width: 8186,
    height: 5789,
  },
  {
    src: "../../images/graphic_design/tarp_1.png",
    width: 25201,
    height: 16801,
  },
];

const GraphicDesign = () => {
  const [index, setIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container mb-0 px-4 sm:px-6 lg:px-8">
        {/* Dropdown Header */}
        <div
          className="group relative bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-4 overflow-hidden"
          onClick={toggleDropdown}
        >
          <h2 className="headline-3 flex items-center justify-between cursor-pointer p-4 text-gray-800 dark:text-gray-100 font-semibold text-lg sm:text-xl tracking-tight hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
            <span className="flex items-center gap-2">
              <span className="material-symbols-rounded transition-transform duration-300">
                {isOpen ? "keyboard_arrow_down" : "chevron_right"}
              </span>
              Graphics
            </span>
          </h2>
          {/* Underline animation on hover or when open */}
          <span
            className={`absolute bottom-0 left-0 h-1 bg-[#b8798c] transition-all duration-300 ${
              isOpen ? "w-full" : "w-0 lg:group-hover:w-full"
            }`}
          ></span>
          {/* <span
            className={`absolute bottom-0 left-0 h-1 bg-[#b8798c] transition-all duration-300 w-0 group-hover:w-full`}
          ></span> */}
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="mt-3 mb-8 animate-fade-in">
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
