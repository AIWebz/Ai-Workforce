const employees = [
  {name:"AI Website Builder", task:"Creating page structure"},
  {name:"AI Designer", task:"Designing layout"},
  {name:"AI Content Writer", task:"Writing homepage content"},
  {name:"AI SEO Specialist", task:"Optimizing metadata"},
  {name:"AI Marketing Assistant", task:"Creating landing pages"},
  {name:"AI Analytics Manager", task:"Tracking traffic"},
  {name:"AI Support Agent", task:"Handling customer chat"}
];

function startWorkforce(){
  const feed = document.getElementById("activityFeed");
  employees.forEach(emp => {
    const item = document.createElement("div");
    item.innerHTML = "<b>"+emp.name+"</b>: "+emp.task;
    feed.appendChild(item);
  });
}

startWorkforce();