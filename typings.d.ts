declare module 'react-native-ico-default' {
    import { ReactNode } from 'react';

    type iconNames = 'edit' |
      'heart' |
      'heart2' |
      'leftArrow' |
      'menu' |
      'question' |
      'remove' |
      'speaker';

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

