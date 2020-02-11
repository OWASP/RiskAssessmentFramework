# The OWASP Risk Assessment Framework

[![Build Status](https://travis-ci.org/OWASP/RiskAssessmentFramework.svg?branch=master)](https://travis-ci.org/OWASP/RiskAssessmentFramework)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/7bb78cc6ec4a4951a96e8c712758e030)](https://app.codacy.com/app/adeyosemanputra/RiskAssessmentFramework?utm_source=github.com&utm_medium=referral&utm_content=OWASP/RiskAssessmentFramework&utm_campaign=Badge_Grade_Settings)
![GSOC 2019][GSOC-2019-badge]
![Repo Size](https://img.shields.io/github/repo-size/OWASP/RiskAssessmentFramework.svg)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/OWASP/RiskAssessmentFramework/issues)
![Last commit](https://img.shields.io/github/last-commit/OWASP/RiskAssessmentFramework.svg)
[![OWASP Incubator](https://img.shields.io/badge/owasp-tool-blue.svg)](https://www.owasp.org/index.php/Risk_Assessment_Framework)
[![PRESENT](https://img.shields.io/badge/Arsenal%20-Blackhat%20US%202019-green)](https://www.blackhat.com/us-19/arsenal/schedule/index.html#rwdd-remote-web-deface-detection-tool-16775)
[![PRESENT](https://img.shields.io/badge/Arsenal%20-Blackhat%20Asia%202020-blue)](https://www.blackhat.com/asia-20/arsenal/schedule/index.html#the-owasp-raf-static-application-security-testing-tool-19261)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

The OWASP Risk Assessment Framework consist of Static application security testing and Risk Assessment tools. By using OWASP Risk Assessment Framework's Static Appilication Security Testing tool Testers will be able to analyse and review their code quality and vulnerabilities without any additional setup. OWASP Risk Assessment Framework can be integrated in the DevSecOps toolchain to help developers to write and produce secure code.<br>

## features

-   Remote Web Deface Detection (Optional)
-   Static Application security Testing

##    Web Deface Detection
## Web Deface Detection Installation
-   `cd web_deface/`
-   `pip install -r requirements.txt`
-   `python web_deface.py <notif arguments>` <br>
-   For more detailed information, refer to the [user guide](https://github.com/OWASP/RiskAssessmentFramework/blob/master/web_deface/README.md)
<br>we have update related web deface detection please see video [Youtube](http://www.youtube.com/watch?v=1vFaGxvzMh4 "Web Deface Detection ")<br>
##   Static Application security Testing (Under Develoment)
-   For more detailed information, refer to the [user guide](https://github.com/OWASP/RiskAssessmentFramework/blob/master/user-guide.md)<br>
## Demo RAF SAST Tool

![Demo-1](https://user-images.githubusercontent.com/36698676/63649995-a32f0180-c762-11e9-999c-2b50f32340fd.gif) <br>

![Demo-2](https://user-images.githubusercontent.com/36698676/63650087-649a4680-c764-11e9-9fca-86ccc4880f18.gif)
____

## Contribute
 -  Wanna contribute this project dm me via twitter @johnleedik <br>
 -  For new contributor see our [TODO and Requirement](https://github.com/OWASP/RiskAssessmentFramework/blob/master/TODO.md)


## Project Lead
- Ade Yoseman Putra [(@adeyosemanputra)](https://github.com/adeyosemanputra)
- AZZEDDINE Ramrami [(@aramrami)](https://github.com/aramrami)
- Rejah Rehim [(@RejahRehim)](https://github.com/rejahrehim)



[License]:  /LICENSE
[Version]: (https://github.com/OWASP/SecureTea-Project/releases)
[Issues]: (https://github.com/OWASP/RiskAssessmentFramework/issues)
[Issues-badge]: (https://img.shields.io/github/issues/OWASP/SecureTea-Project.svg)
[PRs]: (https://github.com/OWASP/RiskAssessmentFramework/pulls)
[PR-badge]: (https://img.shields.io/github/issues-pr/OWASP/SecureTea-Project.svg)
[GSOC-2019-badge]: https://img.shields.io/static/v1.svg?label=GSOC&message=Google%20Summer%20of%20Code%202019&color=blue&logo=%20data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAABLFJREFUSA2tVV1sVFUQ/s45d7ulpT+63VSkQC1IIsHyAugDAWLwQSEQI/EnaGL0QWOQ6AMo+uAzJooJJJiIiQ8qkWDURIxGIlLUqEQTKz9REEpbMFhKt7ss7e49P35zb9jaqKEkTnL33jNn5ps538ycBa5D7MH8etuTX38dLlM3jQ+2rXRf1Q/LI99T9VRTMYy/rF+hUflAIeTEPkANe2Tvz9w1fuha/pMChE/RbDNRd83JWnigwzTO2Gma5+ec6eCWgnEDcMXfhl35j43cH4yiqOYSxbZX3YviVcXEDjVWR4tMRvUEegUXQzfNRtT1PJBbw7WFjocTv5DJwZgoZy7t3+N/34YwdhbKZKA0MO6i5UQ6/K8BYBC8gNsYKr8a6rZdCJePwx97EmH0e+rTxFTUDNW8FHrOs9CLD8OdeBp+6BOoKAPBuAou70knSDaYucrfA73wXbhTW+EHdqX2ypCdlNHgigjDn8Pz0R1PwSx8B+7oBuDi/n9ATgoQW+vqp8+EWrCb4C/B9xPciMnfSuVjLhlMM1sm6/vfSNZmwZvwR5YilAZdmlH6S9YmxFjMVl2bEcon08wTcO4LqEhwMHNfhm65E+BJE2GB/SCpLP8K3bUFgpFupL+1AGNfTF8ZtbbtQNt9zOo17iaV5ltDz3iErzpyTO7bH6KOBZ/xYHoSBmXl4M++ymZYh6g1v0OwaJRIEiBwcOrMlX26cV4+eAU/+l2yqTJtiLr3Qd1EMDsONNzKzMvwpaPUbYC5fS9AG5FQZBMwJ8EQLMEUvbaH2tZ6lD4kbM7pmwl0CagOQzXOh1ncg1D9E66XWTNT1byELXmaNmW4Xx6m3RAi2ohtqNLPjsCZmTyzzwmmPdS+VhvYQmBp0gaRDmNBZSG829GUFtPAAFS33AEUf0i/RUfK6E7bqiRLkWYQQ/kOJYNKQasVhR7nMmt8QJ/xA3S6EUJNGDsD++MqHvsKqXiPgaZBNTDT4hGeO6JuT0KX/elu2vZB1eUTX8EQLEtMwU5qkF1V7rUe6/zlU6eV5hzcsDxJBH4M7tjjaQEbyT8n2JdPEKiOjbAd7vgTDDKWJt26jJPMq6V08rRgCaaco9ZF2VXoDcXCJlzYwwndzP5nnwtVnH8/9JkcGf7cbiAm16TED3Go5G4QG86E7qQPfePiyCbBEnCRWgBZhAxG/JnXSRHvms4XmJ0VbRIsuTL6XuFaCE5Bkz25o27ZklDkz2yHJwYNajJpksmtDvEQaXkUZtFHiZHr28ZALKJmLuQ+AZV+5KWlDGdj7laY2c/B/byOpxvioSIaSmKpTA5AnSY1vvANPB30greg82vg+ncgFA4nbZm4ZdugWpcT+BnWowW+l+CFr9PLzkonTsjkAKSbHTDuFfkf+ZZ3yzLoWRvrzLwXdVDSkqW0EU0T3yX48+97P7CzGqoXmTl9iB2IMQGfElpbh72YhvZsR6VCVZYPP0wFM9X0prdNU+ccpziIpN+E8/zD6TsbLpcec1mcE2Mxl5/BC5XBWQ+ArZWKVOyaUjlQ1x3p+GOtQqcY+6D6rM+wFau1bvkvkCkFEOfKgcbuyMTsTTLlMquv9rms/zepHmheIs/1AP4F9DYB6+AcwCcAAAAASUVORK5CYII=

## Join Our Telegram Channel

<https://t.me/joinchat/IjCM_BRrcPYPC3X0DZ4Rog>
