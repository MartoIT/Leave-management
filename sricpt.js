

function removeRow(e){
    let target = e.currentTarget;
    let row = target.parentNode.parentNode;
    let parent = target.parentNode.parentNode.parentNode;
    parent.removeChild(row)
  
}