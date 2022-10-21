# Shopping List Interview Challenge

This project is a simple shopping list web app capable of adding, editing, and deleting items.
The project is built with redux but there is no backend so a refresh will reset all items.
It was built according to a design mockup as part of a technical frontend interview challenge.

## Home Screen
This is the place where all items are displayed.
Each item contains a checkbox to mark an item as complete, an edit icon to make changes to the item, and a delete icon to remove the item from state.

### Default Home Screen
<p align=center>
<kbd>
<img src="https://user-images.githubusercontent.com/61333246/197109070-68ff12d5-88ba-472f-8f9c-c063a1f5cfc4.png" alt="default home screen" width="800"/>
</kbd>
</p>

### Home Screen With Items
<p align=center>
<kbd>
<img src="https://user-images.githubusercontent.com/61333246/197109592-d9a4a153-cc30-45be-9aaf-8f3ca1780229.png" alt="default home screen" width="800"/>
</kbd>
</p>

## Add Items
To add items, simply click the "Add Item" button on the home screen. The following form will appear:
<p align=center>
<kbd>
<img src="https://user-images.githubusercontent.com/61333246/197109890-c4498338-b1ff-4958-9af1-ba2db81ce67a.png" alt="default home screen" width="800"/>
</kbd>
</p>

Make sure to fill out all of the fields. An error message will appear if you try to submit with empty inputs.

## Edit Items
To edit an item, simply click the associated pencil icon. The following form will appear pre-populated with the item data already stored in state. Note the "Purchased" checkbox on this form that allows the user to mark the item as purchased.
<p align=center>
<kbd>
<img src="https://user-images.githubusercontent.com/61333246/197110196-dba7e7c7-1fd1-4d0d-9985-7bbbf6fd47eb.png" alt="default home screen" width="800"/>
</kbd>

## Delete Items
To delete an item, click the associated trash can icon. A pop up dialog will appear making the user confirm the delete action.
<p align=center>
<kbd>
<img src="https://user-images.githubusercontent.com/61333246/197110482-faab9658-8d3c-4b99-b15a-6fa554372d98.png" alt="default home screen" width="800"/>
</kbd>
