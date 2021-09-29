# K8s Components

## Node
Worker machine, either physichal or a virtual machine.

## Pod
* Smallest unit of k8s.
* A container under a small layer of abstraction.
* Each of one has an own (internal) Ip address.
* Very ephimeral (Can dissapear very quick). 

## Service
* Abstraction over the pods that attach them directly to an ip address.
* Lifecycle of the pods and services are not connected. That means that if the pods die the service can stay alive.
* They also act as load balancers.

## Ingress
* IP that allows the services to be accessed from outside the cluster.

## ConfigMap
* Some kind of properties/env file.
* Connected to pods throug env variables

## Secret
* Part of the Configmaps that are secret.
* Key-Value pairs base64 encoded.

## Volume
* Persistent data storage.
* Either on local storage or remote.
* K8s explicitely does not manage storage !!!

## Replica
* Pod duplicates on different nodes.

## Deployment
* Blueprint for services.
* User level component.
* Defines number of replicas for each service.

## StatefulSet
* Deployments for stateful services like db.
* They handle access to the service in such a way, that it avoids data inconsistencies.
* Because of the complexity of this component, elements such as DBs are often stored outside of the K8s cluster.


