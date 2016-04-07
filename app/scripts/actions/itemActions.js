import Reflux from 'reflux';

var ItemActions = Reflux.createActions([
  'loadItems',
  'loadItemsSuccess',
  'loadItemsError'
]);

ItemActions.loadItems.preEmit = function(data){
  // make your api call/ async stuff here
  // we use setTimeout for faking async behaviour here
  setTimeout(function(){
    var items = [];

    let xmlhttp = undefined;

    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onload = function() {
      if(xmlhttp.status == 200) {
        let xmlDoc = null;
        if (window.DOMParser)
        {
          let parser = new DOMParser();
          xmlDoc = parser.parseFromString(xmlhttp.responseText,"text/xml");
        }
        else // Internet Explorer
        {
          xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
          xmlDoc.async = false;
          xmlDoc.loadXML(xmlhttp.responseText);
        }

        let x = xmlDoc.getElementsByTagName("blog");
        for (var i = 0; i < x[0].childNodes.length; ++i) {
          var child = x[0].childNodes[i];
          if (child.nodeType !== 1/*Node.ELEMENT_NODE*/) continue;

          let image = x[0].childNodes[i].getElementsByTagName("image")[0].textContent.replace(/(\r\n|\n|\r)/gm,"").replace(/  /g, '');

          items.push({
            id: x[0].childNodes[i].getElementsByTagName("id")[0].textContent,
            header: x[0].childNodes[i].getElementsByTagName("header")[0].textContent,
            title: x[0].childNodes[i].getElementsByTagName("title")[0].textContent,
            text: x[0].childNodes[i].getElementsByTagName("text")[0].textContent.replace(/(\r\n|\n|\r)/gm,"<br />"),
            href: x[0].childNodes[i].getElementsByTagName("odkaz")[0].textContent,
            image: image
          });
        }
      }
    }

    xmlhttp.open("GET","js/blog_XML.xml",false);
    xmlhttp.send();

    ItemActions.loadItemsSuccess(items);

    // on error
    ItemActions.loadItemsError('Při dotahování hodnot do blogu došlo k chybě. Opakujte akci pomocí klávesy F5.');
  },500);
};

export default ItemActions;
