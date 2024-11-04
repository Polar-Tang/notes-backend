https://portswigger.net/web-security/logic-flaws#what-are-business-logic-vulnerabilities

*Business logic in an application refers to the underlying rules and processes that govern how the application operates based on its intended purpose.* it's not merely related to bussiness, it may also be called: "application logic vulnerabilities" or simply "logic flaws".

Business logic flaw are implementation of an application that allow an attacker to alicit unintended behavior. This flaws are indeed input or altering of certains functionalities that the application web wasn't expecting, the main cause is that the developers doesn't expect the user to do such unpredictable actions.. This vulnerability is different, even every case could be unique and require deep understanding of the intended workflow so usually it's something really difficult to detect and that's because it's a great target for bug hunters.
So bussiness logic flaw vulnerabiltyies are basically an unexpected measures on the app, for **example**: *if an e-commerce platform doesn’t verify payment completion before processing an order, an attacker could exploit this gap to “purchase” items without payment.*
**More examples of Business Logic Vulnerabilities**

- **Skipping Workflow Steps**: For instance, if an application allows for an "add to cart" action without confirming payment, attackers might avoid payment steps entirely.
- **Unauthorized Modifications**: Lack of checks on critical parameters might let attackers modify prices, discounts, or quantities in an online store.
- **Nonsensical Input Handling**: Poor validation might allow nonsensical inputs that lead to undesired behavior, like setting negative prices, which might affect inventory, reporting, or financial systems.

Observe the application workflow, like [[lab-logic-flaws-excessive-trust-in-client-side-controls]]

And the causes are mostly:
- **Developers trust user input** thinking they will be interact through the UI