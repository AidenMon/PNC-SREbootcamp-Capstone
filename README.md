# Containerized WBAM 
## Necessary Infromation

### Start Containers 
Run the docker compose file : 

`docker compose up --build -d`

#### Note: 
    Command must be ran within the same folder as the docker-compose.yaml
### Access Frontend of Application/ User Inteface
    http://localhost/8080
#### Example Login Information:
    UserId: ywiley
    password: W5NKFBa1@B
&nbsp;


## Additional Information

### Access Backend of Application:
**Main Port**: http://localhost/8081
    
    Customer: http://localhost/8081/api/customer/all

    Account: http://localhost/8081/api/account/all

    Transaction: http://localhost/8081/api/transaction/all

### Access Grafana:
**Main Port**: http://localhost/3000


# Documentation: 

## Front-End Versions: 
**WBAM 0.2.0** : wbam-front-buildv1 to wbam-front-buildv5

**WBAM 0.3.0** : wbam-front-buildv6

