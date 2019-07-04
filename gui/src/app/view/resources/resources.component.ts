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
   
subtitle : `The software constructs all or part of an SQL command using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the intended SQL command when it is sent to a downstream component.
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
      // {
      //   title: 'A2 : Broken Authentication',
      //   subtitle: `Attackers have access to hundreds of
      // millions of valid username and
      // password combinations for credential
      // stuffing, default administrative
      // account lists, automated brute force,
      // and dictionary attack tools. Session
      // management attacks are well
      // understood, particularly in relation to
      // unexpired session tokens.`,
      //   isVulnerablePara: `Confirmation of the user's identity, authentication, and session
      // management are critical to protect against authentication related
      // attacks.
      // There may be authentication weaknesses if the application:
      // •
      // Permits automated attacks such as credential stuffing , where
      // the attacker has a list of valid usernames and passwords.
      // •
      // Permits brute force or other automated attacks.
      // •
      // Permits default, weak, or well known passwords, such as
      // "Password1" or "admin/
      // •
      // Uses weak or ineffective credential recovery and forgot
      // password processes, such as "knowledge based answers",
      // which cannot be made safe.
      // •
      // Uses plain text, encrypted, or weakly hashed passwords (see
      // A3:2017 Sensitive Data Exposure
      // •
      // Has missing or ineffective multi factor authentication.
      // •
      // Exposes Session IDs in the URL (e.g., URL rewriting).
      // •
      // Does not rotate Session IDs after successful login.
      // •
      // Does not properly invalidate Session IDs. User sessions or
      // authentication tokens (particularly single sign on (SSO) tokens)
      // aren’t properly invalidated during logout or a period of inactivity.`,
      //   prevention: `•
      // Where possible, implement multi factor authentication to
      // prevent automated, credential stuffing, brute force, and stolen
      // credential re use attacks.
      // •
      // Do not ship or deploy with any default credentials, particularly
      // for admin users.
      // •
      // Implement weak password checks, such as testing new or
      // changed passwords against a list of the top 10000 worst
      // passwords
      // •
      // Align password length, complexity and rotation policies with
      // NIST 800 63 B's guidelines in section 5.1.1 for Memorized
      // Secrets or other modern, evidence based password policies.
      // •
      // Ensure registration, credential recovery, and API pathways are
      // hardened against account enumeration attacks by using the
      // same messages for all outcomes.
      // •
      // Limit or increasingly delay failed login attempts. Log all failures
      // and alert administrators when credential stuffing, brute force, or
      // other attacks are detected.
      // •
      // Use a server side, secure, built in session manager that
      // generates a new random session ID with high entropy after
      // login. Session IDs should not be in the URL, be securely stored
      // and invalidated after logout, idle, and absolute timeouts`,
    
      //   example: `Scenario #1
      // : Credential stuffing , the use of lists of known
      // passwords , is a common attack. If an application does not
      // implement automated threat or credential stuffing protections, the
      // application can be used as a password oracle to determine if the
      // credentials are valid.
      // Scenario #2
      // : Most authentication attacks occur due to the
      // continued use of passwords as a sole factor. Once considered
      // best practices, password rotation and complexity requirements
      // are viewed as encouraging users to use, and reuse, weak
      // passwords. Organizations are recommended to stop these
      // practices per NIST 800 63 and use multi factor authentication.
      // Scenario #3
      // : Application session timeouts aren’t set properly. A
      // user uses a public computer to access an application. Instead of
      // selecting “logout” the user simply closes the browser tab and
      // walks away. An attacker uses the same browser an hour later,
      // and the user is still authenticated.`,
    
      // },
      // {
      //   title: 'A3 : Sensitive Data Exposure',
      //   subtitle: `Rather than directly attacking crypto,
      // attackers steal keys, execute man in
      // the middle attacks, or steal clear text
      // data off the server, while in transit, or
      // from the user’s client, e.g. browser. A
      // manual attack is generally required.
      // Previously retrieved password
      // databases could be brute forced by
      // Graphics Processing Units (GPUs).`,
      //   isVulnerablePara: `The first thing is to determine the protection needs of data in
      // transit and at rest. For example, passwords, credit card numbers,
      // health records, personal information and business secrets
      // require extra protection, particularly if that data falls under
      // privacy laws, e.g. EU's General Data Protection Regulation
      // (GDPR), or regulations, e.g. financial data protection such as
      // PCI Data Security Standard (PCI DSS). For all such data:
      // •
      // Is any data transmitted in clear text? This concerns protocols
      // such as HTTP, SMTP, and FTP. External internet traffic is
      // especially dangerous. Verify all internal traffic e.g. between
      // load balancers, web servers, or back end systems.
      // •
      // Is sensitive data stored in clear text, including backups?
      // •
      // Are any old or weak cryptographic algorithms used either by
      // default or in older code?
      // •
      // Are default crypto keys in use, weak crypto keys generated or
      // re used, or is proper key management or rotation missing?
      // •
      // Is encryption not enforced, e.g. are any user agent (browser)
      // security directives or headers missing?
      // •
      // Does the user agent (e.g. app, mail client) not verify if the
      // received server certificate is valid?
      // See ASVS
      // Crypto (V7) V7), Data Prot (V9) and SSL/TLS (V10)`,
      //   prevention: `Do the following, at a minimum, and consult the references:
      // •
      // Classify data processed, stored, or transmitted by an
      // application. Identify which data is sensitive according to privacy
      // laws, regulatory requirements, or business needs.
      // •
      // Apply controls as per the classification.
      // •
      // Don’t store sensitive data unnecessarily. Discard it as soon as
      // possible or use PCI DSS compliant tokenization or even
      // truncation. Data that is not retained cannot be stolen.
      // •
      // Make sure to encrypt all sensitive data at rest.
      // •
      // Ensure up to date and strong standard algorithms, protocols,
      // and keys are in place; use proper key management.
      // •
      // Encrypt all data in transit with secure protocols such as TLS
      // with perfect forward secrecy (PFS) ciphers, cipher prioritization
      // by the server, and secure parameters. Enforce encryption
      // using directives like HTTP Strict Transport Security ( HSTS
      // •
      // Disable caching for responses that contain sensitive data.
      // •
      // Store passwords using strong adaptive and salted hashing
      // functions with a work factor (delay factor), such as Argon2 ,
      // scrypt , bcrypt , or PBKDF2
      // •
      // Verify independently the effectiveness of configuration and
      // settings.`,
    
      //   example: `Scenario #1
      // : An application encrypts credit card numbers in a
      // database using automatic database encryption. However, this
      // data is automatically decrypted when retrieved, allowing an SQL
      // injection flaw to retrieve credit card numbers in clear text.
      // Scenario #2
      // : A site doesn't use or enforce TLS for all pages or
      // supports weak encryption. An attacker monitors network traffic
      // (e.g. at an insecure wireless network), downgrades connections
      // from HTTPS to HTTP, intercepts requests, and steals the user's
      // session cookie. The attacker then replays this cookie and hijacks
      // the user's (authenticated) session, accessing or modifying the
      // user's private data. Instead of the above they could alter all
      // transported data, e.g. the recipient of a money transfer.
      // Scenario #3
      // : The password database uses unsalted or simple
      // hashes to store everyone's passwords. A file upload flaw allows
      // an attacker to retrieve the password database. All the unsalted
      // hashes can be exposed with a rainbow table of pre calculated
      // hashes. Hashes generated by simple or fast hash functions may
      // be cracked by GPUs, even if they were salted.`,
    
      // },
      // {
      //   title: 'A4 : XML External Entities (XXE)',
      //   subtitle: `Attackers can exploit vulnerable XML
      // processors if they can upload XML or
      // include hostile content in an XML
      // document, exploiting vulnerable code,
      // dependencies or integrations .`,
      //   isVulnerablePara: `Applications and in particular XML
      // based web services or
      // downstream integrations might be vulnerable to attack if:
      // •
      // The application accepts XML directly or XML uploads,
      // especially from untrusted sources, or inserts untrusted data into
      // XML documents, which is then parsed by an XML processor.
      // •
      // Any of the XML processors in the application or SOAP based
      // web services has document type definitions (DTDs) enabled.
      // As the exact mechanism for disabling DTD processing varies
      // by processor, it is good practice to consult a reference such as
      // the OWASP Cheat Sheet 'XXE Prevention’ Prevention’.
      // •
      // If your application uses SAML for identity processing within
      // federated security or single sign on (SSO) purposes. SAML
      // uses XML for identity assertions, and may be vulnerable.
      // •
      // If the application uses SOAP prior to version 1.2, it is likely
      // susceptible to XXE attacks if XML entities are being passed to
      // the SOAP framework.
      // •
      // Being vulnerable to XXE attacks likely means that the
      // application is vulnerable to denial of service attacks including
      // the Billion Laughs attack.`,
      //   prevention: `Developer training is essential to identify and mitigate XXE.
      // Besides that, preventing XXE requires:
      // •
      // Whenever possible, use less complex data formats such as
      // JSON , and avoiding serialization of sensitive data.
      // •
      // Patch or upgrade all XML processors and libraries in use by
      // the application or on the underlying operating system . Use
      // dependency checkers. Update SOAP to SOAP 1.2 or higher.
      // •
      // Disable XML external entity and DTD processing in all XML
      // parsers in the application, as per the OWASP Cheat Sheet
      // 'XXE Prevention'.
      // •
      // Implement positive ("whitelisting") server side input validation,
      // filtering, or sanitization to prevent hostile data within XML
      // documents, headers, or nodes.
      // •
      // Verify that XML or XSL file upload functionality validates
      // incoming XML using XSD validation or similar.
      // •
      // SAST tools can help detect XXE in source code, although
      // manual code review is the best alternative in large, complex
      // applications with many integrations.
      // If these controls are not possible, consider using virtual
      // patching, API security gateways, or Web Application Firewalls
      // (WAFs) to detect, monitor, and block XXE`,
    
      //   example: `Numerous public XXE issues have been discovered, including
      // attacking embedded devices. XXE occurs in a lot of unexpected
      // places, including deeply nested dependencies. The easiest way
      // is to upload a malicious XML file, if accepted:
      // Scenario #1
      // : The attacker attempts to extract data from the
      // server:
      // <?xml version="1.0" encoding="ISO
      // 8859 1"?>
      // <!DOCTYPE foo
      // <!ELEMENT foo ANY
      // <!ENTITY xxe SYSTEM "file:///etc/passwd" >]>
      // < xxe ;</
      // Scenario #2
      // : An attacker probes the server's private network by
      // changing the above ENTITY line to:
      // <!ENTITY
      // xxe SYSTEM "https://192.168.1.1/private" >]>
      // Scenario #3
      // : An attacker attempts a denial of service attack by
      // including a potentially endless file:
      // <!ENTITY
      // xxe SYSTEM "file:///dev/random" >]>`,
    
      // },
      // {
      //   title: 'A5 : Broken Access Control',
      //   subtitle: `Exploitation of access control is a
      // core skill of attackers. SAST and
      // DAST tools can detect the absence of
      // access control but cannot verify if it is
      // functional when it is present. Access
      // control is detectable using manual
      // means, or possibly through
      // automation for the absence of access
      // controls in certain frameworks.`,
      //   isVulnerablePara: `Access control enforces policy such that users cannot act
      // outside of their intended permissions. Failures typically lead to
      // unauthorized information disclosure, modification or destruction
      // of all data, or performing a business function outside of the limits
      // of the user. Common access control vulnerabilities include:
      // •
      // Bypassing access control checks by modifying the URL,
      // internal application state, or the HTML page, or simply using a
      // custom API attack tool.
      // •
      // Allowing the primary key to be changed to another users
      // record, permitting viewing or editing someone else's account.
      // •
      // Elevation of privilege. Acting as a user without being logged in,
      // or acting as an admin when logged in as a user.
      // •
      // Metadata manipulation, such as replaying or tampering with a
      // JSON Web Token ( JWT access control token or a cookie or
      // hidden field manipulated to elevate privileges, or abusing JWT
      // invalidation
      // •
      // CORS misconfiguration allows unauthorized API access.
      // •
      // Force browsing to authenticated pages as an unauthenticated
      // user or to privileged pages as a standard user. Accessing API
      // with missing access controls for POST, PUT and DELETE.`,
      //   prevention: `Access control is only effective if enforced in trusted server
      // side
      // code or server less API, where the attacker cannot modify the
      // access control check or metadata.
      // •
      // With the exception of public resources, deny by default.
      // •
      // Implement access control mechanisms once and re use them
      // throughout the application, including minimizing CORS usage.
      // •
      // Model access controls should enforce record ownership, rather
      // than accepting that the user can create, read, update, or delete
      // any record.
      // •
      // Unique application business limit requirements should be
      // enforced by domain models.
      // •
      // Disable web server directory listing and ensure file metadata
      // (e.g. .git) and backup files are not present within web
      // •
      // Log access control failures, alert admins when appropriate
      // (e.g. repeated
      // •
      // Rate limit API and controller access to minimize the harm from
      // automated attack tooling.
      // •
      // JWT tokens should be invalidated on the server after logout.
      // Developers and QA staff should include functional access control
      // unit and integration tests.`,
    
      //   example: `Scenario #1
      // : The application uses unverified data in a SQL call
      // that is accessing account information:
      // pstmt.setString
      // (1, request.getParameter ("
      // ResultSet
      // results = pstmt.executeQuery (
      // An attacker simply modifies the 'acct' parameter in the browser to
      // send whatever account number they want. If not properly
      // verified, the attacker can access any user's account.
      // http://example.com/app/accountInfo?acct=
      // notmyacct
      // Scenario #2
      // : An attacker simply force browses to target URLs.
      // Admin rights are required for access to the admin page.
      // http://example.com/app/getappInfo
      // http://example.com/app/
      // admin_getappInfo
      // If an unauthenticated user can access either page, it’s a flaw. If a
      // non admin can access the admin page, this is a flaw.`,
    
      // },
      // {
      //   title: 'A6 : Security Misconfiguration',
      //   subtitle: `Exploitation of access control is a
      // core skill of attackers. SAST and
      // DAST tools can detect the absence of
      // access control but cannot verify if it is
      // functional when it is present. Access
      // control is detectable using manual
      // means, or possibly through
      // automation for the absence of access
      // controls in certain frameworks.`,
      //   isVulnerablePara: `Access control enforces policy such that users cannot act
      // outside of their intended permissions. Failures typically lead to
      // unauthorized information disclosure, modification or destruction
      // of all data, or performing a business function outside of the limits
      // of the user. Common access control vulnerabilities include:
      // •
      // Bypassing access control checks by modifying the URL,
      // internal application state, or the HTML page, or simply using a
      // custom API attack tool.
      // •
      // Allowing the primary key to be changed to another users
      // record, permitting viewing or editing someone else's account.
      // •
      // Elevation of privilege. Acting as a user without being logged in,
      // or acting as an admin when logged in as a user.
      // •
      // Metadata manipulation, such as replaying or tampering with a
      // JSON Web Token ( JWT access control token or a cookie or
      // hidden field manipulated to elevate privileges, or abusing JWT
      // invalidation
      // •
      // CORS misconfiguration allows unauthorized API access.
      // •
      // Force browsing to authenticated pages as an unauthenticated
      // user or to privileged pages as a standard user. Accessing API
      // with missing access controls for POST, PUT and DELETE.`,
      //   prevention: `Access control is only effective if enforced in trusted server
      // side
      // code or server less API, where the attacker cannot modify the
      // access control check or metadata.
      // •
      // With the exception of public resources, deny by default.
      // •
      // Implement access control mechanisms once and re use them
      // throughout the application, including minimizing CORS usage.
      // •
      // Model access controls should enforce record ownership, rather
      // than accepting that the user can create, read, update, or delete
      // any record.
      // •
      // Unique application business limit requirements should be
      // enforced by domain models.
      // •
      // Disable web server directory listing and ensure file metadata
      // (e.g. .git) and backup files are not present within web
      // •
      // Log access control failures, alert admins when appropriate
      // (e.g. repeated
      // •
      // Rate limit API and controller access to minimize the harm from
      // automated attack tooling.
      // •
      // JWT tokens should be invalidated on the server after logout.
      // Developers and QA staff should include functional access control
      // unit and integration tests.`,
    
      //   example: `Scenario #1
      // : The application uses unverified data in a SQL call
      // that is accessing account information:
      // pstmt.setString
      // (1, request.getParameter ("
      // ResultSet
      // results = pstmt.executeQuery (
      // An attacker simply modifies the 'acct' parameter in the browser to
      // send whatever account number they want. If not properly
      // verified, the attacker can access any user's account.
      // http://example.com/app/accountInfo?acct=
      // notmyacct
      // Scenario #2
      // : An attacker simply force browses to target URLs.
      // Admin rights are required for access to the admin page.
      // http://example.com/app/getappInfo
      // http://example.com/app/
      // admin_getappInfo
      // If an unauthenticated user can access either page, it’s a flaw. If a
      // non admin can access the admin page, this is a flaw.`,
    
      // },
      // {
      //   title: 'A7 : Cross-Site Scripting (XSS)',
      //   subtitle: `Exploitation of access control is a
      // core skill of attackers. SAST and
      // DAST tools can detect the absence of
      // access control but cannot verify if it is
      // functional when it is present. Access
      // control is detectable using manual
      // means, or possibly through
      // automation for the absence of access
      // controls in certain frameworks.`,
      //   isVulnerablePara: `Access control enforces policy such that users cannot act
      // outside of their intended permissions. Failures typically lead to
      // unauthorized information disclosure, modification or destruction
      // of all data, or performing a business function outside of the limits
      // of the user. Common access control vulnerabilities include:
      // •
      // Bypassing access control checks by modifying the URL,
      // internal application state, or the HTML page, or simply using a
      // custom API attack tool.
      // •
      // Allowing the primary key to be changed to another users
      // record, permitting viewing or editing someone else's account.
      // •
      // Elevation of privilege. Acting as a user without being logged in,
      // or acting as an admin when logged in as a user.
      // •
      // Metadata manipulation, such as replaying or tampering with a
      // JSON Web Token ( JWT access control token or a cookie or
      // hidden field manipulated to elevate privileges, or abusing JWT
      // invalidation
      // •
      // CORS misconfiguration allows unauthorized API access.
      // •
      // Force browsing to authenticated pages as an unauthenticated
      // user or to privileged pages as a standard user. Accessing API
      // with missing access controls for POST, PUT and DELETE.`,
      //   prevention: `Access control is only effective if enforced in trusted server
      // side
      // code or server less API, where the attacker cannot modify the
      // access control check or metadata.
      // •
      // With the exception of public resources, deny by default.
      // •
      // Implement access control mechanisms once and re use them
      // throughout the application, including minimizing CORS usage.
      // •
      // Model access controls should enforce record ownership, rather
      // than accepting that the user can create, read, update, or delete
      // any record.
      // •
      // Unique application business limit requirements should be
      // enforced by domain models.
      // •
      // Disable web server directory listing and ensure file metadata
      // (e.g. .git) and backup files are not present within web
      // •
      // Log access control failures, alert admins when appropriate
      // (e.g. repeated
      // •
      // Rate limit API and controller access to minimize the harm from
      // automated attack tooling.
      // •
      // JWT tokens should be invalidated on the server after logout.
      // Developers and QA staff should include functional access control
      // unit and integration tests.`,
    
      //   example: `Scenario #1
      // : The application uses unverified data in a SQL call
      // that is accessing account information:
      // pstmt.setString
      // (1, request.getParameter ("
      // ResultSet
      // results = pstmt.executeQuery (
      // An attacker simply modifies the 'acct' parameter in the browser to
      // send whatever account number they want. If not properly
      // verified, the attacker can access any user's account.
      // http://example.com/app/accountInfo?acct=
      // notmyacct
      // Scenario #2
      // : An attacker simply force browses to target URLs.
      // Admin rights are required for access to the admin page.
      // http://example.com/app/getappInfo
      // http://example.com/app/
      // admin_getappInfo
      // If an unauthenticated user can access either page, it’s a flaw. If a
      // non admin can access the admin page, this is a flaw.`,
    
      // },
      // {
      //   title: 'A8 : Insecure Deserialization',
      //   subtitle: `Exploitation of access control is a
      // core skill of attackers. SAST and
      // DAST tools can detect the absence of
      // access control but cannot verify if it is
      // functional when it is present. Access
      // control is detectable using manual
      // means, or possibly through
      // automation for the absence of access
      // controls in certain frameworks.`,
      //   isVulnerablePara: `Access control enforces policy such that users cannot act
      // outside of their intended permissions. Failures typically lead to
      // unauthorized information disclosure, modification or destruction
      // of all data, or performing a business function outside of the limits
      // of the user. Common access control vulnerabilities include:
      // •
      // Bypassing access control checks by modifying the URL,
      // internal application state, or the HTML page, or simply using a
      // custom API attack tool.
      // •
      // Allowing the primary key to be changed to another users
      // record, permitting viewing or editing someone else's account.
      // •
      // Elevation of privilege. Acting as a user without being logged in,
      // or acting as an admin when logged in as a user.
      // •
      // Metadata manipulation, such as replaying or tampering with a
      // JSON Web Token ( JWT access control token or a cookie or
      // hidden field manipulated to elevate privileges, or abusing JWT
      // invalidation
      // •
      // CORS misconfiguration allows unauthorized API access.
      // •
      // Force browsing to authenticated pages as an unauthenticated
      // user or to privileged pages as a standard user. Accessing API
      // with missing access controls for POST, PUT and DELETE.`,
      //   prevention: `Access control is only effective if enforced in trusted server
      // side
      // code or server less API, where the attacker cannot modify the
      // access control check or metadata.
      // •
      // With the exception of public resources, deny by default.
      // •
      // Implement access control mechanisms once and re use them
      // throughout the application, including minimizing CORS usage.
      // •
      // Model access controls should enforce record ownership, rather
      // than accepting that the user can create, read, update, or delete
      // any record.
      // •
      // Unique application business limit requirements should be
      // enforced by domain models.
      // •
      // Disable web server directory listing and ensure file metadata
      // (e.g. .git) and backup files are not present within web
      // •
      // Log access control failures, alert admins when appropriate
      // (e.g. repeated
      // •
      // Rate limit API and controller access to minimize the harm from
      // automated attack tooling.
      // •
      // JWT tokens should be invalidated on the server after logout.
      // Developers and QA staff should include functional access control
      // unit and integration tests.`,
    
      //   example: `Scenario #1
      // : The application uses unverified data in a SQL call
      // that is accessing account information:
      // pstmt.setString
      // (1, request.getParameter ("
      // ResultSet
      // results = pstmt.executeQuery (
      // An attacker simply modifies the 'acct' parameter in the browser to
      // send whatever account number they want. If not properly
      // verified, the attacker can access any user's account.
      // http://example.com/app/accountInfo?acct=
      // notmyacct
      // Scenario #2
      // : An attacker simply force browses to target URLs.
      // Admin rights are required for access to the admin page.
      // http://example.com/app/getappInfo
      // http://example.com/app/
      // admin_getappInfo
      // If an unauthenticated user can access either page, it’s a flaw. If a
      // non admin can access the admin page, this is a flaw.`,
    
      // },
      // {
      //   title: 'A9 : Using Components with Known Vulnerabilities',
      //   subtitle: `Exploitation of access control is a
      // core skill of attackers. SAST and
      // DAST tools can detect the absence of
      // access control but cannot verify if it is
      // functional when it is present. Access
      // control is detectable using manual
      // means, or possibly through
      // automation for the absence of access
      // controls in certain frameworks.`,
      //   isVulnerablePara: `Access control enforces policy such that users cannot act
      // outside of their intended permissions. Failures typically lead to
      // unauthorized information disclosure, modification or destruction
      // of all data, or performing a business function outside of the limits
      // of the user. Common access control vulnerabilities include:
      // •
      // Bypassing access control checks by modifying the URL,
      // internal application state, or the HTML page, or simply using a
      // custom API attack tool.
      // •
      // Allowing the primary key to be changed to another users
      // record, permitting viewing or editing someone else's account.
      // •
      // Elevation of privilege. Acting as a user without being logged in,
      // or acting as an admin when logged in as a user.
      // •
      // Metadata manipulation, such as replaying or tampering with a
      // JSON Web Token ( JWT access control token or a cookie or
      // hidden field manipulated to elevate privileges, or abusing JWT
      // invalidation
      // •
      // CORS misconfiguration allows unauthorized API access.
      // •
      // Force browsing to authenticated pages as an unauthenticated
      // user or to privileged pages as a standard user. Accessing API
      // with missing access controls for POST, PUT and DELETE.`,
      //   prevention: `Access control is only effective if enforced in trusted server
      // side
      // code or server less API, where the attacker cannot modify the
      // access control check or metadata.
      // •
      // With the exception of public resources, deny by default.
      // •
      // Implement access control mechanisms once and re use them
      // throughout the application, including minimizing CORS usage.
      // •
      // Model access controls should enforce record ownership, rather
      // than accepting that the user can create, read, update, or delete
      // any record.
      // •
      // Unique application business limit requirements should be
      // enforced by domain models.
      // •
      // Disable web server directory listing and ensure file metadata
      // (e.g. .git) and backup files are not present within web
      // •
      // Log access control failures, alert admins when appropriate
      // (e.g. repeated
      // •
      // Rate limit API and controller access to minimize the harm from
      // automated attack tooling.
      // •
      // JWT tokens should be invalidated on the server after logout.
      // Developers and QA staff should include functional access control
      // unit and integration tests.`,
    
      //   example: `Scenario #1
      // : The application uses unverified data in a SQL call
      // that is accessing account information:
      // pstmt.setString
      // (1, request.getParameter ("
      // ResultSet
      // results = pstmt.executeQuery (
      // An attacker simply modifies the 'acct' parameter in the browser to
      // send whatever account number they want. If not properly
      // verified, the attacker can access any user's account.
      // http://example.com/app/accountInfo?acct=
      // notmyacct
      // Scenario #2
      // : An attacker simply force browses to target URLs.
      // Admin rights are required for access to the admin page.
      // http://example.com/app/getappInfo
      // http://example.com/app/
      // admin_getappInfo
      // If an unauthenticated user can access either page, it’s a flaw. If a
      // non admin can access the admin page, this is a flaw.`,
    
      // },
      // {
      //   title: 'A10 : Insufficient Logging & Monitoring',
      //   subtitle: `Exploitation of access control is a
      // core skill of attackers. SAST and
      // DAST tools can detect the absence of
      // access control but cannot verify if it is
      // functional when it is present. Access
      // control is detectable using manual
      // means, or possibly through
      // automation for the absence of access
      // controls in certain frameworks.`,
      //   isVulnerablePara: `Access control enforces policy such that users cannot act
      // outside of their intended permissions. Failures typically lead to
      // unauthorized information disclosure, modification or destruction
      // of all data, or performing a business function outside of the limits
      // of the user. Common access control vulnerabilities include:
      // •
      // Bypassing access control checks by modifying the URL,
      // internal application state, or the HTML page, or simply using a
      // custom API attack tool.
      // •
      // Allowing the primary key to be changed to another users
      // record, permitting viewing or editing someone else's account.
      // •
      // Elevation of privilege. Acting as a user without being logged in,
      // or acting as an admin when logged in as a user.
      // •
      // Metadata manipulation, such as replaying or tampering with a
      // JSON Web Token ( JWT access control token or a cookie or
      // hidden field manipulated to elevate privileges, or abusing JWT
      // invalidation
      // •
      // CORS misconfiguration allows unauthorized API access.
      // •
      // Force browsing to authenticated pages as an unauthenticated
      // user or to privileged pages as a standard user. Accessing API
      // with missing access controls for POST, PUT and DELETE.`,
      //   prevention: `Access control is only effective if enforced in trusted server
      // side
      // code or server less API, where the attacker cannot modify the
      // access control check or metadata.
      // •
      // With the exception of public resources, deny by default.
      // •
      // Implement access control mechanisms once and re use them
      // throughout the application, including minimizing CORS usage.
      // •
      // Model access controls should enforce record ownership, rather
      // than accepting that the user can create, read, update, or delete
      // any record.
      // •
      // Unique application business limit requirements should be
      // enforced by domain models.
      // •
      // Disable web server directory listing and ensure file metadata
      // (e.g. .git) and backup files are not present within web
      // •
      // Log access control failures, alert admins when appropriate
      // (e.g. repeated
      // •
      // Rate limit API and controller access to minimize the harm from
      // automated attack tooling.
      // •
      // JWT tokens should be invalidated on the server after logout.
      // Developers and QA staff should include functional access control
      // unit and integration tests.`,
    
      //   example: `Scenario #1
      // : The application uses unverified data in a SQL call
      // that is accessing account information:
      // pstmt.setString
      // (1, request.getParameter ("
      // ResultSet
      // results = pstmt.executeQuery (
      // An attacker simply modifies the 'acct' parameter in the browser to
      // send whatever account number they want. If not properly
      // verified, the attacker can access any user's account.
      // http://example.com/app/accountInfo?acct=
      // notmyacct
      // Scenario #2
      // : An attacker simply force browses to target URLs.
      // Admin rights are required for access to the admin page.
      // http://example.com/app/getappInfo
      // http://example.com/app/
      // admin_getappInfo
      // If an unauthenticated user can access either page, it’s a flaw. If a
      // non admin can access the admin page, this is a flaw.`,
    
      // },
    
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
        console.log('The dialog was closed' + result.toString());
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
        console.log('The dialog was closed' + result.toString());
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
        console.log('The dialog was closed' + result.toString());
      });
    }

  }

}
