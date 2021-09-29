# K8s Architecture

## Worker nodes
Each node need to has 3 processes installed:
1. **Container runtime** (Docker or similar)
2. **Kubelet**: Interface between the pods and the runtime.
3. **Kube-proxy**: Forward requests between services distributed on different nodes.

## Master nodes
Each master node runs 4 processes:
* **Api server**: Validates the requests to the cluster and forward them to other k8s processes. Only entry point to the cluster.
* **Scheduler**: Decide where the next component will be scheduled based on the worker node load. It ONLY decides where to put the pod. Actual schedule is done by the Kubelet.
* **Controller manager**: Detect state changes such as pod creation, deletion, etc. and update schedule new events accordingly. 
* **etcd**: Kind of cluster brain that stores the state of the cluster in key value pairs. **App state itself its not stored in etcd.**

## Cluser setup
A small cluster can be set up with 2 master nodes and 3 workers. Master nodes are less resource consuming while workers are pretended to consume a lot more. 

To add new master/workers, its needed to get a bare server, install the master/worker processes and then add the server to the cluster.