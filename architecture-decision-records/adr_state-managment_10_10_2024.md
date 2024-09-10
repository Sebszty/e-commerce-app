# State managment

* **Issue**: Storage of cart state and product information

* **Decision**: Context API: for cart state management. Zustand: for managing the state of product lists and categories

* **Status**: Approved.

* **Constraints**: We see limitations with the Context API and maintaining state in localStorage. At a larger scale and with rapid UI interactions, this solution will not be optimal, and the entire state and CRUD operations should be moved to the server layer.

* **Argument**: The Context API is used to hold state that occurs globally, so the shopping cart is an ideal example. On the other hand, products and categories can exist in larger quantities and change dynamically, hence Zustand was chosen. Additionally, Zustand provides greater capabilities in state management.

* **Implications**: 
     # 1/ Cart:
     - Using Context API will provide easy access to cart state throughout the application.
     - May require additional optimization with a large number of renderings.

     # 2/ Products and categories:
     - Zustand will provide efficient state management for potentially large amounts of data.
     - Easier management of complex state updates.

     # 3/ Future scaling:
     - As the application grows, it may be necessary to move state logic to the server.
     - Performance should be monitored, especially for the cart stored in Context API.

* **Related principles**:
     # 1/ Redux: Rejected due to greater configuration complexity compared to Zustand.
     # 2/ MobX: Considered, but Zustand was chosen due to simpler implementation and smaller size.
     # 3/ Storing all state in Context API: Rejected due to potential performance issues with large amounts of data.

* **References**:
     # 1/ React Context API Documentation
     # 2/ Zustand GitHub Repository
     # 3/ Comparison of State Management Solutions in React

* **Related principles**: -.

* **Notes**:  -
