# Minikube
* Single node Kubernetes cluster with Docker.
* Very useful for development and testing.
* Runs over a virtual box/hyperkit.

## Commands
* Start
```sh
minikube start --vm-driver=<hypervisor>
```
* Stop
```sh
minikube stop
```
* Status
```sh
minikube status
```

* Assign an IP Adress to a external service
```sh
minikube service <service-name>
```
