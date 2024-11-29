export type IconProps = {
    fill?: string;
    className?: string;
  };
  
  export const SquareIcon = ({ fill = 'currentColor', className }: IconProps) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <rect width="24" height="24" fill={fill} />
    </svg>
  );
  
  export const CheckCircleIconOutline = ({ fill, className }: IconProps) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
      />
    </svg>
  );
  
  export const AlertCircleIconOutline = ({ fill, className }: IconProps) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"
      />
    </svg>
  );
  
  export const AddIcon = ({ fill = 'currentColor', className }: IconProps) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm5-9h-4V7h-2v4H7v2h4v4h2v-4h4v-2z"
      />
    </svg>
  );
  
  export const RemoveIcon = ({ fill = 'currentColor', className }: IconProps) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm6 11H6v-2h12v2z"
      />
    </svg>
  );