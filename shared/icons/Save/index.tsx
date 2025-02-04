import * as React from 'react'
import { SVGProps } from 'react'

const SaveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    width="1em"
    height="1em"
    {...props}
  >
    <path d="m433.1 129.1-83.9-83.9c-6.9-6.88-22.1-13.2-33.1-13.2H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9c0-11-6.3-26.2-14.9-34.8zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64 64 28.66 64 64-28.7 64-64 64zm96-208c0 8.8-7.2 16-16 16H80c-8.84 0-16-7.2-16-16v-96c0-8.8 7.16-16 16-16h224c8.8 0 16 7.2 16 16v96z" />
  </svg>
)

export default SaveIcon
