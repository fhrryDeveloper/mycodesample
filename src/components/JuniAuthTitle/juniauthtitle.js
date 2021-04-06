import React from 'react';
import './juniauthtitle.css';

/**
 * Header of Auth UI component
 */
export const JuniAuthTitle = ({content, specialcontent, desc, classNames}) => {
  return (
    <div className={ classNames }>
      <p className="title-line">{ content } <u>{ specialcontent }</u></p>
      <p className="description-line">{ desc }</p>
    </div>
  );
};