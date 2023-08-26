import React, {useState, useEffect} from 'react'

const HospDetail = () => {
  const hospital = JSON.parse(window.localStorage.getItem('hospitalDetails'));
  console.log(hospital)
  return (
    <>
      <div>
        HospDetail
      </div>
    </>
  )
}

export default HospDetail