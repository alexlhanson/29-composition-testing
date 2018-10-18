# React To-Do List
===

## Description 
- Uses React to create an Application for making To-Dos
  - Application has landing page and dashboard routes in navbar
    - `/` route for `Landing` component
    - `/dashboard` for `Dashboard` component
  - Dashboard component has child components for:
    - `Note-Form` which adds new notes
    - `Note-List` which displays notes and has a child:
      - `Note-Item` which creates list items for each note

## Setup
- Fork/clone git repository and run npm install in root directory
- Use `npm run watch` to run webpack in order to setup local environment
- For build version run `npm run build`

## Tools Used
- React
- Node
- Webpack
- Superagent
- Babel

## Requirements  

#### Feature Tasks 
Refactor and add the following components 

###### NoteUpdateForm 
Create a NoteUpdateForm component that inherits a note through props and onSubmit is able to update the App's state with an updated note.

###### Refactor the NoteItem to have the following behavior
If the user double clicks on the notes content it should switch to the Edit View  
* Default view  
  * Display the notes content and a delete button
  * Display a delete button that will remove the Note from the application's state
* Edit View 
  * Show the NoteUpdateForm and a Cancel Button
    * onSubmit or click of the cancel button in NoteUpdateForm it should switch back to the default view

###### App Component Tree
Your components should be nested in the following layout  
``` 
App
  NoteCreateForm
  NoteList
    NoteItem
      NoteUpdateForm
```

#### Test
* Test NoteCreateForm
  * Test your onChange handler
  * Test your onSubmit handler
* Test NoteItem
  * Test the NoteItem's ability to remove a note from the App's state
* Test NoteUpdateForm
  * Test the NoteUpdatesForm's ability to update a note in the App's state