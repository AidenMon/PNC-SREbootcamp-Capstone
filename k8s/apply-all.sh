kubectl apply -f mysql-deployment.yml
kubectl apply -f mysql-exporter-configmap.yml
kubectl apply -f mysql-exporter-deployment.yml
kubectl apply -f prometheus-deployment.yml
kubectl apply -f grafana-deployment.yml
kubectl apply -f prometheus-config.yml
kubectl apply -f banking-db-sql-config.yml