# emberJS-dynamicUpdatingComputedProperties
Computed properties detect the changes made on the properties and dynamically update the computed property when they are called 
by using the set() method.

open the app.js file and add below line at top of the file −

import dynamicupdating from './dynamicupdating';
Where, dynamicupdating is a name of the file specified as "dynamicupdating.js" and created under the "app" folder.

Next call the inherited "dynamicupdating" at the bottom, before the export. It executes the dynamicupdating function which is 
created in the dynamicupdating.js file −

dynamicupdating();

Only dynamicupdating.js file included in the repository
