# Kubernetes Volumes

When containers need to store persistent data, such as Database or similar, it cant done inside a pod because the data is lost when the pod is restarted. Kubernetes provides a solution for this problem by using volumes, which don´t depend on the pod lifecycle.

`These volumes have to be available to all clusters`, since it´s unknown in which node the pod will be restarted. That means, they´re not namespaced.

This Storage must also survive, even if the cluster crashes.

## Persistent Volume
A cluster resource just like RAM or CPU that is used to store data. It needs actual physical storage, like cluster local disks or external nfs servers or cloud-storage. 

PV are only an interface to the actual storage, for which the cluster admin has to take care of. He has to decide which type of storage the cluster needs and create and manage it theirselfs.


```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
    pv-name
spec:
    capacity:
        storage: 10Gi
    volumeMode: Filesystem
    accessModes:
        - ReadWriteOnce
    persistentVolumeReclaimPolicy: Recycle
    storageClassName: slow
    mountOptions:
        - hard
        - nfsvers=4.1
    nfs:
        path: /path/to/server
        server: nfs.example.com
```
*Note: Depending on the storage backend the config attributes will be different.*
*Note: They have to be created by the admin of the cluster. NOT by the developer of the apps.*

### Local vs Remote PV
Each type of storage has itw own use cases.

Local volumes violate 2. and 3. requirement for data persistence:
* Not being tied to 1 specific node
* Surviving cluster crash scenarios


### Google Cloud example
```yaml	
apiVersion: v1
kind: PersistentVolume
metadata:
    name: pv-name
    labels:
        failure-domain.beta.kubernetes.io/zone: us-east1-b
spec:
    capacity:
        storage: 10Gi
    accessModes:
        - ReadWriteOnce
    gcePersistentDisk:
        pdName: my-data-disk
        fsType: ext4
```

## Persistent Volume Claim
A PVC is a request to the cluster for a Persistent Volume. It is a binding between a PV and a pod.

They must exist in the same namespace as the pod.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
    name: pvc-name
spec:
    storageClassName: manual
    volumeMode: Filesystem
    accessModes:
        - ReadWriteOnce
    resources:
        requests:
            storage: 10Gi
```

That PVC has to be used in Pods Config
```yaml	
apiVersion: v1
kind: Pod
metadata:
    name: pod-name
spec:
    containers:
    - name: container-name
      image: image-name
      volumeMounts:
      - mountPath: /mnt/path
        name: mypd
    volumes:
    - name: pvc-name
```

## Storage Class
Provides persistent volumes dynamically when a PVC claims it. It add an abstraction layer over the storage provider and parametrizes that storage.



```yaml	
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
    name: storage-class-name
provisioner: kubernetes.io/aws-ebs
parameters:
    type: io1
    iopsPerGB: "10"
    fsType: ext4
```
It has to be requested on a PVC
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
    name: pvc-name
spec:
    storageClassName: manual
    volumeMode: Filesystem
    accessModes:
        - ReadWriteOnce
    resources:
        requests:
            storage: 10Gi
    storageClassName: storage-class-name
```

On the actual workflow, the pod would ask for space to a PVC, and the PVC would ask for that storage to the StorageClass, which will finally create the PV.