const dummyData =[
    {
      "id": 1,
      "question": "What is Selenium?",
      "answer": "Selenium is an open-source framework primarily used for automating web applications' testing. It provides a way to perform interactions with web browsers and automate browser-based tasks. It allows testers and developers to write scripts in various programming languages (such as Java, Python, C#) to automate the testing process."
    },
    {
      "id": 2,
      "question": "What are the components of Selenium Suite?",
      "answer": "The Selenium Suite consists of three main components: Selenium WebDriver, Selenium IDE, and Selenium Grid. WebDriver provides a programming interface for interacting with web browsers, IDE is a record-and-playback tool, and Grid allows parallel test execution."
    },
    {
      "id": 3,
      "question": "Explain the difference between findElement() and findElements() in Selenium WebDriver.",
      "answer": "findElement() returns the first web element that matches the selector criteria. If not found, it throws an exception. findElements() returns a list of matching elements. If none are found, it returns an empty list."
    },
    {
      "id": 4,
      "question": "What is the difference between Absolute XPath and Relative XPath?",
      "answer": "Absolute XPath uses the complete path from the root element, starting with a forward slash. Relative XPath is shorter and based on the current or nearby elements, making it less prone to structure changes."
    },
    {
      "id": 5,
      "question": "How do you handle dynamic elements in Selenium WebDriver?",
      "answer": "Dynamic elements with changing attributes can be handled by using XPath functions, CSS selectors based on attributes, or explicit waits to ensure the element is present before interaction."
    },
    {
      "id": 6,
      "question": "Explain the concept of implicit and explicit waits in Selenium.",
      "answer": "Implicit Wait sets a global timeout for elements to appear. Explicit Wait waits for specific conditions to be met using the ExpectedConditions class before proceeding with test execution."
    },
    {
      "id": 7,
      "question": "What is Selenium WebDriver's WebDriverWait class used for?",
      "answer": "WebDriverWait is used for waiting until a specific condition (Expected Condition) is met. It's often used with explicit waits to handle synchronization issues and dynamic web elements."
    },
    {
      "id": 8,
      "question": "How can you perform mouse hover actions using Selenium WebDriver?",
      "answer": "Mouse hover actions can be performed using the Actions class. For example: actions.moveToElement(elementToHover).build().perform();"
    },
    {
      "id": 9,
      "question": "What is Page Object Model (POM) in Selenium, and why is it used?",
      "answer": "Page Object Model (POM) is a design pattern that separates UI elements from test logic. It improves code reusability, maintenance, and test readability by creating an object repository for each page of a web application."
    },
    {
      "id": 10,
      "question": "How can you handle alerts and pop-up dialogs in Selenium WebDriver?",
      "answer": "Alerts and pop-up dialogs can be handled using the Alert class. For example, alert.accept() to accept an alert and alert.dismiss() to dismiss it."
    },
    {
      "id": 11,
      "question": "Explain the difference between findElement() and findElements() in Selenium WebDriver.",
      "answer": "findElement() returns the first matching web element. If not found, it throws an exception. findElements() returns a list of matching elements. If none are found, it returns an empty list."
    },
    {
      "id": 12,
      "question": "What is the use of DesiredCapabilities in Selenium WebDriver?",
      "answer": "DesiredCapabilities is used to set properties for the WebDriver instance, such as browser name, version, and platform. It's commonly used to define the desired browser configuration for testing."
    },
    {
      "id": 13,
      "question": "Explain the concept of WebDriver Waits in Selenium.",
      "answer": "WebDriver Waits are used to make WebDriver wait for a certain condition to be met before proceeding with test execution. They help in handling synchronization issues and waiting for dynamic elements to appear."
    },
    {
      "id": 14,
      "question": "What is the difference between close() and quit() methods in Selenium WebDriver?",
      "answer": "close() method closes the current browser window. quit() method closes all browser windows associated with the WebDriver instance and terminates the WebDriver session."
    },
    {
      "id": 15,
      "question": "How can you handle frames in Selenium WebDriver?",
      "answer": "You can switch to a frame using the switchTo().frame() method. To switch back to the main content, you can use switchTo().defaultContent()."
    },
    {
      "id": 16,
      "question": "What is the difference between isSelected() and isEnabled() methods?",
      "answer": "isSelected() is used to check if a checkbox or radio button is selected. isEnabled() is used to check if an element is enabled and interactable."
    },
    {
      "id": 17,
      "question": "What is WebDriverManager in Selenium?",
      "answer": "WebDriverManager is a Java library that automates the management of WebDriver binaries (like chromedriver, geckodriver) required by Selenium. It simplifies the process of setting up WebDriver executables."
    },
    {
      "id": 18,
      "question": "How can you handle multiple windows in Selenium WebDriver?",
      "answer": "You can use the getWindowHandles() method to get a set of window handles. Then, you can switch between windows using the switchTo().window() method."
    },
    {
      "id": 19,
      "question": "What is the purpose of @FindBy annotation in Page Object Model?",
      "answer": "@FindBy annotation is used to locate WebElements in Page Object Model classes. It helps in keeping the element locators separate from the test logic and provides a cleaner structure."
    },
    {
      "id": 20,
      "question": "How can you perform keyboard actions in Selenium WebDriver?",
      "answer": "You can use the Actions class to perform keyboard actions. For example, actions.sendKeys(Keys.ENTER).build().perform(); to simulate pressing the Enter key."
    },
    {
      "id": 21,
      "question": "What is the role of a WebDriver in Selenium?",
      "answer": "A WebDriver is the core component of Selenium that interacts with browsers. It provides a programming interface for automating browser actions and controlling browser sessions."
    },
    {
      "id": 22,
      "question": "How can you simulate right-click (context menu) actions in Selenium WebDriver?",
      "answer": "You can use the Actions class to perform context menu actions. For example, actions.contextClick(element).build().perform(); to simulate right-clicking on an element."
    },
    {
      "id": 23,
      "question": "What is the use of the get() method in Selenium WebDriver?",
      "answer": "The get() method is used to navigate to a specific URL in the browser. It's commonly used to open a web page before starting the testing process."
    },
    {
      "id": 24,
      "question": "What is the purpose of the navigate() interface in Selenium WebDriver?",
      "answer": "The navigate() interface provides methods like navigate().to(), navigate().back(), and navigate().refresh() for navigating to URLs, going back to the previous page, and refreshing the current page."
    },
    {
      "id": 25,
      "question": "How can you perform drag-and-drop actions using Selenium WebDriver?",
      "answer": "You can use the Actions class to perform drag-and-drop actions. For example, actions.dragAndDrop(source, target).build().perform(); to drag an element and drop it onto another element."
    }
  ]
  
  ;
  
  export default dummyData;
  