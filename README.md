# Facebook Graph API Integration

This app demonstrates signing in to facebook and retrieving friends list using Facebook's Graph API. It follows a microservice architecture composing of three components, an Angular 5 web client, an ASP.NET Core API, and Postgre SQL as database. You can run everything in your local computer by installing docker.

You can try out the app here:
http://randal-apiintegration.southeastasia.cloudapp.azure.com/ 

Repo for the ASP.NET Core backend can be found here:
https://github.com/randalvance/Randal.ApiIntegration

## Running the App Locally with Docker

1. Make sure Docker is installed and it's using Linux based containers.
2. Clone this repo.
3. Open command line and go to the root folder of the repo.
4. Run the following command:
    ```
    docker-compose up
    ```
5. Wait for docker to pull the images and start the containers. (Wait until it says `Application started`.)
6. Access the web frontend via `http://localhost:8005`
