function render() {
    var inp     = document.getElementById("editor");
	var data = `
<svg xmlns="http://www.w3.org/2000/svg" width="${inp.offsetWidth}" height="${inp.offsetHeight}">
<foreignObject width="100%" height="100%">
<div xmlns="http://www.w3.org/1999/xhtml" 
style="font-family:monospace;font-style: normal; font-variant: normal; font-size:13.3px;padding:2px;;">
${inp.value} <i style="color:red">cant touch this</i>
</div>
</foreignObject>
</svg>`;
	var blob = new Blob( [data], {type:'image/svg+xml'} );
	var url=URL.createObjectURL(blob);
	inp.style.backgroundImage="url("+URL.createObjectURL(blob)+")";
 }
 onload=function(){
  render();
  ro = new ResizeObserver(render);
	ro.observe(document.getElementById("box"));
 };