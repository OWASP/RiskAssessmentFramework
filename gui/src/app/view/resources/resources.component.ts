import { Component, OnInit, Inject } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
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
    isVulnerablePara : `Some of the more common injections are SQL, NoSQL, OS
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
    isVulnerablePara : `An application is vulnerable to attack when:
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
  isVulnerablePara : `Confirmation of the user's identity, authentication, and session
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
  isVulnerablePara : `The first thing is to determine the protection needs of data in
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
  isVulnerablePara : `Applications and in particular XML
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
  isVulnerablePara : `Access control enforces policy such that users cannot act
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
  isVulnerablePara : `Access control enforces policy such that users cannot act
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
  isVulnerablePara : `Access control enforces policy such that users cannot act
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
  isVulnerablePara : `Access control enforces policy such that users cannot act
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
  isVulnerablePara : `Access control enforces policy such that users cannot act
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
  isVulnerablePara : `Access control enforces policy such that users cannot act
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
        data: {title: content.title,
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
        data: {title: content.title,
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
        data: {title: content.title,
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
