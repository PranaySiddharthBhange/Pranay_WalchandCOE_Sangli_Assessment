## Overview
The `FAQComponent` is a React component designed to display frequently asked questions along with their answers. It features collapsible sections that expand when clicked, providing a user-friendly interface for exploring common queries.

## Functionality

The component utilizes React's state management (`useState` hook) to track which FAQ item is currently active. When a question is clicked, it toggles its corresponding answer to expand or collapse. This interactive behavior enhances user experience by allowing them to quickly find information without overwhelming them with all answers at once.

### State Management

The `activeIndex` state variable in `FAQComponent` manages the index of the currently expanded FAQ item. Clicking on a question toggles this index:
- If the clicked question is already active (`activeIndex === index`), it collapses the answer.
- Otherwise, it expands the answer corresponding to the clicked question.

## CSS Styling

The styling (`FAQComponent.css`) ensures the component is visually appealing and user-friendly across different screen sizes:

### FAQContainer (`faq-container`)
- Flexbox layout (`display: flex`) ensures proper alignment and responsiveness.
- Maximum width (`max-width: 1200px`) limits the component's width for better readability.
- Media query (`@media (max-width: 768px)`) adjusts the layout to stack items vertically on smaller screens.

### Panels (`left-panel` and `right-panel`)
- `left-panel` displays contact information and utilizes flexbox for layout (`flex: 1`).
- `right-panel` contains FAQ items (`flex: 2`) and provides ample space for questions and answers.

### FAQ Items and Interaction
- Each FAQ item (`faq-item`) is structured with clickable questions (`faq-question`) and expandable answers (`faq-answer`).
- CSS ensures clear separation between questions and answers with appropriate padding, background colors, and box shadows for depth.
