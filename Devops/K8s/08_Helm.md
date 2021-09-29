# Helm - Kubernetes Package Manager
* Package Manager for Kubernetes. Serves for Packaging YAML Files and distribute them in public and private repositories.
* The bundle of YAML is called Helm Chart.
* There are existing Helm Charts for all type of services like Databases, Prometheus, etc. 

* Helm serves also as Template engine. When deploying multiple services, all of them with the same structure which differ only on the attributes values, it´s possible to create a template and just fill it with values.

## YAML Template
```yaml
apiVersion: v1
kind: Pod
metadata:
    name {{.Values.name}}
spec:
    containers:
    - name: {{.Values.container.name}}
      image: {{.Values.container.image}}
      ports: {{.Values.container.port}}
```
These values are stored in a `values.yaml` file.

## Value injection into template files
By default the injected values are the `values.yaml` ones, but they can be overriden:

* By setting the values file with a parameter while deploying the chart.
```sh
helm install --valuesmy-values.yaml my-chart
```
*Note: This wil only override the values that are declared in the new file.*

* By setting the values file with a parameter while deploying the chart.
```sh
helm install --set version=1.0.0 my-chart
```

## Chart Structure
* < name of the chart>/
    - *Chart.yaml*: Contains meta info about the chart (Name, version, dependencies, etc)
    - *values.yaml*
    - *charts/*: chart dependencies
    - templates/: Actual templates
    - [optional] *README.md*
    - [optional] *LICENSE*


## Commands
* Deploy chart
```sh
helm install <chartname>
```
* Upgrade a chart
```sh
helm upgrade <chartname>
```

* Rollback a chart
```sh
helm rollback <chartname>
```

## Helm 2 vs Helm 3
Helm 2 comes in two parts:
* Client (helm cli)
* Server (Tiller)

Each time the client send a request to Tiller, it will store the values for future reference. Changes are applied to existing deployment instad of creating a new one.

On this version, Tiller has too much power inside the cluster and becomes a security issue. 

Helm 3 removes Tiller and use only a helm binary.


