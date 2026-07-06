
import React from 'react'
import universityLogo from "../../assets/ganpat-logo.png";

const UniversityHeader = () => {
  return (
     <div className="flex justify-center mb-3">
      <img
        src={universityLogo}
        alt="Ganpat University"
        className="w-44 object-contain"
      />
    </div>
  )
}

export default UniversityHeader
