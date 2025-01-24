# Kubernetes Integrations for Project

## Before You Start

I highly recommend you download a tool to manage all the port forwarding.... unless you enjoy opening up several extra terminals to do this, one for each port.

This is the tool I'm using https://kube-forwarder.pixelpoint.io/ They support both GUI and CLI interfaces (I'm using the GUI, but use whichever works best for you).

Any time below when you see me reference a pod, make sure you replace it with your pod name!

## Get Things Running

We need to create a secret for the mysql password. This only needs ran once.
```
kubectl create secret generic mysql-pass --from-literal=password=rootmysql
```
TODO: I believe this can be turned into a yaml file too! Will look into this later

**What you really care about**
To deploy everything, simply run the command
```
bash apply-all.sh
```
When you look at the file, you'll notice it's just a collection of kubectl apply commands.

Remember that you can run these commands manually in your terminal. This is great for editing and debugging singular pods!

To ensure that your pods are created and running, use the command:
```
kubectl get pods
```

### Prometheus

To access the Prometheus webapp:
```
kubectl port-forward prometheus-59c845c4c7-qj7nf 9090:9090
```
Then go to http://localhost:9090/

Set up the port for the data connection to Grafana:
```
kubectl port-forward prometheus-59c845c4c7-qj7nf 9323:9323
```

While we're discussing the data connection, the IP address that you'll provide in Grafana will look like 
```
http://10.110.249.184:9090
```
Big thing: I had to use the proper http:// declaration, just the IP and port would give an error.

To get the IP adress, run the following:
```
kubectl get svc prometheus
```

### Grafana

To access the Grafana webapp, you need to port forward! Run this command or use kube-forwarder:
```
kubectl port-forward grafana-7665467f4f-r6n9m 3000:3000
```
Access the webapp at http://localhost:3000/


### MySQL

```
kubectl port-forward mysql-c7c799d69-flxxz  3606:3606
```

## Common Commands

```
<!-- If you manually want to forward a port: -->
kubectl port-forward <pod_Name> <port>:<port>

<!-- When you want to delete everything and get a fresh start, run this: -->
<!-- (Remember, just deleting a pod will cause it to restart in this setup. You must do this full delete) -->
kubectl delete all --all

<!-- If you make any changes to PVC's, you will have to delete them (delete all does not get them) -->
kukectl delete pvc <pvc_name>

<!-- Access more pod information for debugging: -->
kubectl describe pod <pod_name>
```