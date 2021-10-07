function fn() {
  const win = window;
  const winParent = win.parent;
  const winParentDocument = winParent.document;

  console.log('call winParentDocument.getElementById() within', name);
  const iframe = winParentDocument.getElementById('deadlock-iframe');

  const iframeWin = iframe.contentWindow;

  console.log('iframeWin.val', iframeWin.val);

  return;
}

window.fn = fn;
window.val = 88;
