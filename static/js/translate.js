//trys to find a translation for the string and returns the translation or the original string
function translate(str)
{
  var translated = str;
  
  //return translation if avaiable
  if(typeof language !== "undefined" && translation != null && translation[language][str] != null)
  {
    translated = translation[language][str];
  }
  else if(window.console && typeof language !== "undefined")
  {
    window.console.log("No " + language + " translation for '" + str + "'");
  }
  
  return translated;
}

function DOMTranslate(selector, attribute)
{
  //skip translation if its english
  if(typeof language === "undefined")
   return;
   
  //loop trough all elements
  $(selector).each(function(index, element)
  {
    //make a jquery object
    element = $(element);
    
    //thats a attribute translation
    if(attribute != null)
    {
      element.attr(attribute, translate(element.attr(attribute)));
    }
    //thats a text translation
    else
    {
      element.text(translate(element.text()));
    }
  });
}

$(document).ready(function()
{
  DOMTranslate(".translate");
});
