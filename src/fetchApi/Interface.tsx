import React from 'react'

interface IBooking {
  uuid: string,
  Time: string,
  Level: 'Basic' | 'Topp' | 'Diamant' | 'Fonster',
  Städare: string,
  Status: boolean,
  Date: Date,
  _id: number;
}

export default IBooking