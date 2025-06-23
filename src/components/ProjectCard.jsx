/**
 * @copyright 2025 gmaarieta
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div className={"" + classes}>
      <figure className="img-box">
        <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
      </figure>

      <div className="">
        <div className="">
          <h3 className="title-1">{title}</h3>
          <div className="">
            {tags.map((label, key) => (
              <span key={key} className="">
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>

        <a href={projectLink} target="_blank" className=""></a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
};

export default ProjectCard;
