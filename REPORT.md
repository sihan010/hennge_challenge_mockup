## Report

**Running the application:**
The application was built with react.js so your system needs to have node.js installed.

- Go to project directory and run "npm install" command to install dependencies
- Run "npm start" to start the project
- At first, the application shows all 500 emails
- Use the Date search bar to select a Date Range
- Click the search icon to filter the emails
- All the emails are dated from September 1, 2020 to September 24, 2020. If you select a date range before or after those dates, application will fall back to the default UI

**Library Choices:**
Core frontend library used in this project is React.JS
Besides I have used 3 more libraries -

- Material UI:
  Material UI is used as the core component library. The project could be developed with vanilla HTML and CSS. But I have chosen to use Material UI for the sake of saving time and maintain design consistency across the project. Material UI theming and styling system, Main CSS to override existing styles were also used.
- Material UI Date Picker:
  This library is a part of Material UI but comes as different package. It features customizable UI while maintaining Material UI design philosophy.
- Moment:
  This library was used to parse and format time related information. Again, JavaScript Date library could be used but Moment has lot more features and is supported by Material UI Date Picker.

**Development Process:**
The project has 3 main UI components. SearchBar, EmailCount and EmailTable. All these components are used in a Route component named Home. EmailTable component uses EmailTableRow component to render each row. React functional components and hooks are used for all the components. Context API or any State management library was not used hence it is a simple application.

- Built a Table for large screens with static data and given image resources
- Built another table design for small screens
- Implemented Pagination
- Added SearchBar to filter table data
- Added Count component to show filtered data count
- Added Notification Snackbar
- Added some colors, changed font, with final UI touches
