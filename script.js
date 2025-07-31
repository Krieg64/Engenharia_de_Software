const btn = document.getElementById("botao");
    let offsetX, offsetY, dragging = false;

    btn.addEventListener("mousedown", e => {
      dragging = true;
      offsetX = e.clientX - btn.offsetLeft;
      offsetY = e.clientY - btn.offsetTop;
    });

    document.addEventListener("mouseup", () => {
      dragging = false;

      // Efeito "ímã" nas bordas
      const margin = 40;
      const screenW = window.innerWidth;
      const screenH = window.innerHeight;

      const btnW = btn.offsetWidth;
      const btnH = btn.offsetHeight;

      let newLeft = btn.offsetLeft;
      let newTop = btn.offsetTop;

      if (newLeft < margin) newLeft = 1.5;
      if (newLeft + btnW > screenW - margin) newLeft = screenW - btnW;
      if (newTop < margin) newTop = 1.5;
      if (newTop + btnH > screenH - margin) newTop = screenH - btnH;

      btn.style.left = newLeft + "px";
      btn.style.top = newTop + "px";
    });

    document.addEventListener("mousemove", e => {
      if (dragging) {
        btn.style.left = (e.clientX - offsetX) + "px";
        btn.style.top = (e.clientY - offsetY) + "px";
      }
    });

    // Impede seleção de texto enquanto arrasta
    document.addEventListener("dragstart", e => e.preventDefault());
