/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        custom_bordercolor: '#4F6395',
        custom_Black:'#1F1F1F',
        custom_White:'#FFFFFF',
        custom_nav_comp2_blue:'#4D9EEA',
        custom_comp1_green:'#447345',
        custom_comp2_opaque_blue:'#204E98',
        custom_formcolor:'#F2F3F3',
        custom_alert_grey:'#979BA1',
        
      },
      fontFamily: {
        sans_pro: ['Source Sans Pro', 'sans-serif'],
        helvetica:['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        Inter:['Inter', 'sans-serif'],

      },
      customwidth:{
       w30:'30%'
      },
      spacing: {
        //common for width, height, padding, margin
        1.25: "5px",
        2: "8px",
        "9px": "9px",
        3: "12px",
        3.5: "14px",
        "15px": "15px",
        4: "16px",
        "17px": "17px",
        4.5: "18px",
        4.75: "19px",
        5: "20px",
        "21px": "21px",
        6: "24px",
        "25px": "25px",
        7.5: "30px",
        8: "32px",
        "33px": "33px",
        "37px": "37px",
        9.5: "38px",
        "39px": "39px",
        10: "40px",
        10.5: "42px",
        11.5: "46px",
        12.5: "50px",
        13: "52px",
        19: "76px",
        "77px": "77px",
        20.5: "82px",
        "88px": "88px",
        "89px": "89px",
        25: "100px",
        "119px": "119px",
        30: "120px",
        31: "124px",
        32.5: "130px",
        "149px": "149px",
        37.5: "150px",
        39.5: "158px",
        40: "160px",
        45: "180px",
        50: "200px",
        "225px": "225px",
        "239px": "239px",
        "259px": "259px",
        67.5: "270px",
        82.5: "330px",
        83.5: "334px",
        "349px": "349px",
        104: "416px",
        127.5: "510px",
        129.5: "518px",
        "543px": "543px",
        140.5: "562px",
        165: "660px",
        171: "684px",
        "759px": "759px",
        "787px": "787px",
        313.5: "1254px",
        349: "1396px"
      },
      screens: {
        xs: "480px", //min-width 480px
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px"
      }
    } 
  },

  plugins: [],
}
