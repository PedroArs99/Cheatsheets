# YAML Config files

Each config file has 3 parts:
* Metadata: Name of the deployment, description, etc.
* Specification: Number of replicas, ports, Kind of config, apiVersion, etc. These attributes are specific to the kind of config.
* Status: Status of the deployment. Generated and added by kubernetes. It always compare the specification with the status to know if there´s something going wrong. Status comes from `etcd`.

## Format
* Strict indentation!. It´s recommended to use a yaml syntax validator online.
* Config files are usually stored with the code, or in an own git repo just for config files.

### Template (Blueprint for pods)
* Templates are specified under the `spec` section of a deployment and represent the config for a pod. It´s something like a config inside a config. 
* They have own metadata and spec section.

### Connecting components
* Connection between components is done using labels and selectors.
* Labels are contained in the metadata while selectors are in the spec section. 
* Labels are a key-value pair list. Then a selector could find components with concrete labels using a `matchLabels` config:
```yaml	
...
spec:
    replicas: 1
    selector:
        matchLabels:
            app: my-app
...
```
```yaml
...
metadata:
    name: my-app
    labels:
        app: my-app
...
```

### Example
```yaml	
apiVersion: apps/v1
kind: Deployment
metadata:
    name: nginx-deployment
    labels:
        app: nginx
spec:
    replicas: 3
    selector:
        matchLabels:
            app: nginx
    template:
        metadata:
            labels:
                app: nginx
        spec:
            containers:
            - name: nginx
              image: nginx:1.16
              ports:
                - containerPort: 8080
```

```yaml	
apiVersion: v1
kind: Service
metadata:
    name: nginx-service
spec:
    selector:
        app: nginx
    ports:
        - protocol: TCP
          port: 80
          targetPort: 8080
```
