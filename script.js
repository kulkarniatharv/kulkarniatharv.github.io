// Vanilla JS

let num = document.getElementById("num1");
let fontSizeInput = document.getElementById("font_size");
let marginInput = document.getElementById("margin");
let cngSizeBtn = document.querySelector("input[name='cngSize']");
let marginBtn = document.querySelector("input[name='margin']");
let dd_fontSize = document.getElementById('select1');
let dd_Margin = document.getElementById('select2');

let num_style = getComputedStyle(num);
let marginVal = num_style["margin-left"].match(/^[0-9]+/)[0];
let marginUnit = num_style["margin-left"].match(/[a-z]+$/)[0];
let rootFontVal = num_style["fontSize"].match(/^[0-9]+/)[0];
let fontVal = num_style["fontSize"].match(/^[0-9]+/)[0];
let fontUnit = num_style["fontSize"].match(/[a-z]+$/)[0];

// INITIAL VALUES
// initial font value in input box
fontSizeInput.value = num_style["fontSize"].match(/^[0-9]+/)[0];
marginInput.value = num_style["margin-left"].match(/^[0-9]+/)[0];
// initial dropdown value
dd_fontSize.value = fontUnit;


// ============= EVENT LISTENERS ========================
num.addEventListener('hover', () => {
    num.style.fontSize()
})

fontSizeInput.addEventListener('input', (event) => {
    fontVal = event.target.value;
    if(fontVal.match(/^[0-9]+/)[0] != null){
        fontVal = fontVal.match(/^[0-9]+/)[0];  
    } 
});

marginInput.addEventListener('input', (event) => {
    marginVal = event.target.value;
    if(marginVal.match(/^[0-9]+/)[0] != null){
        marginVal = marginVal.match(/^[0-9]+/)[0];  
    } 
});

cngSizeBtn.addEventListener('click', () => {
    font = fontVal + fontUnit;
    num.style.fontSize = font;
});
marginBtn.addEventListener('click', () => {
    margin = marginVal + marginUnit;
    num.style.margin = margin;
});

dd_fontSize.addEventListener('change', (event) => {
    fontVal = convertUnits("fontSize", Number(fontVal), fontUnit, event.target.value);
    fontSizeInput.value = fontVal;
    fontUnit = event.target.value; 
});

dd_Margin.addEventListener('change', (event) => {
    marginVal = convertUnits("margin", Number(marginVal), marginUnit, event.target.value);
    marginInput.value = marginVal;
    marginUnit = event.target.value; 
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ============= Functions ==========================

function convertUnits(property, value, fromUnit, toUnit){
    if (value !== parseFloat(value)) {
        throw TypeError(
          `Invalid value for conversion. Expected Number, got ${value}`
        );
      }

      const shouldReturn = () => {
        // Early return if:
        // - conversion is not required
        // - property is `line-height`
        // - `fromUnit` is `em` and `toUnit` is unitless
        const conversionNotRequired = fromUnit === toUnit || value === 0;
        const forLineHeight =
          property === "line-height" && fromUnit === "" && toUnit === "em";
        const isEmToUnitlessConversion = fromUnit === "em" && toUnit === "";
        return conversionNotRequired || forLineHeight || isEmToUnitlessConversion;
      };

      if (shouldReturn()) {
        return value;
      }

       // If neither unit is in pixels, first convert the value to pixels.
    // Reassign input value and source CSS unit.
    if (toUnit !== "px" && fromUnit !== "px") {
        value = this.convertUnits(property, value, fromUnit, "px");
        fromUnit = "px";
      }
  
      // Whether the conversion is done from pixels.
      const fromPx = fromUnit === "px";
      // Determine the target CSS unit for conversion.
      const unit = toUnit === "px" ? fromUnit : toUnit;
      // Default output value to input value for a 1-to-1 conversion as a guard against
      // unrecognized CSS units. It will not be correct, but it will also not break.
      let out = value;

      const converters = {
        in: () => (fromPx ? value / 96 : value * 96),
        cm: () => (fromPx ? value * 0.02645833333 : value / 0.02645833333),
        mm: () => (fromPx ? value * 0.26458333333 : value / 0.26458333333),
        pt: () => (fromPx ? value * 0.75 : value / 0.75),
        pc: () => (fromPx ? value * 0.0625 : value / 0.0625),
      }

      if (converters.hasOwnProperty(unit)) {
        const converter = converters[unit];
        out = converter();
      }

      // Special handling for unitless line-height.
    if (unit === "em" || (unit === "" && property === "line-height")) {
        const fontSize = rootFontVal;
        out = fromPx
          ? value / parseFloat(fontSize)
          : value * parseFloat(fontSize);
      }
  
      // Catch any NaN or Infinity as result of dividing by zero in any
      // of the relative unit conversions which rely on external values.
      if (isNaN(out) || Math.abs(out) === Infinity) {
        out = 0;
      }
  
      // Return values limited to 3 decimals when:
      // - the unit is converted from pixels to something else
      // - the value is for letter spacing, regardless of unit (allow sub-pixel precision)
      if (fromPx || property === "letter-spacing") {
        // Round values like 1.000 to 1
        return out === Math.round(out) ? Math.round(out) : out.toFixed(3);
      }
  
      // Round pixel values.
      return Math.round(out);
}


// +++++++++++++++++++++++++++++++++++++++++++++++++++