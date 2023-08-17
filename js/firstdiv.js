// ----------------------------bold----------------------------
document.getElementById("bold").addEventListener('click', function(){
    const textArea = document.getElementById("text-area");
    if (textArea.style.fontWeight === "bold") {
        textArea.style.fontWeight = "normal";
    } else {
        textArea.style.fontWeight = "bold";
    }
    
})

// ----------------------------italic---------------------------
document.getElementById("italic").addEventListener('click', function(){
    const textArea = document.getElementById("text-area");
    if (textArea.style.fontStyle === "italic") {
        textArea.style.fontStyle = "normal";
    } else {
        textArea.style.fontStyle = "italic";
    }
    
})


// ----------------------------underline--------------------------
document.getElementById("underline").addEventListener('click', function(){
    const textArea = document.getElementById("text-area");
    if (textArea.style.textDecoration === "underline") {
        textArea.style.textDecoration = "none";
    } else {
        textArea.style.textDecoration = "underline";
    }
    
})

// ----------------------------text-left--------------------------
document.getElementById("left").addEventListener('click', function(){
    const textArea = document.getElementById("text-area");
    if (textArea.style.textAlign === "left") {
        textArea.style.textAlign = "none";
    } else {
        textArea.style.textAlign = "left";
    }
    
})
// ----------------------------text-center--------------------------
document.getElementById("center").addEventListener('click', function(){
    const textArea = document.getElementById("text-area");
    if (textArea.style.textAlign === "center") {
        textArea.style.textAlign = "left";
    } else {
        textArea.style.textAlign = "center";
    }
    
})

// ----------------------------text-right--------------------------
document.getElementById("right").addEventListener('click', function(){
    const textArea = document.getElementById("text-area");
    if (textArea.style.textAlign === "right") {
        textArea.style.textAlign = "left";
    } else {
        textArea.style.textAlign = "right";
    }
    
})

// ----------------------------font-size--------------------------
document.getElementById("font-size").addEventListener('input', function(){
    const textArea = document.getElementById("text-area");
    const fontSize = this.value + "px"
    textArea.style.fontSize = fontSize;
})

// ----------------------------upper--------------------------
document.getElementById("upper-lower").addEventListener('click', function(){
    const textArea = document.getElementById("text-area");
    const text = textArea.value;

    // Toggle uppercase and lowercase
    if (text === text.toUpperCase()) {
        textArea.value = text.toLowerCase();
    } else {
        textArea.value = text.toUpperCase();
    }
});

// ----------------------------color--------------------------
document.getElementById("color").addEventListener('input', function(){
    const textArea = document.getElementById("text-area");
    const textColor = this.value;
    
    if (textArea.value !== '') {
        textArea.style.color = textColor;
    } else {
        textArea.style.color = 'black';
    }
});

