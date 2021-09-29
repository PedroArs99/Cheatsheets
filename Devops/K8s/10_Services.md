# Services

Each pod receives its own IP Adress, but they´re ephemeral and destroyed frecuently. Services offer a stable IP address that stays even when the pod dies.

Services also provide load balancing between pod replicas and offer a communication interface within and also outside the cluster.

## ClusterIP Services
Default type which is the most common and most used. They´re also called internal Service.

They´re an abstraction layer that basically represent an static ip address that is accesisble from the cluster.


