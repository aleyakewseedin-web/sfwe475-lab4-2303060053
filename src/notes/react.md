1-what is the difference between title (a prop) and done (now state)? Why can TaskCard change one but not the other?
title is a property that belongs to parent which is in App. whenevr the function is called whatever value passed in title is passed to child which is taskcard
'done' is also a prop whose initial value is  rendered from parent in 'App' but then is updated 'setdone' updates it whenever 'checkbox' is changed so no longer hold value from parent 

TaskCard can not change a prop since is passed from parent unless it uses 'usestate' so value is saved between renders

2- explain in your own words why using the map() callback's array index (e.g.
key={index}) instead of task.id is risky if the list can be reordered or filtered.

3- when removing the onChange handler from NewTaskList.tsx 
i was not able to type or delete what was written on the box in the UI in the browser 