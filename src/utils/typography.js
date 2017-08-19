import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  scaleRatio: 2.2,
  baseLineHeight: 1.45,
  googleFonts: [
    {
      name: 'Roboto',
      styles: [
        '100',
        '300',
        '800',
      ],
    }
    ],
  headerFontFamily: ['Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
})

export default typography
