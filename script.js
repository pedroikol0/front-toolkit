function loadTool(toolName) {
    const toolContent = document.getElementById('tool-content');
    toolContent.style.display = 'block';
  
    fetch(`${toolName}.html`)
      .then(res => res.text())
      .then(html => {
        toolContent.innerHTML = html;
      })
      .catch(err => {
        toolContent.innerHTML = `<p>Erro ao carregar ferramenta: ${toolName}</p>`;
        console.error(err);
      });
  }
  