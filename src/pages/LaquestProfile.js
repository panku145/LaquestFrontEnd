import React from "react";

import CompanyProfile from "../assets/company-profile/LaQuest-Company-Profile-_Email-Version.pdf";

const LaquestProfile = () => {
  return (
    <div className="company-profile">
      <iframe height="100vh" width="100%" src={CompanyProfile} />
    </div>
  );
};

export default LaquestProfile;
