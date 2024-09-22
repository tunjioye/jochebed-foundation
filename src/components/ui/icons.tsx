type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
  quote: (props: IconProps) => (
    <svg
      preserveAspectRatio="xMidYMid meet"
      data-bbox="13.577 30.993 172.003 140"
      viewBox="13.577 30.993 172.003 140"
      height="200"
      width="200"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      data-type="color"
      role="presentation"
      aria-hidden="true"
      aria-label=""
      {...props}
    >
      <g>
        <path
          fill={props.color ?? "#c1d7e8"}
          d="M86.586 49.574c-19.8 13.01-37.742 37.789-39.6 57.614.62 0 4.949-.62 8.042-.62 17.326 0 29.7 13.006 29.7 31.591a32.635 32.635 0 0 1-32.793 32.834c-20.416 0-38.358-16.727-38.358-47.081 0-37.789 21.654-72.477 50.116-92.919zm98.994 0c-19.8 13.01-37.123 37.789-39.6 57.614.616 0 4.948-.62 8.042-.62 17.322 0 30.316 13.006 30.316 31.591 0 17.964-14.848 32.834-33.41 32.834-20.416 0-38.358-16.727-38.358-47.081 0-37.789 21.652-72.477 50.113-92.919z"
        ></path>
      </g>
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
}
