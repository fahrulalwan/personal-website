---
title: 'Deployment with Kubernetes'
date: '2020-07-15'
---

This experiment is used as setup if the user wants to integrate front-end web app with kubernetes.

The app image using some of kubernetes features such as:

 1. Deployment
 2. IPCluster
 3. LoadBalancer
 4. Ingress
 5. HorizontalPodAutoscaling (HPA)
 6. ...more to come.

Requirements:
 - kubectl ([follow the instructions](https://kubernetes.io/docs/tasks/tools/install-kubectl/))
 - minikube (if you want to simulate with your local environment) ([follow the instructions](https://kubernetes.io/docs/tasks/tools/install-minikube/))

### About the stack

The app is using Angular 9, Nginx server, and docker ([get docker here](https://docs.docker.com/get-docker/)).

The app will compiling the image following the `Dockerfile` configuration integrating with nginx then the image will created and you should push the image with the version accordingly to the [docker hub](https://hub.docker.com/).

## About Kubernetes Features

> **Ingress**, is sort of gateway to ip address within IPCluster & LoadBalancer/NodePort to handle communication of app that deployed within. Example, user communicates with loadbalancer to load website. Another server using our API to connect service direct from IPCluster. I dont know why, will read further (CMIIW).

## Caveats

**First**, When you typing the command

    $ minikube start

dont forget to add docker credential for accessing the code if the image you pull is **private**.

    $ kubectl create secret docker-registry dockersecret --docker-username=<username> --docker-password=<password> --docker-email=<email>

You need do that first before start deploying your app, otherwise you should delete all config and redeploy all your app or wait some time for the pod to be settled.

---

**Second**, If you want to test your app to be accessible within your local environment you should write this in your terminal:

    $ minikube tunnel

this command is used for tunneling your local kubernetes server that can be accessible to access in web browser, but cannot be used to testing the app from other device.

---

**Third**, if you want to access the metrics (cpu usage, etc) then you should apply all the the kubectl config from folder `metrics-server` or enable from minikube addons

    $ minikube addons enable metrics-server || minikube start --addons metrics-server

if you would like to enable other addons, you can view here:

    $ minikube addons list

but if you like to enable metrics-server manually, you may apply from the kubernetes experimental folder:

    $ kubectl apply -f _experimental/kubernetes/metrics-server

and then, you must edit the configuration to use metrics on pod level by opening the enabled HPA config by executing this command:

    $ kubectl edit deployment -n kube-system metrics-server

then, add pod metric enabler arguments from container info section

    args:  
    - --kubelet-insecure-tls  
    - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname

resulting the content similar to below

	   template:
	     metadata:
	       creationTimestamp: null
	       labels:
	         k8s-app: metrics-server
	       name: metrics-server
	     spec:
	       containers:
	       - args:
	         - --cert-dir=/tmp
	         - --secure-port=4443
	         - --kubelet-insecure-tls
	         - --kubelet-preferred-address-types=InternalIP,ExternalIP,Hostname
	         image: k8s.gcr.io/metrics-server-amd64:v0.3.6
	         imagePullPolicy: IfNotPresent
	         name: metrics-server
	         ports:
	         - containerPort: 4443
	           name: main-port
	           protocol: TCP

dont forget to save that configuration, (for vim: `:wq`).
Voila! now you can use metrics at pod level can seen in `kubectl get hpa`

*p.s: you can test request by using [hey](https://github.com/rakyll/hey), for example: i want to test 50 concurrent request for 5 minutes.

    $ hey -c 50 -z 5m http[s]://<YOUR_DUMMY_WEBSITE>

---

**Four**, when you start enabling ingress service locally (minikube), dont forget to enable it first from `minikube addons enable ingress`  first.

you can find your local ingress endpoint(address) by:

    $ kubectl get ingress
    
    NAME              CLASS    HOSTS               ADDRESS      PORTS   AGE
    your-ingress   	  <none>   your-local.web 	   172.17.0.2   80      29s
													^ this is your IP
	
	# or you can find with:
	$ minikube ip
	172.17.0.2    # <- same as your ingress address

then, register your dummy website (unregistered one) to `/etc/hosts` with template below (example)

    <IP> <YOUR_DUMMY_WEBSITE> ...[YOUR_ANOTHER_WEBSITE]
dont forget to save! :)



---



Reference:
- [Medium: Membuat Horizontal Pod Autoscaler](https://medium.com/easyread/today-i-learned-membuat-horizontal-pod-autoscaler-hpa-pada-kubernetes-86da03095071) (Indonesia)
- [DigitalOcean: Setup nginx Ingress using Helm](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-nginx-ingress-on-digitalocean-kubernetes-using-helm) (English)
- [Medium: How to use local own docker images with Minikube](https://medium.com/bb-tutorials-and-thoughts/how-to-use-own-local-doker-images-with-minikube-2c1ed0b0968) (English)
