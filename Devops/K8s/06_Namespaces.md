# K8s Namespaces
Namespaces are a tool to organize resources from different users. They represent a virtual cluster inside a physichal one.

## Characteristics
* You cant access most resources from another Namespace
* Services are accesible from another Namespace
* Some components cant be defined on a certain namespace
    - PVCs
    - Nodes

## Commands
* List namespaces
```sh
kubectl get namespaces
```

* Create a namespace
```sh
kubectl create namespace my-namespace
```

* List components that are not namespaced
```sh
kubectl api-resources --namespaced=false
```

* Change active namespace
```sh
kubens my-namespace 
```
*Kubens has to be installed*


## Default Namespaces
* *kubernetes-dashboard*: Shipped only with minikube
* *kube-system*: System namespace. Not meant to be used for the user. It contains system procecess, kubectl, etc
* *kube-public*: Publicely accessible data. Contains a configmap with cluster information.
* *kube-node-lease*: Heartbeats of each node. Each node has it own object on the namespace with information to determine
* *default*: Default namespace to allocate resources

## Use cases
1. Everything in one Namespace with multiple deployments, replicasets, services, configmaps, etc and is easier to identify resources within a namespace. For example: Database namespace, Monitoring namespace, ELK Namespace, Nginx ingress resources, etc. According to the official doc its not recommended to use the namespaces for small projects or under 10 users.

2. Many teams, same application. For example: Two teams work with deployment that has the same name but actually are different resources (Like two teams working with postgre dabases, etc).

3. Resource sharing: Staging and development env. 

4. Re-using components: In the previous case, with staging and development, if they use common resources, they can be shared through namespaces.

5. Blue/Green deployment: A namespace with the current production environment and another one with the next production environment. 

6. Access and Resource Limits on Namespaces. Own isolated environments for everyone.


## Create components in a namespace
By default, components are declared in a default Ns.

* By command
```sh
kubectl create deployment my-deployment --image=my-image --namespace=my-namespace
```

* Inside the config itself
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
    name: my-deployment
    namespace: my-namespace
```




