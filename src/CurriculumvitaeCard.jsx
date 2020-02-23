import React from "react";

const CurriculumvitaeCard = ({ curriculumvitae }) => {
  return (
    <>
      <div class="ui card">
        <div class="content">
          <h3 class="ui header">{curriculumvitae.curriculumvitae}</h3>
          <div class="description">{curriculumvitae.year}</div>
        </div>
      </div>
    </>
  );
};
export default CurriculumvitaeCard;