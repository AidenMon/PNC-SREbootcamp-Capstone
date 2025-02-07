# PNC-SREbootcamp-Capstone
Our team decided to demonstrate the summation of our knowledge into a capstone project for a PNC SRE Bootcamp by mimicking PNC's mobile banking application. In this project Aiden Moncavage developed the application itself, the Angular frontend and the Java SpringBoot backend which communicates with a MySQL database. The entire application was containerized by my teammates who set up application performance monitoring (APM) tools, such as Grafana and Prometheus, using docker compose files with investigation done into and steps taken towards Kubernetes integration. To push our live demonstration one step above and further, Aiden was able to create an Android APK for the Angular frontend and sideload it onto a SamsungS20 phone for use by our managers. 

The application itself, without the APM tools, is currently publicly hosted on a public IP address. Both the backend and frontend are located here and the Android APK performs API calls to this public IP for access of the backend.

If you would like to explore the application it is, at the time of writing, hosted here: \
host: http://129.80.231.174/ \
username: tcarr\
password: @9SXPays8M\
*Be mindful there is no form validation so it is possible to transfer MORE than your account has, so please refrain from doing so.*

In the future I, Aiden Moncavage, intend to continue with this application while straying away from PNC's UI to create my own version of a banking application where you can manage services like PayPal, CashApp, and other money transfer/management services while moving away from PNC's UI. In order to do so, I might fork the repo so I have a fresh Repository, or I will simply create a new repo which will link to this current repo via the Readme.
