import React from 'react';
function FeaturedImage(props) {
  const { bg, title, subTitle, link } = props;
  return (
    <div className="featured">
      <div className="bg" style={{ backgroundImage: bg }}>
        <div className="container">
          <h2 className="title">{title}</h2>
          <p className="sub-title">{subTitle}</p>
          <br />
          {link && <div className="button-feature">{link.name}</div>}
        </div>
      </div>
    </div>
  );
}
export default FeaturedImage;
