function get_current_element(event){
        var x = event.clientX, y = event.clientY,
        element = document.elementFromPoint(x, y);
        element.innerHTML = "<p><span class='refcolumn'><span class='refcolumn' style='background-color:#CCFFCC;'></span></span></p>"
        window.ondblclick = null;
    }
window.ondblclick = get_current_element;
