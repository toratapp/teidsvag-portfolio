import PropTypes from 'prop-types';

function Card({ title, image, description, deployedURL, repoURL }) {
  return (
    <div className="card p-6">
      <h3 className="mb-4 ">{title}</h3>
      <figure className="mb-4">
        <img src={image} alt="Preview image" />
      </figure>
      <p className="mb-6">{description}</p>
      <a href={deployedURL} className="block inter-text-link text-xl text-primary mb-5">Visit website &gt;</a>
      <a href={repoURL} className="block inter-text-link text-xl text-primary">Visit GitHub repository &gt;</a>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  deployedURL: PropTypes.string.isRequired,
  repoURL: PropTypes.string.isRequired,
};

export default Card;
