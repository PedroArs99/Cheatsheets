# Services

Each pod receives its own IP Adress, but they´re ephemeral and destroyed frecuently. Services offer a stable IP address that stays even when the pod dies.

Services also provide load balancing between pod replicas and offer a communication interface within and also outside the cluster.

## ClusterIP Services
Default type which is the most common and most used. They´re also called internal Service.

They´re an abstraction layer that basically represent an static ip address that is accessible from the cluster.

## Headless Services
For use cases, in which the Client wants to communicate with 1 specific Pod directly or nor random selected in general. For example, statefulsets.

By setting the attribute `clusterIP: None` on the yaml file, the K8s DNS Lookup will return Pods IP addresses instead.

Usually a headless service is used next to a ClusterIP.

## NodePort
NodePort Services are used to expose services outside the cluster. NodePort service type has a predefined range of ports between 30000 and 32767. This will make the cluster available from outside using the node Ip address and the nodePort defined. ClusterIps are created together with the NodePort service type.

Note that NodePort Services are not secure and efficient.

## LoadBalancer
Cluster becomes accessible externally through cloud providers LoadBalancer. Works the same way as NodePort Services, but in this case the port is only accessible through the Cloud Provider LoadBalancer.