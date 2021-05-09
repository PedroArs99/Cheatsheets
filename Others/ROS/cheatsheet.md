# ROS
Robot Operating System is an Open Source Middle for robots based on Ubuntu Linux. It was developed in 2007 by the Stanford university and maintained by the Open Source Robotics Foundation since 2012.

Manages the data exchange between Processes: Inside the same computer, inside a network and between multiples modules written on multiple Programming Languages.

ROS is a standart in both industry and investigation.

Important aspects from ROS:
* Paquetmanagement: Management from Source-Code and dependencies
* Libraries: For multiple Tools and Communication between processes
* Tools: Start, control and visualization from interactive processes and programs

## Terminology
* Node: Nodes are processes that make calculations and exchange the results through ROS. This is done using libraries such as roscpp or rospy.

* Message: Messages are sent from Nodes and Topics and received by other Nodes. Messages are simple data structures.
    - Contains Datatype, Data and TimeStamp.
    - Offer Serializing and Deserializing

* Topic: Topics are ways of data exchange between Nodes. They follow a Publisher/Subscriber strategy. Normally Nodes doesn't know with which node are they communicating. They send the results to a Topic, and all the nodes interessed on this information subscribe to it.
    - More than one node can publish data on them
    - More than one node can subscribe to it
    - They handle N:N unidirectional communication

* Service: Services are a bidirectional communication way of messages between nodes. They serve as form of comunnication between nodes without a Topic.
    - 1:1 bidirectional communication between nodes
    - The service can be offered to more than one node. That means parallel 1:1 communications han be handled.

* Master: The ROS master is the process that manages the whole communication. There is always a ROS Master, but it doesnt need to be on the same machine. They provide "DNS" to the rest of nodes, manages subscriptions to topics and allows nodes to find each others.

## Communication in ROS
* All nodes have to register themselves on the Master
* All Topics and Services have to register themselves on the Master
* Master have to be started before all the other processes

## Commands
* rosnode
* rostopic
* rosservice
* rosparam
* rosmsg
* rossrv
* rqt_graph
* (roslaunch)

```bash
// Always have to be active
// "OS", without it anything can be launched
// Often its launched on background
roscore &
```

```sh
// Launch Nodes
// Nodes have to be compiled with roscore active
rosrun <package> <node>
```

```sh
// Offer information about nodes
rosnode list
rosnode ping <name>
rosnode info <name>
rosnode kill <name>
```

```sh
// Offer information about topics, publications and subscriptions
rostopic list
rostopic info <topic>
rostopic echo <topic> // Show messages published on a topic
rostopic pub <topic> <data>
```
