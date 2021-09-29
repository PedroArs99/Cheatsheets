# Ingress
Entry point for application without opening the service itself. Also provides domain name instead of IP address and port.


## Syntax
```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
    name: my-ingress
spec:
    rules:
        - host: my-app.example.com
          http: 
            paths:
                - backend:
                    serviceName: my-service
                    servicePort: 80
                  path: /my-service
                - backend: 
                    serviceName: my-another-service
                    servicePort: 80
                  path: /my-another-service
```

```yaml
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
    name: my-ingress-tls
spec:
    tls:
    - hosts:
        - my-app.example.com
        secretName: my-secret-tls
---
apiVersion: v1
kind: Secret
metadata:
    name: my-secret-tls
    # Must be on the same namespace as the ingress component
    namespace: default
data:
    # Actual value has to be put here b64 encoded
    tls.crt: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0t...
    tls.key: LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0t...
type: kubernetes.io/tls
```

## Configure an Ingress to the cluster
1. Install ingress controller on the server. Ingress controller evaluates all the rules and manages all the redirections. It´s the entrypoint to the cluster. There are many implementations from third parties and also a K8s one which is 'K8s Nginx Ingress Controller'. 

### Install on Minikube
```sh
minikube addons enable ingress

# To see if nginx-ingress-controller is running
kubectl get pod -n kube-system
```




