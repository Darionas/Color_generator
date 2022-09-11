var btn = document.getElementById('btn');
var clr = document.getElementById('clr');

//Object of colors
var objclr = {
  CF0F8FF: 'AliceBlue',
  CFAEBD7: 'AntigueWhite',
  C00FFFF: 'Aqua',
  C7FFFD4: 'Aquamarine',
  CF0FFFF: 'Azure',
  CF5FDC: 'Beige',
  CFFE4C4: 'Bisque',
  C000000: 'Black',
  CFFEBCD: 'BlanchedAlmond',
  C0000FF: 'Blue',
  C8A2BE2: 'BlueViolet',
  CA52A2A: 'Brown',
  CDEB887: 'BurlyWood',
  C5F9EA0: 'CadetBlue',
  C7FFF00: 'Chartreuse',
  CD2691E: 'Chocolate',
  CFF7F50: 'Coral',
  C6495ED: 'CornflowerBlue',
  CFFF8DC: 'Cornsilk',
  CDC143C: 'Crimson',
  C00FFFF: 'Cyan',
  C00008B: 'DarkBlue',
  C008B8B: 'DarkCyan',
  CB8860B: 'DarkGoldenRod',
  CA9A9A9: 'DarkGray/Grey',
  C006400: 'DarkGreen',
  CBDB76B: 'DarkKhaki',
  C8B008B: 'DarkMagenta',
  C556B2F: 'DarkOliveGreen',
  CFF8C00: 'DarkOrange',
  C9932CC: 'DarkOrchid',
  C8B0000: 'DarkRed',
  CE9967A: 'DarkSalmon',
  C8FBC8F: 'DarkSeaGreen',
  C483D8B: 'DarkSlateBlue',
  C2F4F4F: 'DarkSlateGray/Grey',
  C00CED1: 'DarkTurquoise',
  C9400D3: 'DarkViolet',
  CFF1493: 'DeepPink',
  C00BFFF: 'DeepSkyBlue',
  C696969: 'DimGray/Grey',
  C1E90FF: 'DodgerBlue',
  CB22222: 'FireBrick',
  CFFFAF0: 'FloralWhite',
  C228B22: 'ForestGreen',
  CFF00FF: 'Fuchsia',
  CDCDCDC: 'Gainsboro',
  CF8F8FF: 'GhostWhite',
  CFFD700: 'Gold',
  CDAA520: 'GoldenRod',
  C808080: 'Gray/Grey',
  C008000: 'Green',
  CADFF2F: 'GreenYellow',
  CF0FFF0: 'HoneyDew',
  CFF69B4: 'HotPink',
  CCD5C5C: 'IndianRed',
  C4B0082: 'Indigo',
  CFFFFF0: 'Ivory',
  CF0E68C: 'Khaki',
  CE6E6FA: 'Lavender',
  CFFF0F5: 'LavenderBlush',
  C7CFC00: 'LawnGreen',
  CFFFACD: 'LemonChiffon',
  CADD8E6: 'LightBlue',
  CF08080: 'LightCoral',
  CE0FFFF: 'LightCyan',
  CFAFAD2: 'LightGoldenRodYellow',
  CD3D3D3: 'LightGray/Grey',
  C90EE90: 'LightGreen',
  CFFB6C1: 'LightPink',
  CFFA07A: 'LightSalmon',
  C20B2AA: 'LightSeaGreen',
  C87CEFA: 'LightSkyBlue',
  C778899: 'LightSlateGray/Grey',
  CB0C4DE: 'LightSteelBlue',
  CFFFFE0: 'LightYellow',
  C00FF00: 'Lime',
  C32CD32: 'LimeGreen',
  CFAF0E6: 'Linen',
  CFF00FF: 'Magenta',
  C800000: 'Maroon',
  C66CDAA: 'MediumAquaMarine',
  C0000CD: 'MediumBlue',
  CBA55D3: 'MediumOrchid',
  C9370DB: 'MediumPurple',
  C3CB371: 'MediumSeaGreen',
  C7B68EE: 'MediumSlateBlue',
  C00FA9A: 'MediumSpringGreen',
  C48D1CC: 'MediumTurquoise',
  CC71585: 'MediumVioletRed',
  C191970: 'MidnightBlue',
  CF5FFFA: 'MintCream',
  CFFE4E1: 'MistyRose',
  CFFE4B5: 'Moccasin',
  CFFDEAD: 'NavajoWhite',
  C000080: 'Navy',
  CFDF5E6: 'OldLace',
  C808000: 'Olive',
  C6B8E23: 'OliveDrab',
  CFFA500: 'Orange',
  CFF4500: 'OrangeRed',
  CDA70D6: 'Orchid',
  CEEE8AA: 'PaleGoldenRod',
  C98FB98: 'PaleGreen',
  CAFEEEE: 'PaleTurquoise',
  CDB7093: 'PaleVioletRed',
  CFFEFD5: 'PapayaWhip',
  CFFDAB9: 'PeachPuff',
  CCD853F: 'Peru',
  CFFC0CB: 'Pink',
  CDDA0DD: 'Plum',
  CB0E0E6: 'PowderBlue',
  C800080: 'Purple',
  C663399: 'RebeccaPurple',
  CFF0000: 'Red',
  CBC8F8F: 'RosyBrown',
  C4169E1: 'RoyalBlue',
  C8B4513: 'SaddleBrown',
  CFA8072: 'Salmon',
  CF4A460: 'SandyBrown',
  C2E8B57: 'SeaGreen',
  CFFF5EE: 'SeaShell',
  CA0522D: 'Sienna',
  CC0C0C0: 'Silver',
  C87CEEB: 'SkyBlue',
  C6A5ACD: 'SlateBlue',
  C708090: 'SlateGray/Grey',
  CFFFAFA: 'Snow',
  C00FF7F: 'SpringGreen',
  C4682B4: 'SteelBlue',
  CD2B48C: 'Tan',
  C008080: 'Teal',
  CD8BFD8: 'Thistle',
  CFF6347: 'Tomato',
  C40E0D0: 'Turquoise',
  CEE82EE: 'Violet',
  CF5DEB3: 'Wheat',
  CFFFFFF: 'White',
  CF5F5F5: 'WhiteSmoke',
  CFFFF00: 'Yellow',
  C9ACD32: 'YellowGreen'
}

btn.addEventListener('click', colorGen)

function colorGen() { 
  // Defining the number of random keys
  var n = 1;

  // Shuffling the object
    var keys = Object.keys(objclr).map((e, i, a) => {
    
  // Getting a random value between [i, a.length]
  // Math.floor can be translated as ~~
    var j = Math.floor(Math.random() * (a.length - i) + i);
    
  // Switching the elements of positions i & j
    [a[i], a[j]] = [a[j], a[i]];
    
  // Returning current value
    return a[i];
    
});

// Getting random keys
var randomKeys = keys.slice(0, n);

//Convert randomKeys to string and first C replace with #
var str = randomKeys.toString();
var he = str.slice(0, 1);
var hexo = str.replace(he, '#');

//Color div with id = 'clr'
clr.style.backgroundColor = hexo;

//return hex value
document.getElementById('h').value = hexo;

//return color name
document.getElementById('n').value = objclr[randomKeys];

//return rgb value
var hexocon = hexo.slice(1, 7);
var aRgbHex = hexocon.match(/.{1,2}/g);
var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16)
];
document.getElementById('rg').value = 'rgb'+ '(' + aRgb.toString() + ')';

}


 