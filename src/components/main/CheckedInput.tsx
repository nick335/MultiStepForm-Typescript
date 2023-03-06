import React from 'react'

export default function CheckedInput() {
  return (
    <div className="bg-red-200">
      <input className="w-5 h-5" id="morning" type="checkbox"/>
      {/* <svg className="inline-svg bg-blue-200">
        <symbol id="check-4" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </symbol>
      </svg> */}
    </div>
  )
}
