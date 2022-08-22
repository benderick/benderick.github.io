function get_current_element(event){
        var x = event.clientX, y = event.clientY,
        element = document.elementFromPoint(x, y);
        element.innerHTML = "<span class='refcolumn'><span class='refcolumn'style='background-color:#CCFFCC;'>##</span></span>" + element.innerHTML;
        window.ondblclick = null;
    }
window.ondblclick = get_current_element;
