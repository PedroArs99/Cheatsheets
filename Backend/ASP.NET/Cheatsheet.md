# ASP.NET REST API

## Create a project
```sh
dotnet new webapi -n <Name>
````
*Note: .NET CLI is needed, creation with VS is possible too*

## Trust Http Certificates
```sh
dotnet dev-certs https --trust
```

## VS Code Tips'n Tricks
* Stop opening a new browser on each lauch:
    * Go to `launch.json` on the `.vscode` folder and remove the `serveReadyAction` entry.
* Allow to build using vs code build shortcut:
    * Go to `task.json` on the `.vscode`folder and add the following snippet to build task:
    ```json
        "group": {
            "kind": "build",
            "isDefault": true
        }
     ```