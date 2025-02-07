# PNC-SREbootcamp-Capstone
I, along with my team members, decided to demonstrate the summation of our knowledge into a capstone project for a PNC SRE Bootcamp by mimicking PNC's mobile banking application. In this project I developed the application itself, the front end in Angular, the back end in Java SpringBoot which communicates with a MySQL database. The entire application was containerized by my teammates who set up application performance monitoring tools, such as Grafana and Prometheus, using docker compose files with investigation done into and steps taken towards Kubernetes integration. To push the live demonstration one step above and further, I was able to create an Android APK for my Angular frontend and sideload it onto a SamsungS20 for use by our managers. 

The application itself, without the APM tools, is currently publicly hosted on a public IP address. Both the backend and frontend are located here and the Android APK performs API calls to this public IP for access of the backend.

If you would like to explore the application it is, at the time of writing, hosted here: http://129.80.231.174/
