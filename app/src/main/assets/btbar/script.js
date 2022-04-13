const svg = document.querySelector('svg'),
      ops = document.querySelectorAll('.option__padding'),
      connectors = document.querySelectorAll('.connector'),
      findOldIndex = () => parseInt(svg.classList[0].slice(-1)),
      findNextConnector = (oldIx, newIx) => {
        let ret ='connector';
        ret += oldIx > newIx ?
          `${newIx}${oldIx}` : `${oldIx}${newIx}`
        return ret;
      };
ops.forEach((op, i) => {
  op.addEventListener('click', function(e) {
    const newIndex = i + 1, oldIndex = findOldIndex();
    newKlass = `group${newIndex}`,
      nextConnector = findNextConnector(oldIndex, newIndex);
    // change?
    if (!svg.classList.contains(newKlass)) {
      // clear all selected groups
      ops.forEach((_, j) => {
        svg.classList.remove(`group${j + 1}`)
      });
      // clear all displayed connector
      connectors.forEach((connector) => {
        connector.style.visibility = 'hidden';

        if (connector.classList.contains(nextConnector)) {
          connector.style.visibility = 'visible';
        }
      });

      // Which connector to show?
      svg.classList.toggle(newKlass);
    }
  });
});