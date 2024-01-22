const fontWeight = {
    black: 800,
    bold: 700,
    medium: 500,
    regular: 400,
  };
  
  const fontSize = {
    display1: "60px",
    display2: "45px",
    heading1: "38px",
    heading2: "30px",
    heading3: "26px",
    temp: "22px",
    body1: "18px",
    body2: "16px",
    body3: "14px",
    body4: "13px",
    footer1: "12px",
    footer2: "10px",
  };
  
  const lineHeight = {
    display1: "78px",
    display2: "64px",
    heading1: "auto",
    heading2: "auto",
    heading3: "32px",
    body1: "32px",
    body2: "24px",
    body3: "24px",
    footer1: "18px",
    footer2: "16px",
    sectionTitle: "56px",
  };
  
  const letterSpacing = {
    heading: "0.5px",
    body: "0.32px",
    body1: "2%",
  };
  
  const fonts = {
    fontWeight,
    fontSize,
    lineHeight,
    letterSpacing,
    display1: {
      size: fontSize.display1,
      letterSpacing: letterSpacing.heading,
      lineHeight: lineHeight.display1,
    },
    display2: {
      size: fontSize.display2,
      letterSpacing: letterSpacing.heading,
      lineHeight: lineHeight.display2,
    },
    heading1: {
      size: fontSize.heading1,
      letterSpacing: letterSpacing.heading,
      lineHeight: lineHeight.heading1,
    },
    heading2: {
      size: fontSize.heading2,
      letterSpacing: letterSpacing.heading,
      lineHeight: lineHeight.heading2,
    },
    heading3: {
      size: fontSize.heading3,
      letterSpacing: letterSpacing.heading,
      lineHeight: lineHeight.heading3,
    },
    body1: {
      size: fontSize.body1,
      letterSpacing: letterSpacing.body,
      lineHeight: lineHeight.body1,
    },
    body2: {
      size: fontSize.body2,
      letterSpacing: letterSpacing.body,
      lineHeight: lineHeight.body2,
    },
    body3: {
      size: fontSize.body3,
      letterSpacing: letterSpacing.body,
      lineHeight: lineHeight.body3,
    },
    footer1: {
      size: fontSize.footer1,
      letterSpacing: letterSpacing.body,
      lineHeight: lineHeight.footer1,
    },
    footer2: {
      size: fontSize.footer2,
      letterSpacing: letterSpacing.body,
      lineHeight: lineHeight.footer2,
    },
  };
  
  export default fonts;
  