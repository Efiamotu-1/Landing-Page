import { Typography } from '@material-ui/core'
import { Send } from '@material-ui/icons'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        Layout
        <Send />
        <Typography
      variant='h6'
      component='h2'
      gutterBottom
      color='textSecondary'
      >
        Create a new note
        </Typography>
        {/* children */}
    </div>
  )
}
