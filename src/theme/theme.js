export const theme = {
  colors: {
    primary: {
      base: '#6A3EA1',
      dark: '#3A2258',
      light: '#EFE9F7',
      bg: '#FAF8FC',
    },
    scondary: {
      base: '#DEDC52',
      dark: '#565510',
      light: '#F7F6D4',
    },
    neutral: {
      black: '#180E25',
      darkGrey: '#827D89',
      baseGrey: '#C8C5CB',
      lightGrey: '#EFEEF0',
      white: '#FFFFFF',
    },
    success: {
      base: '#60D889',
      dark: '#1F7F40',
      light: '#DAF6E4',
    },
    error: {
      base: '#CE3A54',
      dark: '#5A1623',
      light: '#F7DEE3',
    },
    warning: {
      base: '#F8C715',
      dark: '#725A03',
      light: '#FDEBAB',
    },
  },
  fontFamily: {
    bold: 'SpaceGrotesk-Bold',
    light: 'SpaceGrotesk-Light',
    medium: 'SpaceGrotesk-Medium',
    regular: 'SpaceGrotesk-Regular',
    semibold: 'SpaceGrotesk-SemiBold',
  },
};

const FontFamilyStylesheet = `
@font-face {
    font-family: 'SpaceGrotesk-Regular';
    font-weight: normal;
}
`;

export default FontFamilyStylesheet;
