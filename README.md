# Complete Automation Framework (GUI + API + Database) in Behaviour Driven Development  
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/AL/images/Cucumber_Image.jpeg?at=5c191db103a8dab757a03fc326097fc4150909fd&raw)

### Author: Mohit Singal and Himanshu Arora
**“Collaboration”** is a key ingredient when we want to deliver complex projects with high quality. While the gaps always exist in terms of what a stakeholder needs versus what gets delivered, collaboration coupled with communication is quintessential to close this gap. Our framework provides the same platform to Product team, Developers and Quality Analysts.

In layered architecture of our framework, top most layer of **Cucumber (Behavior-Driven Development Tool)** allows user stories to be written collaboratively in a common language known as **Gherkin** which is an external DSL. **Specifications** (Automated Tests) are written in plain English and can be created by anyone in product or engineering team.

Executable **specifications** (written in plain English) also serves the purpose of living documentation in terms of product requirements and test scenarios. Stakeholders (technical or non-technical) will be able to see what is really being tested and if required they can Add/Edit test cases easily.

Framework is written in **Java** which used **Selenium WebDriver**, **Cucumber-JVM**, **Rest Assured**, **ODJBC Driver**, **Maven** and **TestNG** to test web application in browser giving real user experience. We have used latest concepts of **Page Object Model**, different Utils/Libs to support various operations through the concept of **Central Repositories**. **Custom Cucumber Reporting** is used for test automation results.  

**Two-way automation validation** has been achieved as GUI would be validated from the response of the API and API response would be validated from the Database. 
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/AL/images/Screenshot_6.jpg?at=d03398d0e1822e5677bf89a80be5057b324f0930&raw)


### Advantage of using Cucumber over other frameworks:

1.	Acts as a bridge between the business and technical language by creating a test case in plain English text. <br />
2.	Helpful to involve business stakeholders who can't easily read code. <br />
3.	Serves the purpose of end-to-end test framework unlike other tools. <br />
4.	Cucumber provides code reusability due to simple test script architecture. <br />
5.	It is cross-platform, open source and easily embeds with Selenium. <br />
6.	Cucumber supports different languages like Java, .Net and Ruby. <br />
7.	Well formatted HTML test reports. <br />
8.	Focuses on end-user experience. <br />

### Feature File Screenshot - I:
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/AL/images/Screenshot_7.jpg?at=6717cfcf1fa57ecf5857c75b9c6d27bd0dbba242&raw)


### Feature File Screenshot - II:
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/AL/images/Screenshot_4.jpg?at=6717cfcf1fa57ecf5857c75b9c6d27bd0dbba242&raw)


### Step Definition Screenshot:
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/images/Screenshot_5.jpg?at=68f5e58221a3d4f9861013d89ecc023bec571c0a&raw)


### Feature Statistics Screenshot:
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/images/Screenshot_1.jpg?at=68f5e58221a3d4f9861013d89ecc023bec571c0a&raw)


### Tags Statistics Screenshot:
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/images/Screenshot_2.jpg?at=68f5e58221a3d4f9861013d89ecc023bec571c0a&raw)


### Steps Statistics Screenshot:
![ScreenShot](https://git.gartner.com/projects/QASSD/repos/al_cucumber/browse/images/Screenshot_3.jpg?at=68f5e58221a3d4f9861013d89ecc023bec571c0a&raw)


### Build
Configure your git setup for git.gartner.com: 

```
git config --global user.name "Mohit Singal"  
git config --global user.email "mohit.singal@gartner.com"  
```

Checkout the project in source tree or a suitable Eclipse IDE plugin. You will need to authenticate with your Windows username and password. If you do not have access already, submit an SR under the Bitbucket classification group.

```
git clone https://msingal@git.gartner.com/scm/qassd/al_cucumber.git
```

The application should be built using Maven. Running the below command will build and package the application as a WAR file :

```
maven clean install
```


*******************

