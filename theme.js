import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  // extends the default theme
  ...theme,
  // add a custom font
  font: 'Quattrocento Sans, Roboto, sans-serif',
  // custom colors
  colors: {
    text: '#ffffff',
    background: '#1e272e',
    link: '#0ff',
    heading:'#05c46b',
    blockquote:'',
    pre:'',
    preBackground:'',
    code: '',
    codeBackground:'',
  },
  css: {
    body : {
      lineHeight: '1.5'
    },
    p: {
      fontSize:'48px',
      fontWeight: 'bold',
    },
    h1: {
      textTransform: 'uppercase',
      fontSize: '96px',
      
    },
    h2: {
      fontSize: '64px',
      color: 'white',
    },
    li: {
      marginBottom:'20px',
      fontSize:'48px',
      fontWeight: 'bold'
    },
    code: {
      fontSize: '32px'
    }
  },
  prism: {
    style: okaidia
  }
}
