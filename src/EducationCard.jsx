import React from "react";

const EducationCard = ({ education }) => {
  return (
    <>
      <div class="ui card">
        <div class="content">
          <h3 class="ui header">{education.education}</h3>
          <div class="description">{education.year}</div>
        </div>
      </div>
    </>
  );
};
export default EducationCard;