# Kubectl

## Kubectl commands
* Info
```sh
kubectl version
```

## Node Management
* Get Nodes
```sh
kubectl get nodes
```

## Pod Management
* Pods can't be created directly. They are created by Deployment instead.

* Get Pods
```sh
kubectl get pods
```

* Get Pod Logs
```sh
kubectl logs <pod-name>
```

* Display events
```sh
kubectl describe pod <pod-name>
```

* Run commands inside a container
```sh
kubectl exec -it <pod-name> <command>
```

## Service Management
* Get Services
```sh
kubectl get services
```

## Deployment Management
* Create Deployments
```sh
kubectl create deployment nginx --image=nginx
```

* Get Deployments
```sh
kubectl get deployments
```

* Edit Deployments
```sh
kubectl edit deployment <deployment-name>
```

* Delte Deployments
```sh
kubectl delete deployment <deployment-name>
```

## ReplicaSet Management
* They´re also managed by Deployments

* Get replicaSets
```sh
kubectl get replicasets
```

## Apply Config files
```sh
kubectl apply -f <config-file>
```
* Normally a `.yaml` file
* When applying config to an existing deployment, kubernetes detects if its a new creation or an update.



