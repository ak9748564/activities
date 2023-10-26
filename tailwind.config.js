/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      's0':'250px',
      's1': '402px',
      's2': '463px',
      's3': '768px',
      's4': '1050px',
      's5': '1200px',
      's6': '1536px',
    },
    fontFamily: {
      'nunito':[ 'Nunito Sans', 'sans-serif']
    },
    extend: {
      animation:{
        show_sidebar: 'show_sidebar 0.4s forwards',
        hide_sidebar: 'hide_sidebar 0.4s forwards',
        show_sidebar_mobile: 'show_sidebar_mobile 0.4s forwards',
        hide_sidebar_mobile: 'hide_sidebar_mobile 0.4s forwards',
        show_profile: 'show_profile 0.5s forwards',
        hide_profile: 'hide_profile 0.5s forwards',
        sidebar_text: 'sidebar_text 0.5s forwards',
        table_slide: 'table_slide 1s forwards ease-in-out',
        alert_copy: 'alert_copy 5s forwards',
        alert_slide:'alert_slide 5s forwards'
      },
      keyframes:{
        show_sidebar:{
          '0%':{width:'50px'},
          '100%':{width:'250px'}
        },
        hide_sidebar:{
          '0%':{width:'250px'},
          '100%':{width:'50px'}
        },
        show_sidebar_mobile:{
          '0%':{position:'fixed',left:'-250px'},
          '100%':{position:'fixed',left:'0px'}
        },
        hide_sidebar_mobile:{
          '0%':{position:'fixed',left:'0px'},
          '100%':{position:'fixed',left:'-250px'}
        },
        show_profile:{
          '0%':{height:'0px'},
          '100%':{height:'40px'}
        },
        hide_profile:{
          '0%':{height:'40px'},
          '100%':{height:'0px'}
        },
        sidebar_text:{
          '0%': {display:'none'},
          '90%':{display:'block'},
          '100%':{display:'block'}
        },
        table_slide:{
          '0%':{left:'-100%'},
          '100%':{left:'0'}
        },
        alert_copy:{
          '0%':{width:'100%'},
          '100%':{width:0}
        },
        alert_slide:{
          '0%':{right:'-250px'},
          '4%':{right:'50px'},
          '96%':{width:'300px'},
          '100%':{width:'0px'}
        }
    },
  },
  plugins: [],
}
}
