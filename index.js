javascript:
(d=>{
  var css = `
        :root{
          background-color: #fefefe;
          filter: invert(100%)
        }
        * {
          background-color: inherit
        }
        img:not([src*=".svg"]), video{
          filter: invert(100%)
        }
  `,
  style,
  id="dark-theme-snippet",
  ee = d.getElementById(id);
  if (null != ee) ee.parentNode.removeChild(ee);
  else {
    style = d.createElement('style');
    style.type = "text/css";
    style.id = id;
    if (style.styleSheet) style.styleSheet.cssText = css;
    else style.appendChild(d.createTextNode(css));
    (d.head||d.querySelector('head')).appendChild(style);
  }
})(document)
